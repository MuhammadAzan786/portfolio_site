# Premium Hero Section - Quick Start Guide

## 🚀 5-Minute Setup

### Step 1: Add Your Profile Image

1. **Prepare your image:**
   - Size: 1000x1000px (or larger)
   - Format: JPG, PNG, or WebP
   - Professional headshot or avatar

2. **Add to project:**
   ```
   public/profile.jpg
   ```

3. **Update the component:**

**File:** `components/hero/hero-visual.tsx`

Find this section (around line 140):
```tsx
{/* Placeholder for profile image */}
<div className="flex h-full w-full items-center justify-center">
  <span className="text-9xl font-bold">?</span>
</div>
```

Replace with:
```tsx
<Image
  src="/profile.jpg"
  alt="Your Name - Full Stack Developer"
  fill
  className="object-cover"
  priority
/>
```

---

### Step 2: Update Your Information

**File:** `constants/index.ts`

```tsx
export const siteConfig: SiteConfig = {
  name: "Your Name",
  author: {
    name: "Your Full Name",
    email: "your.email@example.com",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};
```

---

### Step 3: Customize Your Roles

**File:** `components/hero/hero-content.tsx` (line 21)

```tsx
const roles = [
  "Your Primary Role",
  "Your Secondary Role",
  "Your Specialty",
  "Your Passion",
];
```

---

### Step 4: Update Description

**File:** `components/hero/hero-content.tsx` (line 80)

Replace with your 2-3 line description.

---

### Step 5: Customize Tech Stack

**File:** `components/hero/tech-stack.tsx`

Add your technologies with icons from [react-icons.github.io](https://react-icons.github.io/).

---

## ✅ Quick Checks

- [ ] Profile image displays
- [ ] Name shows correctly
- [ ] Roles rotate smoothly
- [ ] Tech stack shows your tech
- [ ] Buttons work
- [ ] Social links correct

---

See `HERO_SECTION_PREMIUM.md` for full documentation.
