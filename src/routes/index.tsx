import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Bot,
  Zap,
  Workflow,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Reveal } from "@/components/Reveal";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid business email"),
  companyName: z.string().min(2, "Company name is required"),
  website: z.string().url("Please enter a valid URL").or(z.literal("")),
  companySize: z.string().min(1, "Please select a company size"),
  industry: z.string().min(2, "Industry is required"),
  challenge: z.string().min(10, "Please describe your challenge in at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Automate Your Business With AI | AI Automation Agency" },
      {
        name: "description",
        content:
          "We build AI workflows that save hours every week by connecting your favorite apps. Book a free consultation and get your AI audit today.",
      },
      {
        property: "og:title",
        content: "Automate Your Business With AI | AI Automation Agency",
      },
      {
        property: "og:description",
        content:
          "We build AI workflows that save hours every week by connecting your favorite apps. Book a free consultation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const companySizeOptions = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "500+ employees",
];

const features = [
  {
    icon: Workflow,
    title: "End-to-end workflows",
    description:
      "We design automations that span your entire operation, from lead capture to customer support.",
  },
  {
    icon: Zap,
    title: "Fast implementation",
    description:
      "Most workflows are live within days, not months. We prioritize quick wins while building long-term systems.",
  },
  {
    icon: Clock,
    title: "Reclaim hours weekly",
    description:
      "Eliminate repetitive manual tasks so your team can focus on high-leverage work that grows the business.",
  },
  {
    icon: Shield,
    title: "Reliable & secure",
    description:
      "Production-grade automations with error handling, logging, and compliance-conscious data practices.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "We map your current tools, processes, and biggest time drains.",
  },
  {
    step: "02",
    title: "Design",
    description: "We architect an AI workflow tailored to your business logic.",
  },
  {
    step: "03",
    title: "Build",
    description: "We connect your apps, train models, and deploy automations.",
  },
  {
    step: "04",
    title: "Optimize",
    description: "We monitor, refine, and scale the system as you grow.",
  },
];

const WEBHOOK_URL = "https://hook.us2.make.com/j1vg9jsl0cypxto3en5czytfxbb8ye3v";

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      companyName: "",
      website: "",
      companySize: "",
      industry: "",
      challenge: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setErrorMessage(null);
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, submittedAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    }
  }


  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border surface-glass">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Bot className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AutoFlow AI</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#process" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Process
            </a>
            <a href="#audit" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Free Audit
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#audit"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Log in
            </a>
            <Button asChild size="sm" className="rounded-full">
              <a href="#audit">Book Consultation</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob animate-drift left-[-10%] top-[-6rem] h-[26rem] w-[26rem] bg-primary/35" />
          <div className="blob animate-drift left-[55%] top-[-4rem] h-[24rem] w-[24rem] bg-warm/35 [animation-delay:-6s]" />
          <div className="blob animate-drift left-[20%] top-[14rem] h-[22rem] w-[22rem] bg-chart-3/25 [animation-delay:-12s]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface-elevated/80 px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 animate-pulse text-primary" />
              <span>Free AI automation audit for new clients</span>
            </div>

            <h1 className="animate-fade-up text-4xl font-bold tracking-tight text-foreground [animation-delay:120ms] sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Automate Your Business{" "}
              <span className="gradient-text">With AI</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg text-muted-foreground [animation-delay:240ms] sm:text-xl text-balance">
              We build AI workflows that save hours every week by connecting your favorite apps.
              Stop doing work software should handle.
            </p>

            <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:360ms] sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 text-base glow-primary transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <a href="#audit">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-border bg-transparent px-8 text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-elevated"
              >
                <a href="#services">See how it works</a>
              </Button>
            </div>

            <div className="mt-12 flex animate-fade-up flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground [animation-delay:480ms]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>No code required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>Live in days</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success" />
                <span>ROI-focused</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="border-y border-border bg-surface py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "10k+", label: "Hours saved" },
              { value: "150+", label: "Workflows deployed" },
              { value: "40+", label: "Tools integrated" },
              { value: "98%", label: "Client retention" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 90} className="text-center">
                <div className="text-3xl font-bold text-foreground sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Features */}
      <section id="services" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Everything you need to run on autopilot
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-balance">
              From intelligent document processing to autonomous customer support, we build the AI layer
              that makes your business faster and more consistent.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => (
              <Reveal
                key={feature.title}
                delay={i * 100}
                className="group card-lift rounded-2xl border border-border bg-card p-6 hover:border-primary/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-y border-border bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              How we work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-balance">
              A simple, transparent process designed to deliver working automations quickly.
            </p>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item, i) => (
              <Reveal key={item.step} delay={i * 120} className="group relative">
                <div className="mb-4 bg-gradient-to-br from-primary to-warm bg-clip-text text-5xl font-bold text-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="audit" className="relative overflow-hidden py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob animate-drift right-[-8%] top-[10%] h-[24rem] w-[24rem] bg-warm/30" />
          <div className="blob animate-drift left-[-6%] bottom-[5%] h-[22rem] w-[22rem] bg-primary/25 [animation-delay:-8s]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Get your free AI audit
              </h2>
              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Tell us about your business and biggest challenge. We will reply within 24 hours with a
                personalized automation roadmap and consultation slot.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Built for your stack</h3>
                    <p className="text-sm text-muted-foreground">
                      We integrate with the tools you already use: CRMs, help desks, ad platforms,
                      spreadsheets, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">No team disruption</h3>
                    <p className="text-sm text-muted-foreground">
                      We work alongside your team, document every workflow, and train your people to
                      manage it.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Measured impact</h3>
                    <p className="text-sm text-muted-foreground">
                      Every project includes clear before/after metrics so you can see exactly how much
                      time and money you save.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-2xl shadow-primary/5 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-card-foreground">
                    Thanks! We'll contact you shortly.
                  </h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    We will review your challenge and send your personalized automation roadmap within 24
                    hours.
                  </p>

                  <Button
                    variant="outline"
                    className="mt-8 rounded-full border-border bg-transparent hover:bg-surface-elevated"
                    onClick={() => {
                      setSubmitted(false);
                      form.reset();
                    }}
                  >
                    Submit another request
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-card-foreground">Request your AI audit</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill out the form below. All fields are required.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Jane Doe"
                                  {...field}
                                  className="h-11 rounded-xl border-border bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Email</FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="jane@company.com"
                                  {...field}
                                  className="h-11 rounded-xl border-border bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Acme Inc."
                                  {...field}
                                  className="h-11 rounded-xl border-border bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Website</FormLabel>
                              <FormControl>
                                <Input
                                  type="url"
                                  placeholder="https://company.com"
                                  {...field}
                                  className="h-11 rounded-xl border-border bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <FormField
                          control={form.control}
                          name="companySize"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Size</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11 rounded-xl border-border bg-background/50">
                                    <SelectValue placeholder="Select company size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="rounded-xl border-border bg-surface-elevated">
                                  {companySizeOptions.map((size) => (
                                    <SelectItem key={size} value={size}>
                                      {size}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="industry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Industry</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="SaaS, E-commerce, Professional Services..."
                                  {...field}
                                  className="h-11 rounded-xl border-border bg-background/50"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="challenge"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Describe Your Biggest Business Challenge</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="We spend 20 hours a week manually moving data between our CRM and invoicing tool..."
                                rows={4}
                                {...field}
                                className="resize-none rounded-xl border-border bg-background/50"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {errorMessage && (
                        <p className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-center text-sm text-destructive">
                          {errorMessage}
                        </p>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full rounded-xl text-base glow-primary"
                        disabled={form.formState.isSubmitting}
                      >
                        Get My AI Audit
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>

                      <p className="text-center text-xs text-muted-foreground">
                        By submitting, you agree to our{" "}
                        <a href="#" className="underline hover:text-foreground">
                          Privacy Policy
                        </a>
                        . No spam, ever.
                      </p>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Bot className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight">AutoFlow AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AutoFlow AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
