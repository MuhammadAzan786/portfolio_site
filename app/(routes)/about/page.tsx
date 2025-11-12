import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about me and my experience",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold">About Me</h1>
        <div className="prose prose-neutral dark:prose-invert">
          <p className="text-lg text-muted-foreground">
            This is your about page. Add your story, experience, and what makes
            you unique.
          </p>
        </div>
      </div>
    </main>
  );
}
