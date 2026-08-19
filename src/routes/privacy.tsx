import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | AutoFlow AI" },
      {
        name: "description",
        content:
          "How AutoFlow AI collects, uses, and protects the information you share through our AI audit request form.",
      },
      { property: "og:title", content: "Privacy Policy | AutoFlow AI" },
      {
        property: "og:description",
        content: "How AutoFlow AI collects, uses, and protects your information.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://aiflow-forge.lovable.app/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://aiflow-forge.lovable.app/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <p>
          AutoFlow AI collects only the information you voluntarily submit through our consultation
          form: your name, business email, company name, website, company size, industry, and a
          description of your business challenge.
        </p>
        <h2 className="text-xl font-semibold text-foreground">How we use your information</h2>
        <p>
          We use your details solely to prepare your AI audit, respond to your enquiry, and follow
          up about our automation services. We do not sell or rent your data.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Where your data is stored</h2>
        <p>
          Form submissions are delivered to our automation workflow tooling, where they are stored
          securely and accessible only to our team.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
        <p>
          You can request access to, correction of, or deletion of your information at any time by
          contacting us through our{" "}
          <Link to="/contact" className="underline hover:text-foreground">
            contact page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
