# Quick Start Guide

Get your portfolio up and running in minutes!

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your information

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## Initial Customization

### 1. Update Site Configuration

Edit [constants/index.ts](constants/index.ts):

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  description: "Your portfolio description",
  url: "https://yourwebsite.com",
  author: {
    name: "Your Name",
    email: "your.email@example.com",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "mailto:your.email@example.com",
  },
};
```

### 2. Customize Home Page

Edit [app/page.tsx](app/page.tsx) to personalize your landing page.

### 3. Add Your Content

- **About Page**: Edit [app/(routes)/about/page.tsx](<app/(routes)/about/page.tsx>)
- **Projects**: Edit [app/(routes)/projects/page.tsx](<app/(routes)/projects/page.tsx>)
- **Contact**: Edit [app/(routes)/contact/page.tsx](<app/(routes)/contact/page.tsx>)

### 4. Update Metadata

Edit [app/layout.tsx](app/layout.tsx) to update SEO metadata.

## Next Steps

### Add More shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

### Customize Theme

Edit CSS variables in [app/globals.css](app/globals.css) to change colors:

```css
:root {
  --primary: 262.1 83.3% 57.8%;
  --secondary: 220 14.3% 95.9%;
  /* ... more colors */
}
```

### Add Animations

Use Framer Motion for animations:

```typescript
import { motion } from "framer-motion";
import { fadeInUp } from "@/constants";

<motion.div {...fadeInUp}>
  Your content
</motion.div>
```

## Project Structure

```
app/               # Pages and routes
components/        # Reusable components
  ui/             # shadcn/ui components
  sections/       # Page sections
  shared/         # Shared components
lib/              # Utilities and hooks
types/            # TypeScript types
constants/        # Configuration
public/           # Static assets
```

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Deployment

### Deploy to Vercel (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic configuration)

### Environment Variables on Vercel

Add these in your Vercel project settings:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SITE_NAME`
- Any other variables from `.env.example`

## Tips

1. **Dark Mode**: Configured by default with shadcn/ui
2. **Responsive**: All components are mobile-first
3. **Type Safety**: Use the types from `/types/index.ts`
4. **SEO**: Add metadata to each page for better SEO
5. **Images**: Use `next/image` for automatic optimization

## Need Help?

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion)

---

Happy coding! 🚀
