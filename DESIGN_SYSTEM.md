# Design System Documentation

A comprehensive design system for the portfolio with modern aesthetics, animations, and reusable components.

## Table of Contents

- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing & Layout](#spacing--layout)
- [Components](#components)
- [Animations](#animations)
- [Usage Examples](#usage-examples)

---

## Color Palette

### Primary Colors

The design system uses a modern blue-to-purple gradient palette:

#### Light Mode

- **Primary**: `hsl(221 83% 53%)` - Modern Blue
- **Secondary**: `hsl(262 83% 58%)` - Purple Accent
- **Accent**: `hsl(280 65% 60%)` - Vibrant Purple/Pink
- **Background**: `hsl(0 0% 100%)` - Pure White
- **Foreground**: `hsl(222 47% 11%)` - Dark Text

#### Dark Mode

- **Primary**: `hsl(217 91% 60%)` - Brighter Blue
- **Secondary**: `hsl(262 80% 65%)` - Vibrant Purple
- **Accent**: `hsl(280 70% 65%)` - Pink/Purple
- **Background**: `hsl(222 47% 11%)` - Deep Dark
- **Foreground**: `hsl(210 40% 98%)` - Light Text

### Semantic Colors

- **Success**: Green tones for positive actions
- **Warning**: Orange/Yellow for caution
- **Destructive**: Red for errors and dangerous actions
- **Muted**: Subdued colors for secondary content

### Gradients

Pre-defined gradient combinations:

```css
--gradient-primary: linear-gradient(135deg, primary → secondary)
  --gradient-secondary: linear-gradient(135deg, secondary → accent)
  --gradient-accent: linear-gradient(135deg, accent → pink);
```

#### Usage in Tailwind

```tsx
<div className="gradient-bg-primary">Content</div>
<h1 className="gradient-text">Gradient Heading</h1>
```

---

## Typography

### Font Families

- **Body Text**: Inter (Google Font)
  - Clean, modern sans-serif
  - Excellent readability
  - Variable weights: 300-800

- **Headings**: Space Grotesk (Google Font)
  - Distinctive, bold character
  - Perfect for headlines
  - Variable weights: 400-700

### Font Scale

| Element | Class                    | Size (Desktop) | Size (Mobile) |
| ------- | ------------------------ | -------------- | ------------- |
| H1      | `text-4xl...lg:text-7xl` | 72px           | 36px          |
| H2      | `text-3xl...md:text-5xl` | 48px           | 30px          |
| H3      | `text-2xl...md:text-4xl` | 36px           | 24px          |
| H4      | `text-xl...md:text-3xl`  | 30px           | 20px          |
| H5      | `text-lg...md:text-2xl`  | 24px           | 18px          |
| H6      | `text-base...md:text-xl` | 20px           | 16px          |
| Body    | `text-base`              | 16px           | 16px          |
| Small   | `text-sm`                | 14px           | 14px          |
| Tiny    | `text-xs`                | 12px           | 12px          |

### Typography Components

```tsx
import { Heading, Text, GradientText } from "@/components/ui";

// Headings
<Heading variant="h1">Main Heading</Heading>
<Heading variant="h2" gradient>Gradient Heading</Heading>

// Text
<Text variant="body">Regular paragraph text</Text>
<Text variant="lead">Lead paragraph - larger, muted</Text>
<Text variant="muted">Secondary information</Text>

// Gradient text
<GradientText>This text has a gradient</GradientText>
```

---

## Spacing & Layout

### Spacing Scale

Consistent spacing based on 4px increments:

| Token | Value | Usage           |
| ----- | ----- | --------------- |
| `1`   | 4px   | Minimal spacing |
| `2`   | 8px   | Tight spacing   |
| `4`   | 16px  | Default spacing |
| `6`   | 24px  | Medium spacing  |
| `8`   | 32px  | Large spacing   |
| `12`  | 48px  | Section spacing |
| `16`  | 64px  | Major sections  |
| `24`  | 96px  | Hero sections   |

### Container Utilities

```tsx
// Pre-defined container sizes
<div className="container-sm">Max-width: 768px (3xl)</div>
<div className="container-md">Max-width: 1024px (5xl)</div>
<div className="container-lg">Max-width: 1280px (7xl)</div>

// Section padding
<section className="section-padding">py-16 md:py-24 lg:py-32</section>
<section className="section-padding-sm">py-12 md:py-16 lg:py-20</section>
```

---

## Components

### Button

Multiple variants with consistent styling:

```tsx
import { Button } from "@/components/ui";

<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Card Components

#### Standard Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>Card content goes here</CardContent>
</Card>;
```

#### Glass Card (Glassmorphism)

```tsx
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardContent,
} from "@/components/ui";

<GlassCard hover>
  <GlassCardHeader>
    <GlassCardTitle>Glass Card</GlassCardTitle>
  </GlassCardHeader>
  <GlassCardContent>
    Beautiful glassmorphism effect with blur and transparency
  </GlassCardContent>
</GlassCard>;
```

### Badge

```tsx
import { Badge } from "@/components/ui";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

### Form Components

```tsx
import { Input, Textarea, Label } from "@/components/ui";

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="Enter your email" />
</div>

<div>
  <Label htmlFor="message">Message</Label>
  <Textarea id="message" placeholder="Your message..." />
</div>
```

### Dialog

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description text</DialogDescription>
    </DialogHeader>
    {/* Dialog content */}
  </DialogContent>
</Dialog>;
```

---

## Animations

### Animation Library

Import from `@/lib/animations`:

```tsx
import {
  fadeIn,
  fadeInUp,
  slideInLeft,
  staggerContainer,
  listItem,
  heroTitle,
} from "@/lib/animations";
```

### Basic Animations

| Animation      | Description               | Usage                    |
| -------------- | ------------------------- | ------------------------ |
| `fadeIn`       | Simple fade in/out        | Subtle appearances       |
| `fadeInUp`     | Fade with upward motion   | Cards, content blocks    |
| `fadeInDown`   | Fade with downward motion | Dropdowns, notifications |
| `slideInLeft`  | Slide from left           | Side navigation          |
| `slideInRight` | Slide from right          | Panels, sidebars         |
| `scale`        | Scale animation           | Modals, popups           |
| `zoomIn`       | Zoom effect               | Images, featured content |

### Container Animations

```tsx
import { motion } from "framer-motion";
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
import { motion } from "framer-motion";
import { heroTitle, heroSubtitle, heroCTA } from "@/lib/animations";

<section>
  <motion.h1 variants={heroTitle} initial="initial" animate="animate">
    Hero Title
  </motion.h1>
  <motion.p variants={heroSubtitle} initial="initial" animate="animate">
    Hero subtitle text
  </motion.p>
  <motion.div variants={heroCTA} initial="initial" animate="animate">
    <Button>Call to Action</Button>
  </motion.div>
</section>;
```

### Hover Effects

```tsx
import { motion } from "framer-motion";
import { hoverScale, hoverLift } from "@/lib/animations";

// Scale on hover
<motion.div {...hoverScale}>
  Content
</motion.div>

// Lift on hover
<motion.div {...hoverLift}>
  Content
</motion.div>
```

### Tailwind CSS Animations

```tsx
// Built-in Tailwind animations
<div className="animate-fade-in">Fade in</div>
<div className="animate-fade-up">Fade up</div>
<div className="animate-slide-in-left">Slide from left</div>

// Hover effects
<div className="hover-lift">Lifts on hover</div>
<div className="hover-glow">Glows on hover</div>
<div className="hover-scale">Scales on hover</div>
```

---

## Usage Examples

### Hero Section

```tsx
"use client";

import { motion } from "framer-motion";
import { Heading, Text, Button } from "@/components/ui";
import { heroTitle, heroSubtitle, heroCTA } from "@/lib/animations";

export function Hero() {
  return (
    <section className="section-padding container-lg">
      <motion.div variants={heroTitle} initial="initial" animate="animate">
        <Heading variant="h1" gradient>
          Welcome to My Portfolio
        </Heading>
      </motion.div>

      <motion.div variants={heroSubtitle} initial="initial" animate="animate">
        <Text variant="lead" className="mx-auto mt-6 max-w-2xl">
          I'm a developer passionate about creating beautiful, functional web
          experiences.
        </Text>
      </motion.div>

      <motion.div
        variants={heroCTA}
        initial="initial"
        animate="animate"
        className="mt-8 flex justify-center gap-4"
      >
        <Button size="lg">View Projects</Button>
        <Button size="lg" variant="outline">
          Contact Me
        </Button>
      </motion.div>
    </section>
  );
}
```

### Project Cards Grid

```tsx
"use client";

import { motion } from "framer-motion";
import {
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardContent,
  Badge,
} from "@/components/ui";
import { staggerContainer, gridItem } from "@/lib/animations";

export function ProjectsGrid() {
  const projects = [
    /* ... */
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={gridItem}>
          <GlassCard hover className="h-full">
            <GlassCardHeader>
              <GlassCardTitle>{project.title}</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent>
              <p className="text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCardContent>
          </GlassCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Feature List

```tsx
"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Text,
} from "@/components/ui";
import { staggerContainer, listItem } from "@/lib/animations";

export function Features() {
  const features = [
    /* ... */
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-4"
    >
      {features.map((feature) => (
        <motion.div key={feature.id} variants={listItem}>
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="muted">{feature.description}</Text>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
```

---

## Customization

### Changing Colors

Edit [app/globals.css](app/globals.css) and modify the CSS variables:

```css
:root {
  --primary: 221 83% 53%; /* Change primary color */
  --secondary: 262 83% 58%; /* Change secondary color */
  --accent: 280 65% 60%; /* Change accent color */
}
```

### Adding Custom Animations

Add to [lib/animations.ts](lib/animations.ts):

```ts
export const customAnimation: Variants = {
  initial: {
    /* initial state */
  },
  animate: {
    /* animated state */
  },
  exit: {
    /* exit state */
  },
};
```

### Creating New Components

Follow the established patterns:

1. Use `cva` for variant-based styling
2. Export with proper TypeScript types
3. Add to [components/ui/index.ts](components/ui/index.ts)
4. Document usage

---

## Best Practices

1. **Consistency**: Use design tokens (colors, spacing, typography) throughout
2. **Accessibility**: All components are WCAG compliant
3. **Performance**: Use CSS animations for simple effects, Framer Motion for complex
4. **Responsive**: Mobile-first approach with responsive variants
5. **Dark Mode**: All components support dark mode automatically
6. **Type Safety**: Leverage TypeScript for component props

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Inter Font](https://fonts.google.com/specimen/Inter)
- [Space Grotesk Font](https://fonts.google.com/specimen/Space+Grotesk)

---

Built with Next.js 14 • Tailwind CSS • shadcn/ui • Framer Motion
