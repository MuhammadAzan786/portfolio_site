# Navigation & Layout System

Complete navigation and layout implementation with smooth animations, glassmorphism, and mobile responsiveness.

## Components Created

### 1. Advanced Navbar ([components/shared/advanced-navbar.tsx](components/shared/advanced-navbar.tsx))

**Features:**

- ✨ Glassmorphism effect on scroll
- 🎯 Active link highlighting with animated underline
- 📱 Responsive mobile menu with slide animation
- 👻 Auto-hide on scroll down, show on scroll up
- 🎨 Smooth transitions and hover effects
- 🌗 Theme toggle integration

**Usage:**

```tsx
import { AdvancedNavbar } from "@/components/shared/advanced-navbar";

<AdvancedNavbar />;
```

**Key Features:**

- Sticky positioning with `position: fixed`
- Background changes to glass effect after 50px scroll
- Hides when scrolling down past 150px
- Active link indicator with smooth Framer Motion layout animation
- Mobile menu with staggered item animations
- Prevents body scroll when mobile menu is open

### 2. Advanced Footer ([components/shared/advanced-footer.tsx](components/shared/advanced-footer.tsx))

**Features:**

- 📱 Responsive 4-column grid (collapses on mobile)
- 🔗 Quick links to all pages
- 💬 Social media links with hover animations
- 📧 Contact information
- ⬆️ Back to top button (fixed bottom-right)
- ✨ Staggered fade-in animations

**Usage:**

```tsx
import { AdvancedFooter } from "@/components/shared/advanced-footer";

<AdvancedFooter />;
```

**Sections:**

1. **Brand Section**: Logo and description
2. **Quick Links**: Navigation to all pages
3. **Social Connect**: GitHub, LinkedIn, Twitter, Email
4. **Contact**: Email and CTA button

### 3. Theme Provider & Toggle

**Theme Provider** ([components/providers/theme-provider.tsx](components/providers/theme-provider.tsx)):

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider";

<ThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>;
```

**Theme Toggle** ([components/shared/theme-toggle.tsx](components/shared/theme-toggle.tsx)):

- Animated icon rotation
- Sun/Moon icons
- System, light, and dark modes
- Smooth transitions

### 4. Scroll Progress Indicator ([components/shared/scroll-progress.tsx](components/shared/scroll-progress.tsx))

**Features:**

- Fixed top position
- Gradient color (primary → secondary → accent)
- Smooth spring animation
- Shows reading progress

**Usage:**

```tsx
import { ScrollProgress } from "@/components/shared/scroll-progress";

<ScrollProgress />;
```

### 5. Loading Skeletons ([components/shared/page-loader.tsx](components/shared/page-loader.tsx))

**Components:**

- `PageLoader` - Full page skeleton
- `CardSkeleton` - Individual card skeleton

**Usage:**

```tsx
import { PageLoader, CardSkeleton } from "@/components/shared/page-loader";

// Full page loading
<PageLoader />

// Loading grid
<div className="grid gap-6 md:grid-cols-3">
  {loading && [...Array(6)].map((_, i) => (
    <CardSkeleton key={i} />
  ))}
</div>
```

## Root Layout Structure

**Updated [app/layout.tsx](app/layout.tsx):**

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            <AdvancedNavbar />
            <main className="flex-1">{children}</main>
            <AdvancedFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**Structure:**

1. **ScrollProgress** - Fixed at top
2. **AdvancedNavbar** - Auto-hiding sticky navbar
3. **main** - Page content with `flex-1`
4. **AdvancedFooter** - With back-to-top button
5. **Toaster** - Toast notifications

## Animations

### Navbar Animations

**Hide/Show on Scroll:**

```tsx
variants={{
  visible: { y: 0 },
  hidden: { y: "-100%" },
}}
```

**Active Link Indicator:**

```tsx
<motion.div
  layoutId="navbar-indicator"
  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
  transition={{
    type: "spring",
    stiffness: 380,
    damping: 30,
  }}
/>
```

**Mobile Menu:**

```tsx
initial={{ opacity: 0, x: "100%" }}
animate={{
  opacity: mobileMenuOpen ? 1 : 0,
  x: mobileMenuOpen ? 0 : "100%",
}}
transition={{ type: "spring", damping: 25, stiffness: 200 }}
```

### Footer Animations

**Staggered Items:**

```tsx
import { staggerContainer, listItem } from "@/lib/animations";

<motion.div variants={staggerContainer} initial="initial" whileInView="animate">
  <motion.div variants={listItem}>Item 1</motion.div>
  <motion.div variants={listItem}>Item 2</motion.div>
</motion.div>;
```

**Back to Top Button:**

```tsx
initial={{ opacity: 0, scale: 0 }}
whileInView={{ opacity: 1, scale: 1 }}
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
```

## Responsive Behavior

### Desktop (≥768px)

- Full horizontal navigation
- All social icons visible
- 4-column footer grid
- Logo + Navigation + Actions in navbar

### Mobile (<768px)

- Hamburger menu button
- Slide-in full-screen menu
- Stacked footer columns
- Touch-optimized buttons
- Overlay when menu open

## Glassmorphism Effect

**Applied on scroll:**

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
}
```

**Light Mode:**

- `--glass-bg: rgba(255, 255, 255, 0.7)`
- `--glass-border: rgba(255, 255, 255, 0.18)`

**Dark Mode:**

- `--glass-bg: rgba(30, 41, 59, 0.7)`
- `--glass-border: rgba(148, 163, 184, 0.18)`

## Scroll Behavior

### Navbar

- **0-50px**: Transparent background
- **50px+**: Glassmorphism effect
- **150px+ scrolling down**: Hides
- **Any scroll up**: Shows

### Back to Top Button

- Appears when page is scrolled
- Smooth scroll to top on click
- Fixed bottom-right position
- Animated entrance

## Key Technologies

- **Framer Motion** - All animations
- **next-themes** - Dark mode support
- **Lucide React** - Icon system
- **Tailwind CSS** - Styling
- **CSS Backdrop Filter** - Glassmorphism

## Customization

### Change Navbar Behavior

Edit [components/shared/advanced-navbar.tsx](components/shared/advanced-navbar.tsx):

```tsx
// Change hide threshold
if (latest > previous && latest > 150) {
  // Change 150
  setHidden(true);
}

// Change glass effect threshold
setScrolled(latest > 50); // Change 50
```

### Customize Colors

Edit [app/globals.css](app/globals.css):

```css
:root {
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.18);
}
```

### Modify Footer

Edit [components/shared/advanced-footer.tsx](components/shared/advanced-footer.tsx):

- Add/remove sections
- Change grid layout
- Modify social links
- Customize animations

## Best Practices

1. **Performance**: Navbar uses `useMotionValueEvent` for efficient scroll detection
2. **Accessibility**: All interactive elements have proper ARIA labels
3. **Mobile UX**: Body scroll is prevented when mobile menu is open
4. **Animation**: Uses `whileInView` with `once: true` for one-time animations
5. **SEO**: Proper semantic HTML structure

## Dependencies Added

```bash
npm install next-themes  # Dark mode support
```

All other dependencies were already included in the initial setup.

## Complete Example

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AdvancedNavbar } from "@/components/shared/advanced-navbar";
import { AdvancedFooter } from "@/components/shared/advanced-footer";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            <AdvancedNavbar />
            <main className="flex-1">{children}</main>
            <AdvancedFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Features Summary

✅ Sticky navigation with glassmorphism
✅ Auto-hide/show on scroll
✅ Active link highlighting with animation
✅ Responsive mobile menu with animations
✅ Theme toggle (light/dark/system)
✅ Scroll progress indicator
✅ Footer with social links and animations
✅ Back to top button
✅ Loading skeleton screens
✅ Full dark mode support
✅ Mobile-first responsive design
✅ Smooth page transitions
✅ Accessibility compliant

---

Built with Next.js 14 • Framer Motion • Tailwind CSS • next-themes
