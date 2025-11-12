# Performance & SEO Optimization Guide

## Overview

Complete guide for the performance, SEO, and accessibility optimizations implemented in this portfolio.

---

## Table of Contents

1. [SEO Configuration](#seo-configuration)
2. [Performance Optimizations](#performance-optimizations)
3. [Accessibility](#accessibility)
4. [Analytics](#analytics)
5. [Loading Skeletons](#loading-skeletons)
6. [Best Practices](#best-practices)

---

## SEO Configuration

### Metadata Setup

All SEO utilities are located in `lib/seo.ts`.

#### Basic Usage

```tsx
// app/page.tsx
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Home",
  description: "Welcome to my portfolio",
});
```

#### Custom Page Metadata

```tsx
export const metadata = generateMetadata({
  title: "Projects",
  description: "View my latest projects and work",
  keywords: ["React Projects", "Next.js Apps", "Web Development"],
  url: "/projects",
});
```

### Site Configuration

Update `lib/seo.ts` with your information:

```tsx
export const siteConfig = {
  name: "Your Name - Full Stack Developer",
  description: "Your description here",
  url: "https://yourwebsite.com",
  ogImage: "https://yourwebsite.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.email@example.com",
  },
  creator: "Your Name",
  keywords: [
    // Your keywords here
  ],
};
```

### Open Graph Images

Create Open Graph images for social sharing:

1. **Size**: 1200x630px
2. **Format**: JPG or PNG
3. **Location**: `/public/og-image.jpg`
4. **Per-page images**: `/public/og-projects.jpg`, `/public/og-about.jpg`

### JSON-LD Structured Data

Add structured data to pages for better SEO:

```tsx
import { JsonLd, generatePersonSchema, generateWebSiteSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd data={generatePersonSchema()} />
      <JsonLd data={generateWebSiteSchema()} />
      {/* Page content */}
    </>
  );
}
```

#### Available Schemas

1. **Person Schema** - For personal/professional identity
2. **Website Schema** - For the main site
3. **Breadcrumb Schema** - For navigation
4. **Project Schema** - For individual projects
5. **Article Schema** - For blog posts

Example for a project page:

```tsx
<JsonLd
  data={generateProjectSchema({
    name: "Project Name",
    description: "Project description",
    image: "/projects/project-image.jpg",
    url: "/projects/project-name",
    technologies: ["React", "TypeScript", "Next.js"],
    datePublished: "2024-01-01",
  })}
/>
```

### Sitemap

Sitemap is automatically generated at `/sitemap.xml`.

To add new routes, update `app/sitemap.ts`:

```tsx
{
  url: `${siteConfig.url}/new-page`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.7,
}
```

### Robots.txt

Robots.txt is automatically generated at `/robots.txt`.

To modify crawling rules, update `app/robots.ts`:

```tsx
{
  userAgent: "*",
  allow: "/",
  disallow: ["/api/", "/_next/", "/private/"],
}
```

---

## Performance Optimizations

### Image Optimization

Always use Next.js `Image` component:

```tsx
import Image from "next/image";

<Image
  src="/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  loading="lazy"
  quality={85}
/>;
```

#### Image Best Practices

1. **Formats**: Use WebP/AVIF when possible
2. **Sizes**: Provide multiple sizes for responsive images
3. **Lazy Loading**: Default for images below the fold
4. **Priority**: Use `priority` prop for above-the-fold images
5. **Blur Placeholder**: Add blur placeholders for better UX

### Font Optimization

Fonts are optimized using `next/font`. Update `app/layout.tsx`:

```tsx
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

#### Font Loading Strategy

- **display: "swap"** - Show fallback font immediately
- **subsets** - Only load required character sets
- **variable** - Use CSS variables for flexibility
- **preload** - Automatically preloaded by Next.js

### Code Splitting

Next.js automatically code-splits by page. For heavy components:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Skeleton />,
  ssr: false, // Disable SSR if not needed
});
```

### Bundle Analysis

Analyze bundle size:

```bash
npm install @next/bundle-analyzer

# Add to next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

### Loading Skeletons

Use loading skeletons for better perceived performance:

```tsx
import { ProjectCardSkeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
```

### Performance Metrics

Monitor Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTI (Time to Interactive)**: < 3.8s

---

## Accessibility

### ARIA Labels

Add ARIA labels to interactive elements:

```tsx
<button aria-label="Open menu">
  <MenuIcon />
</button>

<nav aria-label="Main navigation">
  {/* Nav items */}
</nav>
```

### Heading Hierarchy

Maintain proper heading order:

```tsx
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
  <h2>Another Section</h2>
```

### Alt Text

Always provide descriptive alt text:

```tsx
<Image
  src="/project.jpg"
  alt="E-commerce dashboard showing sales analytics and user metrics"
  width={800}
  height={600}
/>
```

### Keyboard Navigation

Ensure all interactive elements are keyboard accessible:

```tsx
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }}
>
  Click me
</div>
```

### Focus Indicators

Visible focus indicators are automatically applied via `globals.css`:

```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.3);
}
```

### Color Contrast

GitHub theme maintains WCAG 2.1 AA compliance:

- Text on background: 14.32:1 (AAA)
- Secondary text: 5.12:1 (AA)
- Links: 7.84:1 (AAA)

### Screen Reader Support

Add screen reader-only text:

```tsx
<span className="sr-only">Opens in new window</span>
```

Add to `globals.css`:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Analytics

### Google Analytics Setup

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

4. Add to `app/layout.tsx`:

```tsx
import { GoogleAnalytics } from "@/components/analytics";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
```

### Event Tracking

Track custom events:

```tsx
import { trackEvent } from "@/components/analytics";

// Track button click
<button onClick={() => {
  trackEvent.click("Download CV");
  // ... other logic
}}>
  Download CV
</button>

// Track form submission
const handleSubmit = async (data) => {
  await submitForm(data);
  trackEvent.formSubmit("Contact Form");
};

// Track project view
<Link href="/projects/project-1" onClick={() => {
  trackEvent.viewProject("E-commerce Platform");
}}>
  View Project
</Link>
```

### Vercel Analytics (Alternative)

For Vercel deployments:

```bash
npm install @vercel/analytics
```

```tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Loading Skeletons

### Available Skeletons

```tsx
import {
  Skeleton,
  ProjectCardSkeleton,
  TestimonialCardSkeleton,
  ServiceCardSkeleton,
  StatsCardSkeleton,
  PageSkeleton,
} from "@/components/ui/skeleton";
```

### Usage Examples

#### Loading State

```tsx
// app/projects/loading.tsx
export default function ProjectsLoading() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
```

#### Conditional Rendering

```tsx
{
  isLoading ? (
    <ProjectCardSkeleton />
  ) : (
    <ProjectCard project={project} />
  );
}
```

#### Custom Skeleton

```tsx
<div className="space-y-4">
  <Skeleton className="h-12 w-3/4" />
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-5/6" />
</div>
```

---

## Best Practices

### Checklist

#### Performance ✓

- [ ] All images use Next.js `Image` component
- [ ] Lazy loading for below-the-fold content
- [ ] Code splitting for heavy components
- [ ] Fonts optimized with `next/font`
- [ ] Bundle size under 250KB (gzipped)
- [ ] Core Web Vitals pass thresholds
- [ ] Loading skeletons for async content

#### SEO ✓

- [ ] Unique title and description per page
- [ ] Open Graph tags configured
- [ ] Twitter Card tags configured
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured
- [ ] JSON-LD structured data added
- [ ] Canonical URLs set
- [ ] Meta keywords relevant
- [ ] Alt text for all images

#### Accessibility ✓

- [ ] Proper heading hierarchy (h1 → h6)
- [ ] ARIA labels on interactive elements
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader tested
- [ ] Skip to content link (if applicable)
- [ ] Forms have proper labels

#### Analytics ✓

- [ ] Analytics configured
- [ ] Page views tracked
- [ ] Custom events tracked
- [ ] Conversion goals set
- [ ] Privacy policy added (if using cookies)

### Tools for Testing

1. **Lighthouse** - Built into Chrome DevTools
2. **PageSpeed Insights** - [pagespeed.web.dev](https://pagespeed.web.dev)
3. **GTmetrix** - [gtmetrix.com](https://gtmetrix.com)
4. **WebPageTest** - [webpagetest.org](https://webpagetest.org)
5. **Google Search Console** - [search.google.com/search-console](https://search.google.com/search-console)
6. **Schema.org Validator** - [validator.schema.org](https://validator.schema.org)
7. **WAVE** - [wave.webaim.org](https://wave.webaim.org)
8. **axe DevTools** - Chrome/Firefox extension

### Monitoring

#### Performance Monitoring

```bash
# Run Lighthouse
npx lighthouse https://yoursite.com --view

# Next.js build analysis
npm run build
# Check output for bundle sizes
```

#### SEO Monitoring

- Submit sitemap to Google Search Console
- Monitor indexing status
- Track search rankings
- Check for crawl errors
- Review structured data errors

#### Accessibility Audits

```bash
# Install axe-core
npm install @axe-core/cli

# Run audit
axe https://yoursite.com
```

---

## Environment Variables

Create `.env.local`:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Resend (for contact form)
RESEND_API_KEY=re_your_key_here
CONTACT_EMAIL=your.email@example.com

# Site Configuration (optional)
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

---

## Deployment Checklist

Before deploying:

1. ✓ Update `lib/seo.ts` with your information
2. ✓ Create Open Graph images
3. ✓ Configure analytics
4. ✓ Test all meta tags
5. ✓ Verify sitemap.xml
6. ✓ Check robots.txt
7. ✓ Test accessibility
8. ✓ Run Lighthouse audit
9. ✓ Verify mobile responsiveness
10. ✓ Check Core Web Vitals

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Google Search Central](https://developers.google.com/search)
- [Web.dev - Learn Web Vitals](https://web.dev/vitals/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org Documentation](https://schema.org)
- [Open Graph Protocol](https://ogp.me/)
