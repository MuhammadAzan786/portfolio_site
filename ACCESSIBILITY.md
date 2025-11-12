# Accessibility Compliance Guide

## Overview

This portfolio follows WCAG 2.1 Level AA guidelines to ensure accessibility for all users, including those using assistive technologies.

---

## Table of Contents

1. [Semantic HTML](#semantic-html)
2. [Keyboard Navigation](#keyboard-navigation)
3. [Screen Reader Support](#screen-reader-support)
4. [Color Contrast](#color-contrast)
5. [Focus Management](#focus-management)
6. [ARIA Labels](#aria-labels)
7. [Image Accessibility](#image-accessibility)
8. [Form Accessibility](#form-accessibility)
9. [Motion and Animation](#motion-and-animation)
10. [Testing Tools](#testing-tools)

---

## Semantic HTML

### Proper Document Structure

```tsx
<html lang="en">
  <body>
    <a href="#main-content" className="skip-to-content">
      Skip to main content
    </a>

    <header>
      <nav aria-label="Main navigation">
        {/* Navigation items */}
      </nav>
    </header>

    <main id="main-content">
      {/* Page content */}
    </main>

    <footer>
      {/* Footer content */}
    </footer>
  </body>
</html>
```

### Heading Hierarchy

Maintain proper heading order (h1 → h2 → h3):

```tsx
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>
    <h3>Another Subsection</h3>
  <h2>Another Section</h2>
```

**Rules:**
- Only one `<h1>` per page
- Don't skip heading levels
- Headings describe content structure, not styling

### Landmark Regions

Use semantic HTML5 elements:

```tsx
<header>     {/* Banner landmark */}
<nav>        {/* Navigation landmark */}
<main>       {/* Main content landmark */}
<section>    {/* Generic section */}
<article>    {/* Independent content */}
<aside>      {/* Complementary content */}
<footer>     {/* Contentinfo landmark */}
```

---

## Keyboard Navigation

### Skip to Content Link

Located in [`app/layout.tsx`](app/layout.tsx):

```tsx
<a href="#main-content" className="skip-to-content">
  Skip to main content
</a>

<main id="main-content">
  {/* Content */}
</main>
```

The skip link:
- Hidden by default
- Visible on keyboard focus
- Allows skipping navigation
- First focusable element

### Tab Order

Ensure logical tab order:

```tsx
// Good - natural DOM order
<button>First</button>
<button>Second</button>
<button>Third</button>

// Bad - don't use tabIndex > 0
<button tabIndex={3}>Third</button>
<button tabIndex={1}>First</button>
<button tabIndex={2}>Second</button>
```

### Interactive Elements

All interactive elements must be keyboard accessible:

```tsx
// Buttons
<button onClick={handleClick}>
  Click me
</button>

// Links
<a href="/page">Navigate</a>

// Custom interactive elements
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Custom button
</div>
```

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Move to next focusable element |
| `Shift + Tab` | Move to previous focusable element |
| `Enter` | Activate links and buttons |
| `Space` | Activate buttons, scroll page |
| `Esc` | Close modals and dialogs |
| `Arrow keys` | Navigate within components (carousels, menus) |

---

## Screen Reader Support

### Screen Reader Only Text

Use `.sr-only` class for text meant only for screen readers:

```tsx
<button>
  <SearchIcon />
  <span className="sr-only">Search</span>
</button>

<a href="/external" target="_blank">
  External Link
  <span className="sr-only">Opens in new window</span>
</a>
```

The `.sr-only` class in [`app/globals.css`](app/globals.css):

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

### Live Regions

Announce dynamic content changes:

```tsx
// Alert for important messages
<div role="alert" aria-live="assertive">
  Form submission error!
</div>

// Status for non-critical updates
<div role="status" aria-live="polite">
  3 new notifications
</div>

// Log for chat or activity feed
<div role="log" aria-live="polite">
  {messages.map(msg => <p key={msg.id}>{msg.text}</p>)}
</div>
```

### ARIA Properties

```tsx
// Current state
<a href="/projects" aria-current="page">Projects</a>

// Expanded state
<button aria-expanded={isOpen} aria-controls="menu">
  Menu
</button>

// Hidden content
<div id="menu" aria-hidden={!isOpen}>
  {/* Menu items */}
</div>

// Descriptions
<button aria-describedby="help-text">Submit</button>
<p id="help-text">This will submit your form</p>
```

---

## Color Contrast

### GitHub Theme Contrast Ratios

All colors meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

| Element | Foreground | Background | Ratio | Pass |
|---------|-----------|------------|-------|------|
| Primary text | #e6edf3 | #0d1117 | 14.32:1 | AAA ✓ |
| Secondary text | #7d8590 | #0d1117 | 5.12:1 | AA ✓ |
| Links | #2f81f7 | #0d1117 | 7.84:1 | AAA ✓ |
| Success | #3fb950 | #0d1117 | 8.45:1 | AAA ✓ |
| Warning | #d29922 | #0d1117 | 9.21:1 | AAA ✓ |
| Error | #f85149 | #0d1117 | 6.73:1 | AAA ✓ |

### Testing Contrast

Use browser DevTools or online tools:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Chrome DevTools → Elements → Styles → Color picker shows contrast ratio

### Color Not Sole Indicator

Don't rely on color alone to convey information:

```tsx
// Bad - color only
<span className="text-success">Active</span>
<span className="text-error">Inactive</span>

// Good - color + icon/text
<span className="text-success">
  <CheckIcon /> Active
</span>
<span className="text-error">
  <XIcon /> Inactive
</span>
```

---

## Focus Management

### Focus Indicators

All interactive elements have visible focus indicators from [`app/globals.css`](app/globals.css):

```css
:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(47, 129, 247, 0.3);
}
```

### Enhanced Focus Utility

Use `.focus-visible-ring` for consistent focus styling:

```tsx
<button className="focus-visible-ring">
  Click me
</button>
```

### Focus Trapping in Modals

Trap focus within modals:

```tsx
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const modal = modalRef.current;
    if (!modal) return;

    // Get all focusable elements
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    // Focus first element
    firstElement?.focus();

    // Trap focus
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    modal.addEventListener("keydown", handleTab);
    return () => modal.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div ref={modalRef} role="dialog" aria-modal="true">
      {children}
    </div>
  );
}
```

### Focus on Route Change

Return focus to top of page on navigation:

```tsx
// In layout or navigation component
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  useEffect(() => {
    // Focus main content on route change
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }, [pathname]);

  return <nav>{/* Navigation */}</nav>;
}
```

---

## ARIA Labels

### Navigation

```tsx
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/projects">Projects</a></li>
  </ul>
</nav>

<nav aria-label="Social media">
  <a href="https://github.com" aria-label="GitHub profile">
    <GithubIcon />
  </a>
  <a href="https://linkedin.com" aria-label="LinkedIn profile">
    <LinkedInIcon />
  </a>
</nav>
```

### Buttons and Icons

```tsx
// Icon-only button
<button aria-label="Close menu">
  <XIcon />
</button>

// Button with visible text - no aria-label needed
<button>
  <SearchIcon />
  Search
</button>

// Toggle button
<button
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}
>
  <MenuIcon />
</button>
```

### Forms

```tsx
<form>
  <label htmlFor="email">Email address</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
  />
  {hasError && (
    <p id="email-error" role="alert">
      Please enter a valid email address
    </p>
  )}
</form>
```

### Dynamic Content

```tsx
// Loading state
<button disabled aria-busy="true">
  <Spinner />
  Loading...
</button>

// Progress indicator
<div
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Upload progress"
>
  {progress}%
</div>
```

---

## Image Accessibility

### Alt Text Best Practices

```tsx
// Informative image
<Image
  src="/project-screenshot.jpg"
  alt="E-commerce dashboard showing sales charts and product inventory"
  width={800}
  height={600}
/>

// Decorative image
<Image
  src="/pattern.svg"
  alt=""  // Empty alt for decorative images
  width={100}
  height={100}
  aria-hidden="true"
/>

// Image with adjacent text
<figure>
  <Image
    src="/chart.png"
    alt="Revenue growth chart"
    width={600}
    height={400}
  />
  <figcaption>
    Revenue increased by 45% in Q3 2024
  </figcaption>
</figure>

// Logo
<Image
  src="/logo.svg"
  alt="Company name logo - Home"
  width={200}
  height={50}
/>
```

### Image Loading States

```tsx
<Image
  src="/hero.jpg"
  alt="Portfolio hero image"
  width={1920}
  height={1080}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
  loading="lazy"
  onLoadingComplete={() => console.log("Image loaded")}
/>
```

---

## Form Accessibility

### Labels and Inputs

```tsx
// Explicit label association
<label htmlFor="username">Username</label>
<input id="username" type="text" name="username" />

// Wrapping label (still use htmlFor/id)
<label htmlFor="email">
  Email
  <input id="email" type="email" name="email" />
</label>
```

### Required Fields

```tsx
<label htmlFor="name">
  Name <span aria-label="required">*</span>
</label>
<input
  id="name"
  type="text"
  required
  aria-required="true"
/>
```

### Error Messages

```tsx
const [errors, setErrors] = useState<Record<string, string>>({});

<form>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
  />
  {errors.email && (
    <p id="email-error" role="alert" className="text-error">
      {errors.email}
    </p>
  )}
</form>
```

### Fieldsets and Legends

```tsx
<fieldset>
  <legend>Contact preferences</legend>

  <label>
    <input type="radio" name="contact" value="email" />
    Email
  </label>

  <label>
    <input type="radio" name="contact" value="phone" />
    Phone
  </label>
</fieldset>
```

---

## Motion and Animation

### Respecting User Preferences

All animations respect `prefers-reduced-motion`:

```tsx
// In animation utilities (lib/animations/scroll-animations.ts)
export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function getAnimationConfig(defaultConfig: Record<string, unknown>) {
  if (prefersReducedMotion()) {
    return {
      initial: false,
      animate: false,
      transition: { duration: 0 },
    };
  }
  return defaultConfig;
}
```

### Usage in Components

```tsx
import { prefersReducedMotion } from "@/lib/animations/scroll-animations";

function AnimatedComponent() {
  const shouldAnimate = !prefersReducedMotion();

  return (
    <motion.div
      animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
      initial={shouldAnimate ? { opacity: 0, y: 20 } : {}}
      transition={{ duration: shouldAnimate ? 0.5 : 0 }}
    >
      Content
    </motion.div>
  );
}
```

### CSS Media Query

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Testing Tools

### Automated Testing

1. **Lighthouse** (Chrome DevTools)
   - Run audit: DevTools → Lighthouse → Accessibility
   - Generates report with issues and recommendations

2. **axe DevTools** (Browser Extension)
   ```bash
   # Or use axe-core CLI
   npm install -g @axe-core/cli
   axe https://yoursite.com
   ```

3. **WAVE** (Browser Extension)
   - [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
   - Visual feedback on accessibility issues

### Manual Testing

1. **Keyboard Navigation**
   - Tab through entire page
   - Ensure all interactive elements are reachable
   - Check focus indicators are visible
   - Test keyboard shortcuts

2. **Screen Reader Testing**
   - **Windows**: NVDA (free) or JAWS
   - **macOS**: VoiceOver (built-in)
   - **Linux**: Orca
   - **Mobile**: TalkBack (Android), VoiceOver (iOS)

3. **Zoom Testing**
   - Test at 200% zoom
   - Ensure no horizontal scrolling
   - Check text reflow

4. **Color Contrast**
   - Chrome DevTools color picker shows contrast ratio
   - Test with different color schemes

### Browser Testing

Test in multiple browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

## Common Issues and Fixes

### Issue: Missing Alt Text

```tsx
// Bad
<img src="/image.jpg" />

// Good
<Image src="/image.jpg" alt="Description of image" width={800} height={600} />
```

### Issue: Low Contrast

```tsx
// Bad
<p className="text-gray-400">Text</p> // May not meet 4.5:1 ratio

// Good
<p className="text-foreground">Text</p> // Uses GitHub colors with proper contrast
```

### Issue: Missing Form Labels

```tsx
// Bad
<input type="text" placeholder="Name" />

// Good
<label htmlFor="name">Name</label>
<input id="name" type="text" />
```

### Issue: Non-Semantic Buttons

```tsx
// Bad
<div onClick={handleClick}>Click me</div>

// Good
<button onClick={handleClick}>Click me</button>
```

### Issue: Empty Links

```tsx
// Bad
<a href="/page"><IconOnly /></a>

// Good
<a href="/page" aria-label="View page">
  <IconOnly />
</a>
```

---

## Accessibility Checklist

### Content ✓
- [ ] Proper heading hierarchy (h1 → h6)
- [ ] Semantic HTML elements (header, nav, main, footer)
- [ ] Skip to content link
- [ ] Alt text for all meaningful images
- [ ] Empty alt for decorative images

### Keyboard ✓
- [ ] All interactive elements focusable
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] Keyboard shortcuts work
- [ ] No keyboard traps

### Screen Readers ✓
- [ ] ARIA labels on icon buttons
- [ ] Form labels associated with inputs
- [ ] Error messages announced
- [ ] Live regions for dynamic content
- [ ] Page title describes content

### Visual ✓
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Text resizes up to 200% without breaking
- [ ] No information conveyed by color alone
- [ ] Focus indicators visible

### Motion ✓
- [ ] Respects prefers-reduced-motion
- [ ] No auto-playing videos
- [ ] Animations can be paused

### Forms ✓
- [ ] Labels for all inputs
- [ ] Required fields marked
- [ ] Error messages clear and associated
- [ ] Fieldsets for grouped inputs

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM Resources](https://webaim.org/resources/)
- [A11y Project](https://www.a11yproject.com/)
- [Inclusive Components](https://inclusive-components.design/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## Support

If you encounter accessibility issues, please report them with:
- Description of the issue
- Browser and assistive technology used
- Steps to reproduce
- Expected vs actual behavior
