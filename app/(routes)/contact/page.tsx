import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-4xl font-bold">Get in Touch</h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Have a question or want to work together? Drop me a message!
        </p>
        {/* Contact form will go here */}
        <div className="rounded-lg border p-8">
          <p className="text-muted-foreground">
            Add a contact form using React Hook Form + Zod validation
          </p>
        </div>
      </div>
    </main>
  );
}
