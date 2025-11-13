"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

/**
 * Google Analytics Page Tracker (needs Suspense boundary)
 */
function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!GA_MEASUREMENT_ID) return;

    const url = pathname + searchParams.toString();

    // Track page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

/**
 * Google Analytics Component
 * Add your GA_MEASUREMENT_ID to .env.local:
 * NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
 */
export function GoogleAnalytics() {

  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsTracker />
      </Suspense>
    </>
  );
}

/**
 * Vercel Analytics (Alternative)
 * Install: npm install @vercel/analytics
 * Automatically works on Vercel, no setup needed
 */
export function VercelAnalytics() {
  // This is a placeholder - install @vercel/analytics to use
  // import { Analytics } from '@vercel/analytics/react';
  // return <Analytics />;
  return null;
}

/**
 * Event tracking helper
 */
export const trackEvent = {
  // Track button clicks
  click: (label: string, category = "engagement") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: category,
        event_label: label,
      });
    }
  },

  // Track form submissions
  formSubmit: (formName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        form_name: formName,
      });
    }
  },

  // Track project views
  viewProject: (projectName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "view_item", {
        item_name: projectName,
        item_category: "project",
      });
    }
  },

  // Track downloads
  download: (fileName: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "file_download", {
        file_name: fileName,
      });
    }
  },

  // Track external link clicks
  externalLink: (url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "external_link",
        event_label: url,
      });
    }
  },

  // Track social shares
  share: (platform: string, url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "share", {
        method: platform,
        content_type: "website",
        item_id: url,
      });
    }
  },
};

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
