# Services Section - Professional Service Showcase

A visually stunning Services section with animated service cards showcasing your expertise and offerings.

## 🎨 Features Implemented

### Layout Structure

**Grid Layout:**

- 3-column grid on desktop (≥1024px)
- 2-column grid on tablet (768-1023px)
- 1-column stack on mobile (<768px)
- Equal height cards with flexible content
- Responsive spacing and padding

### Visual Components

1. **Service Cards (6 Total)**
   - Glassmorphism effect with subtle backdrop blur
   - Gradient border on hover
   - Icon with gradient background
   - Title and description
   - Features list with checkmarks
   - "Learn More" button with arrow
   - Decorative corner gradient

2. **Card Hover Effects**
   - Lift animation (moves up 10px)
   - Gradient border fade-in
   - Shadow intensification
   - Corner gradient appearance
   - Icon rotation and scale
   - Button arrow slides right

3. **Section Header**
   - Gradient heading
   - Lead paragraph
   - Centered alignment

4. **Bottom CTA**
   - Gradient button
   - Scale animation on hover
   - Link to contact section

## 📁 Components Created

### Core Section

**[components/sections/services-section.tsx](components/sections/services-section.tsx)**
Main Services section with 6 service cards.

```tsx
import { ServicesSection } from "@/components/sections/services-section";

<ServicesSection />;
```

### UI Component

**[components/ui/service-card.tsx](components/ui/service-card.tsx)**
Individual service card component.

```tsx
import { ServiceCard } from "@/components/ui/service-card";
import { Code2 } from "lucide-react";

<ServiceCard
  icon={Code2}
  title="Web Development"
  description="Build modern, responsive web applications"
  features={[
    "React & Next.js applications",
    "Progressive Web Apps (PWA)",
    "SEO & accessibility",
  ]}
  delay={0.1}
  href="#web-development"
/>;
```

Props:

- `icon`: LucideIcon - Service icon
- `title`: string - Service name
- `description`: string - Service description
- `features`: string[] - List of features/capabilities
- `delay`: number - Entrance animation delay (default: 0)
- `href`: string - Link for "Learn More" button (default: "#")

## 🎯 Services Included

### 1. Web Development

- **Icon**: Code2
- **Focus**: Modern web applications
- **Features**: React, Next.js, PWA, SPA, SEO, Accessibility

### 2. Backend Development

- **Icon**: Server
- **Focus**: Server-side solutions
- **Features**: REST/GraphQL APIs, Microservices, Database design, Auth, Integrations

### 3. Mobile Development

- **Icon**: Smartphone
- **Focus**: Cross-platform mobile apps
- **Features**: React Native, iOS/Android, Mobile UI/UX, App deployment

### 4. UI/UX Design

- **Icon**: Palette
- **Focus**: Interface and experience design
- **Features**: UI design, UX research, Prototyping, Design systems, Responsive

### 5. Database Solutions

- **Icon**: Database
- **Focus**: Data management
- **Features**: SQL/NoSQL, Data modeling, Query optimization, Migration, Security

### 6. Cloud & DevOps

- **Icon**: Cloud
- **Focus**: Infrastructure and deployment
- **Features**: AWS/Azure/GCP, Docker/K8s, CI/CD, IaC, Monitoring

## 🎬 Animation Details

### Card Entrance Animation

```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ delay, duration: 0.5, type: "spring" }}
```

- Fades in from 0 to 1 opacity
- Slides up from 30px below
- Spring physics for natural bounce
- Staggered delays (0, 0.1, 0.2, 0.3, 0.4, 0.5s)

### Card Hover Animation

```tsx
whileHover={{ y: -10 }}
```

- Lifts card 10px upward
- Smooth transition
- Activates gradient border
- Triggers shadow increase

### Icon Animation

```tsx
whileHover={{
  rotate: [0, -10, 10, -10, 0],
  scale: 1.1
}}
transition={{ duration: 0.5 }}
```

- Wiggle rotation effect
- Scales to 110%
- 0.5s duration
- Triggered on card hover

### Features List Stagger

```tsx
{
  features.map((feature, index) => (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay + 0.1 + index * 0.05 }}
    >
      {feature}
    </motion.li>
  ));
}
```

- Each item slides in from left
- Sequential delays (50ms apart)
- Creates cascading effect

### Button Arrow Animation

```tsx
<ArrowRight className="transition-transform group-hover/btn:translate-x-1" />
```

- Slides right on hover
- Smooth transition
- Visual feedback for interactivity

## 🎨 Styling Details

### Glassmorphism Effect

```tsx
<GlassCard className="relative h-full overflow-hidden">
  {/* Content */}
</GlassCard>
```

Uses the `.glass-card` utility from `app/globals.css`:

```css
.glass-card {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
}
```

### Gradient Border on Hover

```tsx
<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
```

- Positioned absolutely behind content
- Gradient from primary → secondary → accent
- Fades in on hover

### Icon Gradient Background

```tsx
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/50">
  <Icon className="h-8 w-8 text-white" />
</div>
```

- 16x16 container (64px)
- Rounded 2xl corners
- Gradient from primary to secondary
- Shadow with primary color tint

### Decorative Corner

```tsx
<div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
```

- Positioned in top-right corner
- Large blur for glow effect
- Appears on hover

## 📱 Responsive Behavior

### Desktop (≥1024px)

- 3-column grid
- Full card spacing
- All hover effects active

### Tablet (768-1023px)

- 2-column grid
- Maintained spacing
- Touch-optimized interactions

### Mobile (<768px)

- Single column stack
- Full-width cards
- Touch-friendly targets
- Vertical spacing optimized

## 🎯 Customization Guide

### Add a New Service

Edit [components/sections/services-section.tsx](components/sections/services-section.tsx:13):

```tsx
const services = [
  // ... existing services
  {
    icon: YourIcon, // Import from lucide-react
    title: "Your Service",
    description: "Service description here",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    href: "#your-service",
  },
];
```

### Remove a Service

Simply delete the service object from the `services` array.

### Change Service Details

Edit the relevant service object:

```tsx
{
  icon: Code2,
  title: "Frontend Development", // Change title
  description: "Updated description", // Change description
  features: [
    "Vue.js applications", // Update features
    "Angular development",
    "Svelte apps",
  ],
  href: "#frontend", // Update link
},
```

### Modify Grid Columns

Edit [components/sections/services-section.tsx](components/sections/services-section.tsx:114):

```tsx
{/* Change from 3 to 4 columns */}
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
```

**Options:**

- `lg:grid-cols-2` - 2 columns on desktop
- `lg:grid-cols-3` - 3 columns on desktop (default)
- `lg:grid-cols-4` - 4 columns on desktop

### Change Animation Delays

Edit the delay values in the map:

```tsx
{
  services.map((service, index) => (
    <ServiceCard
      // ... other props
      delay={index * 0.15} // Increase for slower stagger (was 0.1)
    />
  ));
}
```

### Customize Card Colors

The cards use your theme colors. To override:

**Gradient Border:**

```tsx
// In service-card.tsx
className =
  "bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20";
```

**Icon Background:**

```tsx
// In service-card.tsx
className = "bg-gradient-to-br from-blue-500 to-purple-500";
```

### Change Hover Lift Amount

Edit [components/ui/service-card.tsx](components/ui/service-card.tsx:25):

```tsx
whileHover={{ y: -10 }} // Change -10 to -5 for less lift, -15 for more
```

### Modify Bottom CTA

Edit [components/sections/services-section.tsx](components/sections/services-section.tsx:134-147):

```tsx
<motion.a
  href="#contact" // Change link
  className="items-center... inline-flex"
>
  Custom CTA Text {/* Change text */}
</motion.a>
```

## ⚡ Performance Optimizations

1. **Viewport-based Animations**: `viewport={{ once: true }}` prevents re-animation
2. **Hardware Acceleration**: Transforms use GPU acceleration
3. **Lazy Animation**: Only animate when scrolled into view
4. **Optimized Icons**: SVG icons from Lucide React
5. **Efficient Hover**: CSS transitions for simple effects

## 🔧 Advanced Customization

### Add Card Tilt Effect

Install and use `react-tilt`:

```bash
npm install react-parallax-tilt
```

```tsx
import Tilt from "react-parallax-tilt";

<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
  <ServiceCard {...props} />
</Tilt>;
```

### Custom Icon Per Card

Replace Lucide icons with custom SVGs or images:

```tsx
// In ServiceCard component
{
  typeof Icon === "string" ? (
    <Image src={Icon} alt={title} width={32} height={32} />
  ) : (
    <Icon className="h-8 w-8 text-white" />
  );
}
```

### Add Pricing Information

Extend the ServiceCard props:

```tsx
interface ServiceCardProps {
  // ... existing props
  pricing?: {
    amount: number;
    period: string;
  };
}

// In component
{
  pricing && (
    <div className="mt-4 border-t pt-4">
      <p className="text-2xl font-bold">
        ${pricing.amount}
        <span className="text-sm text-muted-foreground">/{pricing.period}</span>
      </p>
    </div>
  );
}
```

### Make Cards Clickable

Wrap the entire card in a link:

```tsx
<motion.a href={href} className="group h-full">
  <GlassCard className="h-full cursor-pointer">{/* Content */}</GlassCard>
</motion.a>
```

## 💡 Tips & Best Practices

1. **Keep feature lists concise** - 4-6 items per service
2. **Use consistent icons** - Stick to one icon family (Lucide)
3. **Balance grid** - Use multiples of your column count for even rows
4. **Clear descriptions** - One sentence that captures the essence
5. **Action-oriented features** - Start with verbs (Build, Create, Design)
6. **Test mobile** - Ensure cards stack well on small screens
7. **Update hrefs** - Link to actual service pages or contact form

## 🔄 Integration Examples

### With Modal Details

```tsx
const [selectedService, setSelectedService] = useState(null);

<ServiceCard
  {...service}
  onClick={() => setSelectedService(service)}
/>

<Dialog open={!!selectedService}>
  <DialogContent>
    {/* Detailed service information */}
  </DialogContent>
</Dialog>
```

### With React Query for Dynamic Data

```tsx
const { data: services } = useQuery("services", fetchServices);

{
  services?.map((service, index) => (
    <ServiceCard key={service.id} {...service} delay={index * 0.1} />
  ));
}
```

## 🎨 Background Decorations

The section includes subtle background gradients:

```tsx
<div className="absolute inset-0 -z-10">
  <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
  <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
</div>
```

These create subtle depth without overwhelming the content.

## 📊 Component Structure

```
ServicesSection
├── Section Header (Heading + Text)
├── Services Grid
│   ├── ServiceCard (Web Development)
│   ├── ServiceCard (Backend Development)
│   ├── ServiceCard (Mobile Development)
│   ├── ServiceCard (UI/UX Design)
│   ├── ServiceCard (Database Solutions)
│   └── ServiceCard (Cloud & DevOps)
└── Bottom CTA Button
```

Each ServiceCard contains:

```
ServiceCard
├── Gradient Border Overlay (hover)
├── Icon Container
│   └── Icon (animated)
├── Title
├── Description
├── Features List
│   └── Feature Items (staggered)
├── Learn More Button
└── Decorative Corner Gradient
```

## 🚀 Quick Customization Checklist

- [ ] Update service titles and descriptions
- [ ] Modify features lists to match your offerings
- [ ] Change hrefs to link to service detail pages
- [ ] Adjust grid columns for your number of services
- [ ] Customize CTA button text and link
- [ ] Replace Lucide icons with custom icons if desired
- [ ] Test on mobile devices
- [ ] Verify all links work correctly

---

**Built with Next.js 14 • Framer Motion • TypeScript • Tailwind CSS**

For more information, refer to the design system documentation in [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md).
