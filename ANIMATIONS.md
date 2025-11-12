# Premium Animation System Documentation

## Overview

A comprehensive animation system built with Framer Motion, featuring scroll animations, page transitions, micro-interactions, background effects, and advanced cursor interactions. All animations respect `prefers-reduced-motion` for accessibility.

## Table of Contents

1. [Scroll Animations](#scroll-animations)
2. [Page Transitions](#page-transitions)
3. [Micro-Interactions](#micro-interactions)
4. [Background Effects](#background-effects)
5. [Cursor Effects](#cursor-effects)
6. [Animated Components](#animated-components)
7. [Performance](#performance)
8. [Accessibility](#accessibility)

---

## Scroll Animations

### Custom Hooks

Located in `lib/animations/scroll-animations.ts`

#### `useScrollAnimation(threshold)`
Scroll-triggered animations with Intersection Observer.

```tsx
import { useScrollAnimation } from "@/lib/animations/scroll-animations";

function MyComponent() {
  const { ref, isInView } = useScrollAnimation(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={ isInView ? { opacity: 1 } : {}}
    >
      Content
    </motion.div>
  );
}
```

#### `useParallax(speed)`
Parallax scrolling effect.

```tsx
const offset = useParallax(0.5);

<div style={{ transform: `translateY(${offset}px)` }}>
  Parallax content
</div>
```

#### `useScrollProgress()`
Get current scroll progress (0-100).

```tsx
const progress = useScrollProgress();

<div style={{ width: `${progress}%` }}>
  Progress bar
</div>
```

### Pre-built Animation Variants

```tsx
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  slideInLeft,
  slideInRight,
  rotateIn,
  blurIn,
} from "@/lib/animations/scroll-animations";

<motion.div variants={fadeInUp} initial="hidden" animate="visible">
  Animated content
</motion.div>
```

### Stagger Animations

```tsx
import {  staggerContainer, staggerItem } from "@/lib/animations/scroll-animations";

<motion.div variants={staggerContainer} initial="hidden" animate="show">
  {items.map((item) => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

## Page Transitions

Located in `lib/animations/page-transitions.ts`

### Basic Page Transitions

```tsx
import { pageFade, pageSlideUp, pageScale } from "@/lib/animations/page-transitions";

<motion.div {...pageFade}>
  Page content
</motion.div>
```

### Modal Transitions

```tsx
import { modalBackdrop, modalContent } from "@/lib/animations/page-transitions";

<AnimatePresence>
  {isOpen && (
    <>
      <motion.div {...modalBackdrop} onClick={onClose} />
      <motion.div {...modalContent}>
        Modal content
      </motion.div>
    </>
  )}
</AnimatePresence>
```

### Drawer Transitions

```tsx
import { drawerSlideLeft, drawerSlideRight } from "@/lib/animations/page-transitions";

<motion.div {...drawerSlideLeft}>
  Drawer content
</motion.div>
```

### Toast Notifications

```tsx
import { toastSlideIn } from "@/lib/animations/page-transitions";

<motion.div {...toastSlideIn}>
  Toast message
</motion.div>
```

---

## Micro-Interactions

Located in `lib/animations/micro-interactions.ts`

### Button Animations

```tsx
import { buttonPress } from "@/lib/animations/micro-interactions";

<motion.button {...buttonPress}>
  Click me
</motion.button>
```

### Icon Animations

```tsx
import {
  iconBounce,
  iconRotate,
  iconPulse,
  iconShake,
} from "@/lib/animations/micro-interactions";

<motion.div {...iconBounce}>
  <Icon />
</motion.div>
```

### Card Effects

```tsx
import { cardLift, cardScale, cardGlow } from "@/lib/animations/micro-interactions";

<motion.div {...cardLift}>
  Card content
</motion.div>
```

### Link Underline

```tsx
import { linkUnderline } from "@/lib/animations/micro-interactions";

<motion.a>
  Link text
  <motion.span variants={linkUnderline} initial="rest" whileHover="hover" />
</motion.a>
```

---

## Background Effects

Located in `components/ui/animated-background.tsx`

### Animated Mesh Background

Floating gradient orbs that create a dynamic mesh effect.

```tsx
import { AnimatedMeshBackground } from "@/components/ui";

<AnimatedMeshBackground />
```

### Noise Texture

Subtle grain effect for premium look.

```tsx
import { NoiseTexture } from "@/components/ui";

<NoiseTexture />
```

### Floating Shapes

Animated geometric shapes.

```tsx
import { FloatingShapes } from "@/components/ui";

<FloatingShapes />
```

### Animated Grid

Subtle grid pattern with fade.

```tsx
import { AnimatedGrid } from "@/components/ui";

<AnimatedGrid />
```

### Scroll Spotlight

Spotlight effect that follows scroll.

```tsx
import { ScrollSpotlight } from "@/components/ui";

<ScrollSpotlight />
```

### Gradient Border

Animated gradient border for cards.

```tsx
import { GradientBorder } from "@/components/ui";

<div className="relative">
  <GradientBorder className="opacity-50" />
  Content
</div>
```

### Parallax Layer

Wrap content for parallax effect.

```tsx
import { ParallaxLayer } from "@/components/ui";

<ParallaxLayer speed={0.5}>
  Content
</ParallaxLayer>
```

---

## Cursor Effects

Located in `lib/animations/cursor-effects.ts`

### Enhanced Cursor

The existing `CustomCursor` component already handles basic interactions. The cursor effects library provides utilities for advanced states.

```tsx
import {
  getCursorState,
  cursorVariants,
  ringVariants,
} from "@/lib/animations/cursor-effects";

// Get cursor state based on element
const state = getCursorState(element);

// Apply variant
<motion.div animate={cursorVariants[state]} />
```

### Magnetic Cursor Effect

```tsx
import { getMagneticOffset } from "@/lib/animations/cursor-effects";

const offset = getMagneticOffset(cursorX, cursorY, elementRect, 0.3);
```

### Cursor Trail

```tsx
import { getCursorTrail } from "@/lib/animations/cursor-effects";

const [trailPoints, setTrailPoints] = useState([]);

useEffect(() => {
  const handleMouseMove = (e) => {
    setTrailPoints(getCursorTrail(trailPoints, 10, e.clientX, e.clientY));
  };

  window.addEventListener("mousemove", handleMouseMove);
  return () => window.removeEventListener("mousemove", handleMouseMove);
}, [trailPoints]);
```

---

## Animated Components

### Animated Links

Located in `components/ui/animated-link.tsx`

```tsx
import { AnimatedLink } from "@/components/ui";

// Underline variant
<AnimatedLink href="/about" variant="underline">
  About
</AnimatedLink>

// Gradient variant
<AnimatedLink href="/contact" variant="gradient">
  Contact
</AnimatedLink>

// Glow variant
<AnimatedLink href="/projects" variant="glow">
  Projects
</AnimatedLink>

// External link
<AnimatedLink href="https://example.com" external>
  External
</AnimatedLink>
```

### Animated Buttons

```tsx
import { AnimatedButton } from "@/components/ui";

<AnimatedButton variant="primary" size="md" onClick={handleClick}>
  Click me
</AnimatedButton>
```

Variants: `primary`, `secondary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

### Animated Icon Button

```tsx
import { AnimatedIconButton } from "@/components/ui";

<AnimatedIconButton variant="bounce" onClick={handleClick}>
  <Icon />
</AnimatedIconButton>
```

Variants: `bounce`, `rotate`, `pulse`

### Text Animations

```tsx
import { TextReveal, CharacterReveal } from "@/components/ui";

// Word by word reveal
<TextReveal delay={0.2}>
  This text reveals word by word
</TextReveal>

// Character by character reveal
<CharacterReveal delay={0.5}>
  Character by character
</CharacterReveal>
```

### Tilt Cards

Located in `components/ui/tilt-card.tsx`

#### Basic Tilt Card

Full 3D tilt effect with glare.

```tsx
import { TiltCard } from "@/components/ui";

<TiltCard
  tiltAmount={10}
  glareEffect={true}
  scaleOnHover={true}
  className="p-6"
>
  Card content
</TiltCard>
```

#### Simple Tilt Card

Fixed tilt direction.

```tsx
import { SimpleTiltCard } from "@/components/ui";

<SimpleTiltCard intensity="medium">
  Card content
</SimpleTiltCard>
```

Intensities: `low`, `medium`, `high`

#### Parallax Tilt Card

With depth layers.

```tsx
import { ParallaxTiltCard } from "@/components/ui";

<ParallaxTiltCard
  layers={[
    <div className="bg-primary/10">Layer 1</div>,
    <div className="bg-secondary/10">Layer 2</div>,
  ]}
>
  Main content
</ParallaxTiltCard>
```

#### Magnetic Card

Pulls toward cursor.

```tsx
import { MagneticCard } from "@/components/ui";

<MagneticCard strength={0.3}>
  Card content
</MagneticCard>
```

---

## Performance

### Optimization Tips

1. **Use `will-change` sparingly**
   ```tsx
   style={{ willChange: "transform" }}
   ```

2. **Prefer `transform` and `opacity`**
   These properties are GPU-accelerated.

3. **Use `layout` animations carefully**
   Layout animations can be expensive. Use only when necessary.

4. **Limit number of animated elements**
   Don't animate hundreds of elements simultaneously.

5. **Use `AnimatePresence` mode="wait"**
   For page transitions to prevent overlapping animations.

6. **Debounce scroll events**
   The provided hooks already handle this efficiently.

### Performance Monitoring

```tsx
import { motion } from "framer-motion";

<motion.div
  onAnimationStart={() => console.log("Started")}
  onAnimationComplete={() => console.log("Completed")}
>
  Content
</motion.div>
```

---

## Accessibility

### Reduced Motion Support

All animations automatically respect the user's motion preferences.

```tsx
import { prefersReducedMotion, getAnimationConfig } from "@/lib/animations/scroll-animations";

// Check preference
if (prefersReducedMotion()) {
  // Skip animations
}

// Get config
const config = getAnimationConfig({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
});
```

### Keyboard Navigation

All interactive animated components support keyboard navigation:
- `Tab` - Focus next element
- `Shift + Tab` - Focus previous element
- `Enter` / `Space` - Activate button/link

### Screen Reader Support

```tsx
<AnimatedButton aria-label="Submit form">
  <Icon />
</AnimatedButton>

<AnimatedLink href="/about" aria-describedby="about-desc">
  About
</AnimatedLink>
```

### Focus Management

```tsx
<motion.button
  whileFocus={{ scale: 1.05 }}
  className="focus:outline-none focus:ring-2 focus:ring-primary"
>
  Button
</motion.button>
```

---

## Usage Examples

### Complete Page with Animations

```tsx
import {
  AnimatedMeshBackground,
  NoiseTexture,
  FloatingShapes,
  ScrollSpotlight,
  AnimatedLink,
  TiltCard,
} from "@/components/ui";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations/scroll-animations";

export default function Page() {
  return (
    <>
      {/* Background effects */}
      <AnimatedMeshBackground />
      <NoiseTexture />
      <FloatingShapes />
      <ScrollSpotlight />

      {/* Content */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="container py-20"
      >
        <motion.h1 variants={staggerItem} className="text-4xl">
          Welcome
        </motion.h1>

        <motion.div variants={staggerItem} className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <TiltCard key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <AnimatedLink href={item.link} variant="underline">
                Learn more
              </AnimatedLink>
            </TiltCard>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}
```

### Modal with Transitions

```tsx
import { AnimatePresence } from "framer-motion";
import { modalBackdrop, modalContent } from "@/lib/animations/page-transitions";

function Modal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            {...modalBackdrop}
            onClick={onClose}
            className="fixed inset-0 bg-black/50"
          />
          <motion.div
            {...modalContent}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            Modal content
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
```

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

### Fallbacks

For older browsers, animations gracefully degrade:
- Transforms fall back to static positioning
- Opacity transitions work in all browsers
- Backdrop filter has automatic fallback

---

## Troubleshooting

### Animation Not Working

1. Check if component is wrapped with `AnimatePresence` (for exit animations)
2. Verify Framer Motion is installed correctly
3. Check for conflicting CSS `transition` properties
4. Ensure `initial` and `animate` props are set

### Performance Issues

1. Reduce number of simultaneously animating elements
2. Use `viewport={{ once: true }}` to prevent re-animation
3. Simplify animation complexity
4. Check for memory leaks with `useEffect` cleanup

### Type Errors

1. Import types from Framer Motion: `import { Variants } from "framer-motion"`
2. Use proper type annotations for custom variants
3. Check component prop types match interface definitions

---

## Best Practices

1. **Start Simple** - Begin with basic animations, add complexity gradually
2. **Be Consistent** - Use similar animation styles throughout
3. **Don't Overdo It** - Too many animations can be distracting
4. **Test on Real Devices** - Performance varies across devices
5. **Respect User Preferences** - Always check `prefers-reduced-motion`
6. **Provide Feedback** - Animate user interactions (clicks, hovers)
7. **Use Semantic HTML** - Maintain accessibility
8. **Progressive Enhancement** - Ensure content works without animations

---

## Future Enhancements

- [ ] Spring physics customization tool
- [ ] Animation timeline editor
- [ ] Performance profiling dashboard
- [ ] Animation preset library
- [ ] Gesture-based interactions
- [ ] WebGL-based particle effects
- [ ] SVG morph animations
- [ ] Sound effects integration

---

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [CSS Triggers](https://csstriggers.com/)
- [Animation Principles](https://www.youtube.com/watch?v=1BHACAFWF08)
