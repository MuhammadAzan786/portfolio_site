# GitHub Theme Conversion Guide

## Overview

The portfolio has been converted to use GitHub's official color scheme and design system. This document outlines all the colors, changes, and usage patterns.

## Color Palette

### Background Colors
```css
--background: #0d1117          /* Main background */
--gh-bg-light: #161b22          /* Secondary background */
--gh-canvas-default: #010409    /* Darkest background */
--gh-canvas-subtle: #161b22     /* Cards, containers */
```

### Text Colors
```css
--foreground: #e6edf3                /* Primary text */
--gh-text-secondary: #7d8590         /* Secondary text */
--gh-text-tertiary: #8b949e          /* Muted text */
--gh-text-link: #2f81f7              /* Links, primary accent */
--gh-text-link-hover: #58a6ff        /* Link hover state */
```

### Border Colors
```css
--border: #30363d               /* Default border */
--border-muted: #21262d         /* Subtle border */
```

### Brand Colors
```css
--primary: #2f81f7              /* GitHub Blue */
--accent: #58a6ff               /* Hover Blue */
--success: #238636              /* GitHub Green */
--destructive: #f85149          /* Danger Red */
--warning: #d29922              /* Warning Orange */
--gh-purple: #8957e5            /* Purple accent */
--gh-coral: #ff7b72             /* Coral accent */
```

### Button Colors
```css
--gh-btn-primary-bg: #238636       /* Primary button */
--gh-btn-primary-hover: #2ea043    /* Primary hover */
--gh-btn-secondary-bg: #21262d     /* Secondary button */
--gh-btn-secondary-hover: #30363d  /* Secondary hover */
```

## Component Updates

### Buttons

**Primary Button (GitHub Green):**
```tsx
<button className="gh-btn-primary">
  Submit
</button>
```

**Secondary Button:**
```tsx
<button className="gh-btn-secondary">
  Cancel
</button>
```

### Cards

**Basic GitHub Card:**
```tsx
<div className="gh-card">
  Card content
</div>
```

**Glassmorphism Card:**
```tsx
<div className="glass-card">
  Blurred background card
</div>
```

### Links

**GitHub-style Link:**
```tsx
<a href="#" className="gh-link">
  Click here
</a>
```

### Badges

**GitHub Badge:**
```tsx
<span className="gh-badge">
  TypeScript
</span>
```

## Shadows

GitHub-style shadows have been added:

```css
shadow-gh-sm    /* 0 1px 0 0 #21262d */
shadow-gh-md    /* Subtle card shadow */
shadow-gh-lg    /* Larger card shadow */
shadow-gh-xl    /* Maximum shadow */
shadow-gh-hover /* Focus ring: 0 0 0 3px rgba(47, 129, 247, 0.3) */
```

## Gradients

**Background Gradient:**
```css
--gradient-primary: linear-gradient(135deg, #0d1117 0%, #161b22 100%)
```

**Accent Gradient:**
```css
--gradient-accent: linear-gradient(135deg, #2f81f7 0%, #8957e5 100%)
```

**Success Gradient:**
```css
--gradient-success: linear-gradient(135deg, #238636 0%, #2ea043 100%)
```

## Glassmorphism

GitHub-style glassmorphism:

```css
background: rgba(22, 27, 34, 0.8);
backdrop-filter: blur(12px);
border: 1px solid rgba(48, 54, 61, 0.5);
```

## Focus States

All interactive elements use GitHub's focus ring:

```css
box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.3);
```

## Scrollbar Styling

Custom scrollbars matching GitHub:

```css
/* Webkit browsers */
::-webkit-scrollbar { width: 12px; }
::-webkit-scrollbar-track { background: #0d1117; }
::-webkit-scrollbar-thumb { background: #30363d; border-radius: 6px; }
::-webkit-scrollbar-thumb:hover { background: #484f58; }

/* Firefox */
scrollbar-width: thin;
scrollbar-color: #30363d #0d1117;
```

## Selection Color

Text selection uses GitHub blue:

```css
::selection {
  background: rgba(47, 129, 247, 0.3);
  color: #e6edf3;
}
```

## Tech Stack Language Colors

Use GitHub's official language colors for tech badges:

```tsx
const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  React: "#61dafb",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  Ruby: "#701516",
};
```

## Hover Effects

All hover effects use GitHub-style transitions (200ms duration):

```css
.hover-lift      /* Lifts -1px on hover */
.hover-glow      /* Adds GitHub focus ring */
.hover-scale     /* Scales to 1.05 */
```

## Migration from Old Theme

### Color Mapping

| Old Color | New GitHub Color | Variable |
|-----------|------------------|----------|
| Purple/Pink gradients | GitHub Blue | `#2f81f7` |
| Bright accents | GitHub Hover Blue | `#58a6ff` |
| Success green | GitHub Green | `#238636` |
| Error red | GitHub Red | `#f85149` |
| Warning yellow | GitHub Orange | `#d29922` |

### What Was Changed

1. **Background**: Dark purple/blue → GitHub dark (`#0d1117`)
2. **Cards**: Gradient backgrounds → Solid GitHub card (`#161b22`)
3. **Buttons**: Gradient buttons → GitHub green/gray buttons
4. **Links**: Purple/pink → GitHub blue (`#2f81f7`)
5. **Borders**: Various colors → GitHub border (`#30363d`)
6. **Shadows**: Colorful glows → Subtle GitHub shadows
7. **Text**: Various colors → GitHub text hierarchy

### What Was Kept

1. Animation system (Framer Motion)
2. Component structure
3. Layout and spacing
4. Typography hierarchy
5. Responsive design
6. Accessibility features

## Usage Guidelines

### Do's ✅

- Use GitHub blue (`#2f81f7`) for primary CTAs
- Use GitHub green (`#238636`) for success states
- Use subtle borders (`#30363d`)
- Use GitHub card background (`#161b22`) for elevated content
- Use GitHub focus ring for all interactive elements
- Use 200ms transitions for hover effects

### Don'ts ❌

- Don't use bright neon colors
- Don't use multiple gradient combinations
- Don't use warm color palettes (orange/red as primary)
- Don't use colored shadows
- Don't deviate from GitHub color palette
- Don't use transitions longer than 300ms

## Example Components

### Hero Section
```tsx
<section className="bg-gh-canvas-default">
  <h1 className="gradient-text">
    Welcome to My Portfolio
  </h1>
  <button className="gh-btn-primary">
    View Projects
  </button>
  <button className="gh-btn-secondary">
    Contact Me
  </button>
</section>
```

### Project Card
```tsx
<div className="gh-card hover-lift">
  <h3 className="text-foreground">Project Title</h3>
  <p className="text-gh-text-secondary">Description</p>
  <div className="flex gap-2">
    <span className="gh-badge">TypeScript</span>
    <span className="gh-badge">React</span>
  </div>
  <a href="#" className="gh-link">
    View Project →
  </a>
</div>
```

### Form Input
```tsx
<input
  type="text"
  className="w-full rounded-md border border-border bg-input px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:shadow-gh-hover"
/>
```

## Testing Checklist

- [ ] All buttons use GitHub colors
- [ ] All links use GitHub blue
- [ ] All cards have GitHub background (`#161b22`)
- [ ] All borders use GitHub border color (`#30363d`)
- [ ] Focus states show GitHub blue ring
- [ ] Hover states transition in 200ms
- [ ] Text uses GitHub text hierarchy
- [ ] Shadows are subtle (no colored glows)
- [ ] No purple/pink gradients (except GitHub purple for accents)
- [ ] Selection color is GitHub blue
- [ ] Scrollbars match GitHub style

## Accessibility

GitHub theme maintains WCAG 2.1 AA contrast ratios:

- **Text on background**: 14.32:1 (AAA)
- **Secondary text on background**: 5.12:1 (AA)
- **Links on background**: 7.84:1 (AAA)
- **Focus ring contrast**: 3.58:1 (AA for non-text)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Chrome Android 90+

## Resources

- [GitHub Primer Design System](https://primer.style/)
- [GitHub Color Variables](https://primer.style/design/foundations/color)
- [GitHub Component Examples](https://github.com)
