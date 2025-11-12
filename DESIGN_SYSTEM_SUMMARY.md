# Design System - Quick Reference

## What's Been Created

A comprehensive design system with modern aesthetics, animations, and reusable components.

## 🎨 Color Palette

### Modern Blue-to-Purple Gradient System

- **Primary**: Modern Blue (`hsl(221 83% 53%)`)
- **Secondary**: Purple (`hsl(262 83% 58%)`)
- **Accent**: Pink/Purple (`hsl(280 65% 60%)`)
- Includes Success, Warning, and Destructive variants
- Full dark mode support with optimized contrast

### Pre-built Gradients

```tsx
<div className="gradient-bg-primary">...</div>
<h1 className="gradient-text">...</h1>
```

## 🔤 Typography

### Google Fonts

- **Body**: Inter (300-800)
- **Headings**: Space Grotesk (400-700)

### Typography Components

```tsx
import { Heading, Text, GradientText } from "@/components/ui";

<Heading variant="h1" gradient>Main Heading</Heading>
<Text variant="lead">Lead paragraph</Text>
<GradientText>Gradient text</GradientText>
```

## 📦 New Components

### Glass Card (Glassmorphism Effect)

```tsx
import { GlassCard, GlassCardHeader, GlassCardTitle } from "@/components/ui";

<GlassCard hover>
  <GlassCardHeader>
    <GlassCardTitle>Title</GlassCardTitle>
  </GlassCardHeader>
  <GlassCardContent>Content with blur effect</GlassCardContent>
</GlassCard>;
```

### Additional shadcn/ui Components

- Badge
- Dialog
- Avatar
- Skeleton
- Toast/Toaster
- Separator

## 🎬 Animation Library

Located in `/lib/animations.ts`:

### Basic Animations

```tsx
import { fadeIn, fadeInUp, slideInLeft, scale } from "@/lib/animations";

<motion.div variants={fadeInUp} initial="initial" animate="animate">
  Content
</motion.div>;
```

### Container Animations

```tsx
import { staggerContainer, listItem } from "@/lib/animations";

<motion.div variants={staggerContainer} initial="initial" animate="animate">
  {items.map((item) => (
    <motion.div key={item.id} variants={listItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>;
```

### Hero Animations

```tsx
import { heroTitle, heroSubtitle, heroCTA } from "@/lib/animations";
```

### Hover Effects

```tsx
import { hoverScale, hoverLift, hoverGlow } from "@/lib/animations";
```

## 🛠️ Utility Classes

### Container Sizes

```tsx
<div className="container-sm">Max-width: 768px</div>
<div className="container-md">Max-width: 1024px</div>
<div className="container-lg">Max-width: 1280px</div>
```

### Section Padding

```tsx
<section className="section-padding">Responsive padding</section>
```

### Hover Effects

```tsx
<div className="hover-lift">Lifts on hover</div>
<div className="hover-glow">Glows on hover</div>
<div className="hover-scale">Scales on hover</div>
```

### Glassmorphism

```tsx
<div className="glass-card">Beautiful glass effect</div>
```

## 📝 All Available Imports

```tsx
// UI Components
import {
  // Form
  Button,
  Input,
  Textarea,
  Label,

  // Cards
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,

  // Glass Cards
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardContent,

  // Typography
  Heading,
  Text,
  GradientText,
  Code,
  Pre,
  List,
  OrderedList,

  // UI Elements
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
  Avatar,
  Skeleton,
  Separator,
  toast,
  useToast,
  Toaster,
} from "@/components/ui";

// Animations
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideInLeft,
  slideInRight,
  scale,
  zoomIn,
  staggerContainer,
  listItem,
  gridItem,
  heroTitle,
  heroSubtitle,
  heroCTA,
  hoverScale,
  hoverLift,
  hoverGlow,
} from "@/lib/animations";
```

## 🚀 Quick Start Example

```tsx
"use client";

import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Button,
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardContent,
  Badge,
} from "@/components/ui";
import {
  heroTitle,
  heroSubtitle,
  staggerContainer,
  gridItem,
} from "@/lib/animations";

export function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="container-lg section-padding">
        <motion.div variants={heroTitle} initial="initial" animate="animate">
          <Heading variant="h1" gradient>
            Welcome to My Portfolio
          </Heading>
        </motion.div>

        <motion.div variants={heroSubtitle} initial="initial" animate="animate">
          <Text variant="lead" className="mx-auto mt-6 max-w-2xl">
            Building beautiful web experiences
          </Text>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container-lg section-padding">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={gridItem}>
              <GlassCard hover className="h-full">
                <GlassCardHeader>
                  <GlassCardTitle>{project.title}</GlassCardTitle>
                </GlassCardHeader>
                <GlassCardContent>
                  <Text variant="muted">{project.description}</Text>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </GlassCardContent>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
```

## 📚 Full Documentation

See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md) for complete documentation with:

- Color system details
- Typography scale
- All components with examples
- Animation library reference
- Best practices
- Customization guide

## 🎨 Customization

### Change Colors

Edit `app/globals.css` and modify CSS variables:

```css
:root {
  --primary: 221 83% 53%; /* Your primary color */
}
```

### Add Custom Animation

Edit `lib/animations.ts`:

```ts
export const myAnimation: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};
```

### Create New Component

1. Create in `components/ui/`
2. Use `cva` for variants
3. Export from `components/ui/index.ts`

---

Built with Next.js 14 • Tailwind CSS • shadcn/ui • Framer Motion
