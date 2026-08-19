import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | AutoFlow AI" },
      {
        name: "description",
        content:
          "The terms that apply when you use the AutoFlow AI website and request a free AI automation consultation.",
      },
      { property: "og:title", content: "Terms of Service | AutoFlow AI" },
      {
        property: "og:description",
        content: "Terms that apply to the AutoFlow AI website and consultation requests.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://aiflow-forge.lovable.app/terms" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://aiflow-forge.lovable.app/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← Back to home
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight">Terms of Service</h1>
      <div className="mt-8 space-y-6 text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">Using this site</h2>
        <p>
          This website and its content are provided for information about AutoFlow AI's automation
          services. You agree not to misuse the site or submit false information through our forms.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Consultations and audits</h2>
        <p>
          A free consultation or AI audit is an initial assessment. It does not create a contract
          for services; any engagement is governed by a separate written agreement.
        </p>
        <h2 className="text-xl font-semibold text-foreground">No warranties</h2>
        <p>
          Content on this site is provided as is, without warranties of any kind. Results from
          automation projects vary by business and are not guaranteed.
        </p>
        <h2 className="text-xl font-semibold text-foreground">Questions</h2>
        <p>
          Reach us through the{" "}
          <Link to="/contact" className="underline hover:text-foreground">
            contact page
          </Link>{" "}
          for anything related to these terms.
        </p>
      </div>
    </main>
  );
}
