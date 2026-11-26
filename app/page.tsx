import Image from "next/image";
import { ArrowRight, ArrowUpRight, ChevronDown, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteHeader, FloatingWhatsApp } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroVideo } from "@/components/hero-video";
import { ContactForm } from "@/components/contact-form";
import { contact, homeFaqs, industries, products, services } from "@/lib/site";

/* ─── Data ────────────────────────────────────────────────────────── */

const differentiators = [
  {
    number: "1",
    title: "Built for Tanzania",
    description:
      "Kiswahili and English, WhatsApp-first customers, mobile money and the way Tanzanian teams actually work. We design for that from day one.",
  },
  {
    number: "2",
    title: "Agents that do real work",
    description:
      "Not chatbots for show. Our AI agents read your documents, update your systems and prepare the next step, with a person approving anything that matters.",
  },
  {
    number: "3",
    title: "Products and services, together",
    description:
      "We build and run our own software, from Atlas to Shopi, so we engineer for our clients the way owners do, not vendors.",
  },
];

const stats = [
  { value: "100+", label: "Websites and systems delivered" },
  { value: `${products.length}`, label: "Products we build and run" },
  { value: "Same day", label: "Replies on WhatsApp and email" },
];

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <HeroVideo />
      <div className="absolute inset-0 bg-black/45" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-xs sm:text-sm font-medium tracking-widest uppercase text-white/70">
          AI automation · Dar es Salaam, Tanzania
        </p>
        <h1 className="max-w-5xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Agentic AI systems for Tanzanian businesses
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 leading-relaxed">
          We build AI agents that organise your data and automate your workflows, so your team spends its time on
          the work that grows the business.
        </p>
        <div className="mt-10 hidden sm:flex flex-wrap items-center justify-center gap-4">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 text-sm font-medium hover:bg-white/85 transition-colors"
          >
            Talk to us on WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/ai-automation"
            className="inline-flex items-center gap-2 border border-white/60 text-white px-7 py-3.5 text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            How AI automation works
          </a>
        </div>
      </div>
      <div className="absolute bottom-24 md:bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <a href="#about" className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ChevronDown className="h-5 w-5 animate-bounce" />
          <span className="text-xs font-medium tracking-widest uppercase">Scroll to Explore</span>
        </a>
      </div>
    </section>
  );
}

/* ─── About Us ────────────────────────────────────────────────────── */

function AboutSection() {
  return (
    <section id="about" className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">About Us</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mb-8 text-balance text-foreground">
          We are a Tanzanian AI and software engineering company.
        </h2>
        <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mb-20 md:mb-28">
          Driftmark Technologies builds AI agents, data platforms and software for businesses and institutions in
          Tanzania. We start with one workflow that costs your team time, automate it, and measure the result before
          we scale. We also build and run our own products, so we bring an owner&apos;s mindset to every
          engagement. Our home is Dar es Salaam, and we take on projects elsewhere in Africa too.
        </p>

        <h3 className="text-2xl md:text-4xl font-light text-center text-foreground mb-14 md:mb-20">
          Key Differentiators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-20 md:mb-28">
          {differentiators.map((d) => (
            <div key={d.number} className="flex gap-6">
              <span className="text-7xl md:text-8xl font-light leading-none text-foreground select-none">
                {d.number}
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <h4 className="text-xl md:text-2xl font-medium text-foreground leading-snug">{d.title}</h4>
                <p className="text-base text-foreground/70 leading-relaxed">{d.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-8 md:p-10 flex flex-col gap-3">
              <span className="text-5xl md:text-6xl font-light tracking-tight text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Services ────────────────────────────────────────────────────── */

function ServicesSection() {
  return (
    <section id="services" className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6">Services</p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mb-16 md:mb-24 text-balance">
          AI, data and software engineering for Tanzanian organisations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.slug}
              href={service.href}
              className="group relative flex flex-col justify-end overflow-hidden border border-background/15 aspect-[4/5] sm:aspect-[3/4]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">{service.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed">{service.summary}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white mt-1">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Software Section ────────────────────────────────────────────── */

function ProductLink({ href, external, label }: { href: string; external?: boolean; label: string }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
    >
      {label}
      {external ? <ArrowUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
    </a>
  );
}

function SoftwareSection() {
  return (
    <section id="software" className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Our Software</h2>
      <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mb-16 md:mb-24">
        Beyond client work, we build and run our own products. They are live, in use, and proof that we engineer
        what we recommend.
      </p>

      <div className="flex flex-col">
        {products.map((product, index) => {
          const isLongName = product.name.length > 8;
          const href = product.href ?? "/#contact";
          const label = product.linkLabel ?? `Ask about ${product.name}`;
          return (
            <div
              key={product.name}
              className={`group flex flex-col gap-6 py-12 md:py-20 ${
                index < products.length - 1 ? "border-b border-border" : ""
              } ${index === 0 ? "border-t border-border" : ""}`}
            >
              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={`font-light tracking-tight text-foreground leading-none whitespace-nowrap ${
                      isLongName ? "text-4xl" : "text-5xl"
                    }`}
                  >
                    {product.name}
                  </h3>
                  <span className="text-sm text-muted-foreground mt-2 shrink-0">{product.number}</span>
                </div>
                <p className="text-base text-foreground leading-relaxed max-w-md">{product.description}</p>
                <ProductLink href={href} external={product.external} label={label} />
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-start gap-8">
                <div className="w-72 shrink-0 flex flex-col gap-4">
                  <p className="text-base text-foreground leading-relaxed">{product.description}</p>
                  <span className="text-sm text-muted-foreground">{product.number}</span>
                  <ProductLink href={href} external={product.external} label={label} />
                </div>
                <div className="flex items-center justify-center flex-shrink-0 mt-4">
                  <div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center text-foreground/10">
                    <span className="text-6xl md:text-8xl font-bold leading-none select-none" aria-hidden="true">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-end">
                  <a
                    href={href}
                    target={product.external ? "_blank" : undefined}
                    rel={product.external ? "noopener noreferrer" : undefined}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <p
                      className={`font-light tracking-tight text-foreground leading-none whitespace-nowrap transition-opacity group-hover:opacity-70 ${
                        isLongName ? "text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl" : "text-8xl lg:text-9xl xl:text-[10rem]"
                      }`}
                    >
                      {product.name}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Industries ──────────────────────────────────────────────────── */

function IndustriesSection() {
  return (
    <section id="industries" className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6">Industries</p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl text-balance">
              Sectors we work with in Tanzania
            </h2>
          </div>
          <p className="text-base text-background/60 leading-relaxed max-w-xs md:text-right shrink-0">
            From Dar es Salaam, for organisations across Tanzania.
          </p>
        </div>

        <div className="border-t border-background/15">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="flex items-baseline gap-5 md:gap-10 border-b border-background/15 py-6 md:py-9"
            >
              <span className="text-sm text-background/40 tabular-nums shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight">{industry}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─────────────────────────────────────────────────────────── */

function FAQSection() {
  return (
    <section id="faq" className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">FAQ</p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground mb-16 md:mb-24 text-balance max-w-3xl">
          Frequently asked questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {homeFaqs.map((f) => (
            <div key={f.question} className="border-t border-border py-8 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-light text-foreground leading-snug">{f.question}</h3>
              <p className="text-base text-foreground/70 leading-relaxed">{f.answer}</p>
              {f.link ? (
                <a
                  href={f.link.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  {f.link.label}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─────────────────────────────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6">Contact Us</p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-balance">
              Tell us which workflow to automate first
            </h2>
          </div>
          <p className="text-base md:text-lg text-background/60 leading-relaxed max-w-md">
            Describe the task that takes your team the most time and we will get back to you the same day. Prefer
            talking directly? Reach us on any channel below.
          </p>
          <div className="flex flex-col gap-4 mt-2">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors"
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              WhatsApp: {contact.phone}
            </a>
            <a
              href={contact.phoneHref}
              className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4 shrink-0" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-sm text-background/80 hover:text-background transition-colors"
            >
              <Mail className="h-4 w-4 shrink-0" />
              {contact.email}
            </a>
            <p className="flex items-start gap-3 text-sm text-background/80">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{contact.location}</span>
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

/* ─── CTA Section ─────────────────────────────────────────────────── */

function CTASection() {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">Get Started</p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-2xl text-balance">
            Ready to automate your first workflow?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Chat on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 border border-foreground px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Email Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <SiteHeader />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SoftwareSection />
      <IndustriesSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
      <SiteFooter />
      <FloatingWhatsApp />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </main>
  );
}
