# Portfolio Website

A modern, performant portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Next.js 14 App Router** - Modern React framework with server components
- **TypeScript** - Type-safe code throughout the application
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - Beautiful, accessible component library with dark theme support
- **Framer Motion** - Smooth animations and transitions
- **React Hook Form + Zod** - Form handling with validation
- **ESLint & Prettier** - Code quality and formatting
- **Image Optimization** - Automatic image optimization with Next.js Image

## Project Structure

```
portfolio_web/
├── app/
│   ├── (routes)/              # Route groups
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects page
│   │   └── contact/           # Contact page
│   ├── api/                   # API routes
│   ├── fonts/                 # Local fonts
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── sections/              # Page sections (Hero, About, etc.)
│   └── shared/                # Shared components (Navbar, Footer, etc.)
├── lib/
│   ├── utils/                 # Utility functions
│   ├── hooks/                 # Custom React hooks
│   │   ├── useMediaQuery.ts   # Media query hook
│   │   └── useScrollspy.ts    # Scroll spy hook
│   ├── utils.ts               # General utilities
│   └── env.ts                 # Environment variables configuration
├── public/
│   ├── images/                # Static images
│   └── fonts/                 # Static fonts
├── types/
│   └── index.ts               # TypeScript type definitions
├── constants/
│   └── index.ts               # App constants and configuration
├── .env.local                 # Environment variables (not in git)
├── .env.example               # Example environment variables
├── tailwind.config.ts         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── components.json            # shadcn/ui configuration
```

## Architecture

### App Router Structure

The project uses Next.js 14 App Router with route groups:

- **/app/layout.tsx** - Root layout with metadata and font configuration
- **/app/page.tsx** - Home page (landing)
- **/app/(routes)/** - Grouped routes for better organization
  - Each route has its own `page.tsx` with metadata

### Type System

TypeScript types are centralized in `/types/index.ts`:

- `Project` - Project data structure
- `Experience` - Work experience structure
- `Skill` - Skills and technologies
- `ContactFormData` - Contact form data
- `SiteConfig` - Site configuration

### Utilities & Hooks

**Utility Functions** (`/lib/utils.ts`):

- `cn()` - Tailwind class merging
- `formatDate()` - Date formatting
- `truncate()` - Text truncation
- `debounce()` - Function debouncing
- `slugify()` - String to URL slug conversion

**Custom Hooks** (`/lib/hooks/`):

- `useMediaQuery` - Responsive design helper
- `useScrollspy` - Track visible sections

### Styling

- **Tailwind CSS** with custom theme configuration
- **CSS Variables** for theming (light/dark mode)
- **Custom animations** defined in `tailwind.config.ts`
- **shadcn/ui** components with consistent design system

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio_web
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `prettier --write .` - Format code with Prettier

### Adding Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### Customization

1. **Site Configuration**: Edit `/constants/index.ts`
2. **Theme Colors**: Edit CSS variables in `/app/globals.css`
3. **Tailwind Config**: Edit `/tailwind.config.ts`
4. **Metadata**: Edit `/app/layout.tsx`

## Environment Variables

Create a `.env.local` file (see `.env.example` for reference):

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Portfolio

# Email Service (optional)
RESEND_API_KEY=your_api_key
CONTACT_EMAIL=your.email@example.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id
```

## Building for Production

```bash
npm run build
npm start
```

The optimized production build will be created in the `.next` directory.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Docker

## Key Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Code Quality**: ESLint + Prettier

## Performance Optimizations

- Server-side rendering with React Server Components
- Automatic code splitting
- Image optimization with `next/image`
- Font optimization with `next/font`
- Optimized package imports for lucide-react and framer-motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio_web](https://github.com/yourusername/portfolio_web)

---

Built with Next.js 14 • TypeScript • Tailwind CSS • shadcn/ui • Framer Motion
