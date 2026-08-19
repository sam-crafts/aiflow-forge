import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AutoFlow AI | AI Automation Agency" },
      {
        name: "description",
        content:
          "Get in touch with AutoFlow AI to discuss AI workflow automation for your business or to book a free consultation.",
      },
      { property: "og:title", content: "Contact AutoFlow AI" },
      {
        property: "og:description",
        content: "Talk to AutoFlow AI about automating your operations with AI workflows.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://aiflow-forge.lovable.app/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://aiflow-forge.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">Contact us</h1>
      <p className="mt-4 text-muted-foreground">
        Tell us what you'd like to automate and we'll get back to you with next steps.
      </p>
      <div className="mt-8 space-y-4">
        <a
          href="mailto:hello@aiflow-forge.lovable.app"
          className="flex items-center gap-3 rounded-xl border border-border bg-surface p-5 transition-colors hover:border-primary/50"
        >
          <Mail className="h-5 w-5 text-primary" />
          <span className="font-medium">hello@aiflow-forge.lovable.app</span>
        </a>
        <p className="text-sm text-muted-foreground">
          Prefer a structured intake? Use the{" "}
          <Link to="/" hash="audit" className="underline hover:text-foreground">
            AI audit form
          </Link>{" "}
          on the homepage and we'll review your workflows before we reply.
        </p>
      </div>
    </main>
  );
}
