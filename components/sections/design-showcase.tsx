"use client";

/**
 * Design System Showcase Component
 * Demonstrates all design system features
 */

import { motion } from "framer-motion";
import {
  Heading,
  Text,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  GlassCard,
  GlassCardHeader,
  GlassCardTitle,
  GlassCardContent,
  Badge,
  Separator,
  GradientText,
} from "@/components/ui";
import {
  fadeInUp,
  staggerContainer,
  listItem,
  heroTitle,
} from "@/lib/animations";

export function DesignShowcase() {
  return (
    <div className="container-lg section-padding space-y-24">
      {/* Typography Section */}
      <section>
        <motion.div variants={heroTitle} initial="initial" animate="animate">
          <Heading variant="h2" gradient className="mb-8">
            Typography
          </Heading>
        </motion.div>

        <div className="space-y-4">
          <Heading variant="h1">Heading 1</Heading>
          <Heading variant="h2">Heading 2</Heading>
          <Heading variant="h3">Heading 3</Heading>
          <Text variant="lead">
            This is a lead paragraph with larger text and muted color.
          </Text>
          <Text variant="body">
            This is regular body text with normal weight and size.
          </Text>
          <Text variant="muted">This is muted text for secondary content.</Text>
          <GradientText className="text-2xl font-bold">
            This text has a beautiful gradient
          </GradientText>
        </div>
      </section>

      <Separator />

      {/* Color Section */}
      <section>
        <Heading variant="h2" className="mb-8">
          Color Palette
        </Heading>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-primary"></div>
            <Text variant="small" className="font-medium">
              Primary
            </Text>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-secondary"></div>
            <Text variant="small" className="font-medium">
              Secondary
            </Text>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-accent"></div>
            <Text variant="small" className="font-medium">
              Accent
            </Text>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-muted"></div>
            <Text variant="small" className="font-medium">
              Muted
            </Text>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="gradient-bg-primary h-24 rounded-lg"></div>
          <Text variant="small">Primary Gradient</Text>
          <div className="gradient-bg-secondary h-24 rounded-lg"></div>
          <Text variant="small">Secondary Gradient</Text>
        </div>
      </section>

      <Separator />

      {/* Buttons Section */}
      <section>
        <Heading variant="h2" className="mb-8">
          Buttons
        </Heading>

        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <Separator />

      {/* Cards Section */}
      <section>
        <Heading variant="h2" className="mb-8">
          Cards
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
            </CardHeader>
            <CardContent>
              <Text variant="muted">
                A standard card with hover lift effect. Perfect for content
                blocks and feature displays.
              </Text>
            </CardContent>
          </Card>

          <GlassCard hover>
            <GlassCardHeader>
              <GlassCardTitle>Glass Card</GlassCardTitle>
            </GlassCardHeader>
            <GlassCardContent>
              <Text variant="muted">
                A glassmorphism card with blur effect. Great for modern, premium
                designs.
              </Text>
            </GlassCardContent>
          </GlassCard>
        </div>
      </section>

      <Separator />

      {/* Badges Section */}
      <section>
        <Heading variant="h2" className="mb-8">
          Badges
        </Heading>

        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      <Separator />

      {/* Animations Section */}
      <section>
        <Heading variant="h2" className="mb-8">
          Animations
        </Heading>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid gap-4 md:grid-cols-3"
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div key={item} variants={listItem}>
              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle>Item {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Text variant="muted">
                    Staggered animation with lift on hover
                  </Text>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 space-y-4">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="rounded-lg border p-6"
          >
            <Text>Fade In Up Animation</Text>
          </motion.div>
        </div>
      </section>

      <Separator />

      {/* Utility Classes Section */}
      <section>
        <Heading variant="h2" className="mb-8">
          Utility Classes
        </Heading>

        <div className="space-y-4">
          <div className="hover-lift rounded-lg border p-4">
            <Text>.hover-lift - Lifts on hover</Text>
          </div>
          <div className="hover-glow rounded-lg border p-4">
            <Text>.hover-glow - Glows on hover</Text>
          </div>
          <div className="hover-scale rounded-lg border p-4">
            <Text>.hover-scale - Scales on hover</Text>
          </div>
        </div>
      </section>
    </div>
  );
}
