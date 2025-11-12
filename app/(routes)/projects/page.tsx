import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Check out my featured projects and work",
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-6 text-4xl font-bold">Projects</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          A collection of my work and side projects.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Project cards will go here */}
          <p className="text-muted-foreground">
            Add your projects using the Project type from @/types
          </p>
        </div>
      </div>
    </main>
  );
}
