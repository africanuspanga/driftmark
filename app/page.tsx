"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  Search,
  X,
  ChevronDown,
  ArrowUpRight,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────── */

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Software", href: "#software" },
  { label: "Industries", href: "#industries" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const whatsappMessage =
  "Hey, I am coming from the Driftmark website. I am interested in your services.";

const contact = {
  email: "hello@driftmark.co.tz",
  phone: "+255 682 152 148",
  phoneHref: "tel:+255682152148",
  whatsappHref: `https://wa.me/255682152148?text=${encodeURIComponent(whatsappMessage)}`,
  location:
    "Rose Garden Road, Dar Village Office Park, Mikocheni, Dar es Salaam, Tanzania",
};

const differentiators = [
  {
    number: "1",
    title: "Deep Industry & Tech Expertise",
    description:
      "We blend domain depth with data and AI to solve industry-specific challenges and deliver measurable outcomes for every client we serve.",
  },
  {
    number: "2",
    title: "Pan-African Delivery",
    description:
      "Headquartered in Dar es Salaam, Tanzania, we work with companies across all 54 African countries, delivering reliable engineering wherever you operate.",
  },
  {
    number: "3",
    title: "Products & Services, Together",
    description:
      "We don't just deliver services. We build and run our own software products, so we engineer for our clients the way owners do, not vendors.",
  },
];

const services = [
  {
    title: "Artificial Intelligence",
    image: "/images/ai.jpg",
    description:
      "AI agents, machine learning, and intelligent automation that turn everyday operations into competitive advantage.",
  },
  {
    title: "Data & Analytics",
    image: "/images/data-analytics.png",
    description:
      "From data engineering to dashboards, we turn raw data into decisions your teams can act on.",
  },
  {
    title: "Cloud",
    image: "/images/cloud.png",
    description:
      "Cloud architecture, migration, and operations built for scale, resilience, and cost efficiency.",
  },
  {
    title: "Software Engineering",
    image: "/images/software-engineering.jpg",
    description:
      "End-to-end product engineering, web, mobile, and enterprise systems built to last.",
  },
  {
    title: "Cybersecurity",
    image: "/images/design.jpg",
    description:
      "Penetration testing, threat analysis, and infrastructure hardening, securing your systems at every layer.",
  },
];

const industries = [
  "Government & Public Sector",
  "Banking & Financial Services",
  "Education",
  "Tourism & Hospitality",
  "Logistics & E-Commerce",
  "Healthcare",
  "Telecom, Media & Technology",
];

const products = [
  {
    name: "Nivora",
    number: "/0.1",
    description:
      "Transforming paper-based operations into intelligent digital ecosystems, powering the next era of data-driven governance and enterprise across Tanzania.",
  },
  {
    name: "Mkwawa",
    number: "/0.2",
    description:
      "End-to-end cybersecurity operations, from penetration testing to infrastructure hardening, securing enterprises and government institutions at every layer.",
  },
  {
    name: "Dukalink",
    number: "/0.3",
    description:
      "Unified logistics, supply chain management, and e-commerce in a single platform. Moving goods smarter, selling faster, operating leaner.",
  },
  {
    name: "Atlas",
    number: "/0.4",
    description:
      "The most advanced school management system in the country. Better, cheaper, faster, and built for the way education actually works.",
  },
  {
    name: "Twiga",
    number: "/0.5",
    description:
      "One-stop software for every tourism operation. From booking engines to website builders, managing the full lifecycle of a tourism company.",
  },
  {
    name: "CV Chap Chap",
    number: "/0.6",
    description:
      "Build a professional, job-winning CV in minutes. Helping job seekers across Africa present their best selves and land the roles they deserve.",
    href: "https://www.cvchapchap.com/",
  },
];

const stats = [
  { value: "100+", label: "Websites & systems delivered" },
  { value: "54", label: "African countries served" },
  { value: "6", label: "Software products of our own" },
];

const testimonials = [
  {
    company: "Amson Group",
    quote:
      "Driftmark transformed our operations with intelligent automation. What used to take weeks now happens in real time. A truly world-class team.",
  },
  {
    company: "Dr. Toyota",
    quote:
      "Their cybersecurity assessment exposed vulnerabilities we never knew existed. Mkwawa gave us the confidence to scale our digital infrastructure.",
  },
  {
    company: "PTM Tours & Safaris",
    quote:
      "Twiga completely changed how we manage bookings, itineraries, and client communications. Our operational efficiency has never been higher.",
  },
  {
    company: "Kalax",
    quote:
      "The Dukalink platform unified our supply chain and e-commerce operations into a single pane of glass. Incredible execution from day one.",
  },
  {
    company: "Brands Express",
    quote:
      "Working with Driftmark was a turning point for our business. Their AI-first approach delivered measurable results within the first quarter.",
  },
  {
    company: "SoftLink",
    quote:
      "Driftmark's engineering team delivered beyond expectations. Their AI solutions seamlessly integrated with our existing systems and unlocked new capabilities.",
  },
];

type SearchItem = {
  title: string;
  category: string;
  href: string;
  keywords?: string;
  external?: boolean;
};

const searchIndex: SearchItem[] = [
  {
    title: "About Us",
    category: "Section",
    href: "#about",
    keywords: "company partner data ai africa differentiators who we are",
  },
  {
    title: "Contact Us",
    category: "Section",
    href: "#contact",
    keywords: "email phone whatsapp location message form talk quote",
  },
  ...services.map((s) => ({
    title: s.title,
    category: "Service",
    href: "#services",
    keywords: s.description,
  })),
  ...products.map((p) => ({
    title: p.name,
    category: "Software",
    href: p.href ?? "#software",
    keywords: p.description,
    external: Boolean(p.href),
  })),
  ...industries.map((i) => ({
    title: i,
    category: "Industry",
    href: "#industries",
  })),
];

/* ─── Search Overlay ──────────────────────────────────────────────── */

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const results = q
    ? searchIndex.filter((item) =>
        `${item.title} ${item.keywords ?? ""} ${item.category}`
          .toLowerCase()
          .includes(q)
      )
    : searchIndex;

  return (
    <div className="fixed inset-0 z-[110] bg-background flex flex-col">
      <div className="flex items-center gap-4 px-6 py-5 border-b border-border">
        <Search className="h-5 w-5 text-muted-foreground shrink-0" />
        <input
          autoFocus
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Escape" && onClose()}
          placeholder="Search services, software, industries..."
          className="flex-1 bg-transparent text-lg text-foreground placeholder:text-muted-foreground/60 focus:outline-none"
        />
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center border border-border text-foreground"
          aria-label="Close search"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="max-w-3xl mx-auto w-full flex flex-col">
          {results.length === 0 ? (
            <p className="text-muted-foreground py-12 text-center">
              {`No results for "${query}"`}
            </p>
          ) : (
            results.map((item) => (
              <a
                key={`${item.category}-${item.title}`}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                onClick={onClose}
                className="group flex items-center justify-between gap-4 py-4 border-b border-border"
              >
                <span className="flex items-center gap-3 text-lg font-light text-foreground transition-opacity group-hover:opacity-60">
                  {item.title}
                  {item.external && <ArrowUpRight className="h-4 w-4" />}
                </span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground shrink-0">
                  {item.category}
                </span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Floating WhatsApp Button ────────────────────────────────────── */

function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-[60] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white border border-border shadow-lg transition-transform hover:scale-110"
    >
      <Image
        src="/whatsapp-floating-button.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="h-10 w-10 md:h-12 md:w-12 object-contain"
      />
    </a>
  );
}

/* ─── Navbar ──────────────────────────────────────────────────────── */

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border">
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/driftmark-logo.png"
            alt="Driftmark Technologies"
            width={240}
            height={56}
            className="h-12 w-auto"
          />
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8 mr-4">
            {navLinks.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="flex h-10 items-center justify-center border border-foreground px-6 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-muted"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-muted"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden items-center justify-between px-4 py-3 bg-background/90 backdrop-blur-md border-t border-border">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground"
            aria-label="Open menu"
          >
            <Menu className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex h-10 w-10 items-center justify-center border border-border text-foreground"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
        <a
          href="#contact"
          className="flex h-10 items-center justify-center border border-foreground px-6 text-sm font-medium text-foreground"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Top Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center px-4 py-3 bg-background/80 backdrop-blur-md border-b border-border">
        <a href="#">
          <Image
            src="/driftmark-logo.png"
            alt="Driftmark Technologies"
            width={200}
            height={48}
            className="h-10 w-auto"
          />
        </a>
      </header>

      {/* Full-screen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <Image
              src="/driftmark-logo.png"
              alt="Driftmark Technologies"
              width={220}
              height={52}
              className="h-11 w-auto"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center border border-border text-foreground"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-10 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl sm:text-3xl font-light text-foreground py-4 border-b border-border transition-colors hover:text-muted-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto px-6 py-8 border-t border-border">
            <p className="text-sm text-muted-foreground">{contact.email}</p>
            <p className="text-sm text-muted-foreground mt-1">
              {contact.phone}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {contact.location}
            </p>
          </div>
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          AI-Powered Automation
          <br />
          for Every Decision
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
          A data and AI-enabled software engineering services partner, working
          with companies across all 54 African countries, from Dar es Salaam,
          Tanzania.
        </p>
      </div>
      <div className="absolute bottom-24 md:bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll to Explore
          </span>
        </a>
      </div>
    </section>
  );
}

/* ─── About Us ────────────────────────────────────────────────────── */

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
          About Us
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight max-w-4xl mb-8 text-balance text-foreground">
          We are a data and AI-enabled software engineering services partner.
        </h2>
        <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-3xl mb-20 md:mb-28">
          Driftmark Technologies blends deep domain expertise with data, AI,
          and modern engineering to solve industry-specific challenges and
          deliver measurable outcomes. We partner with enterprises,
          institutions, and governments across all 54 African countries,
          designing, building, and operating the systems that power their most
          critical decisions. And because we build and run our own software
          products too, we bring an owner&apos;s mindset to every engagement.
        </p>

        <h3 className="text-2xl md:text-4xl font-light text-center text-foreground mb-14 md:mb-20">
          Key Differentiators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {differentiators.map((d) => (
            <div key={d.number} className="flex gap-6">
              <span className="text-7xl md:text-8xl font-light leading-none text-foreground select-none">
                {d.number}
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <h4 className="text-xl md:text-2xl font-medium text-foreground leading-snug">
                  {d.title}
                </h4>
                <p className="text-base text-foreground/70 leading-relaxed">
                  {d.description}
                </p>
              </div>
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
    <section
      id="services"
      className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6">
          Services
        </p>
        <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-3xl mb-16 md:mb-24 text-balance">
          Everything a modern technology partner should do, under one roof
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col justify-end overflow-hidden border border-background/15 aspect-[4/5] sm:aspect-[3/4]"
            >
              {service.image && (
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {service.description}
                </p>
                <ArrowRight className="h-5 w-5 text-white mt-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Software Section ────────────────────────────────────────────── */

function SoftwareSection() {
  return (
    <section
      id="software"
      className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
        Our Software
      </h2>
      <p className="text-base md:text-lg text-foreground/70 leading-relaxed max-w-2xl mb-16 md:mb-24">
        Beyond our services, we build and operate our own software products,
        proof that we engineer what we recommend.
      </p>

      <div className="flex flex-col">
        {products.map((product, index) => {
          const isLongName = product.name.length > 8;
          const nameEl = (
            <h3
              className={`font-light tracking-tight text-foreground leading-none whitespace-nowrap transition-opacity group-hover:opacity-70 ${
                isLongName
                  ? "text-4xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
                  : "text-8xl lg:text-9xl xl:text-[10rem]"
              }`}
            >
              {product.name}
            </h3>
          );

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
                  <span className="text-sm text-muted-foreground mt-2 shrink-0">
                    {product.number}
                  </span>
                </div>
                <p className="text-base text-foreground leading-relaxed max-w-md">
                  {product.description}
                </p>
                {product.href && (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
                  >
                    Visit {product.name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex items-start gap-8">
                <div className="w-64 shrink-0 flex flex-col gap-4">
                  <p className="text-base text-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <span className="text-sm text-muted-foreground">
                    {product.number}
                  </span>
                  {product.href && (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
                    >
                      Visit {product.name}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div className="flex items-center justify-center flex-shrink-0 mt-4">
                  <div className="flex h-16 w-16 md:h-24 md:w-24 items-center justify-center text-foreground/10">
                    <span className="text-6xl md:text-8xl font-bold leading-none select-none">
                      {product.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-end">
                  {product.href ? (
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {nameEl}
                    </a>
                  ) : (
                    nameEl
                  )}
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
    <section
      id="industries"
      className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6">
              Industries
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight max-w-2xl text-balance">
              Domain depth across the sectors driving Africa forward
            </h2>
          </div>
          <p className="text-base text-background/60 leading-relaxed max-w-xs md:text-right shrink-0">
            Serving companies in all 54 African countries from Dar es Salaam,
            Tanzania.
          </p>
        </div>

        <div className="border-t border-background/15">
          {industries.map((industry, index) => (
            <div
              key={industry}
              className="group flex items-center justify-between gap-6 border-b border-background/15 py-6 md:py-9 transition-colors hover:bg-background/5"
            >
              <div className="flex items-baseline gap-5 md:gap-10 min-w-0">
                <span className="text-sm text-background/40 tabular-nums shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-light leading-tight transition-transform duration-300 group-hover:translate-x-2 md:group-hover:translate-x-4">
                  {industry}
                </h3>
              </div>
              <ArrowRight className="h-5 w-5 md:h-7 md:w-7 text-background/30 transition-colors group-hover:text-background shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Clients Section ─────────────────────────────────────────────── */

function ClientsSection() {
  return (
    <section
      id="clients"
      className="bg-background px-6 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
          Trusted By
        </p>
        <h2 className="text-3xl md:text-5xl font-light text-foreground mb-16 md:mb-24 text-balance">
          Organizations that trust Driftmark to deliver
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border border border-border mb-16 md:mb-24">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-background p-8 md:p-10 flex flex-col gap-3"
            >
              <span className="text-5xl md:text-6xl font-light tracking-tight text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Client name tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border mb-16 md:mb-24">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="bg-background flex items-center justify-center px-4 py-8 md:py-10 transition-colors hover:bg-muted"
            >
              <span className="text-base md:text-lg font-medium tracking-tight text-foreground text-center">
                {t.company}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.company}
              className="border border-border p-8 md:p-10 flex flex-col gap-6 transition-colors hover:border-foreground"
            >
              <span
                className="text-6xl font-light leading-none text-foreground/15 select-none"
                aria-hidden="true"
              >
                {"“"}
              </span>
              <blockquote className="flex-1 text-base text-foreground/80 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="text-sm font-medium text-foreground tracking-wide uppercase border-t border-border pt-6">
                {t.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─────────────────────────────────────────────── */

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const canSend = name.trim().length > 0 && message.trim().length > 0;

  const lines = [
    `Hello Driftmark! My name is ${name.trim()}.`,
    email.trim() ? `Email: ${email.trim()}` : "",
    phone.trim() ? `Phone: ${phone.trim()}` : "",
    message.trim(),
  ].filter(Boolean);
  const formWhatsappHref = `https://wa.me/255682152148?text=${encodeURIComponent(lines.join("\n"))}`;

  const inputClasses =
    "h-14 w-full border border-background/25 bg-transparent px-5 text-base text-background placeholder:text-background/40 focus:border-background focus:outline-none";

  return (
    <section
      id="contact"
      className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-20 md:py-32"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-background/50 mb-6">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-balance">
              Tell us about your project
            </h2>
          </div>
          <p className="text-base md:text-lg text-background/60 leading-relaxed max-w-md">
            Share a few details and we will get back to you the same day.
            Prefer talking directly? Reach us on any channel below.
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

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm text-background/60">Your name *</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Juma"
                autoComplete="name"
                className={inputClasses}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm text-background/60">Phone</span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0712 345 678"
                autoComplete="tel"
                inputMode="tel"
                className={inputClasses}
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-background/60">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. juma@company.co.tz"
              autoComplete="email"
              className={inputClasses}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm text-background/60">
              Your message *
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what you want to build..."
              rows={5}
              className="w-full border border-background/25 bg-transparent px-5 py-4 text-base text-background placeholder:text-background/40 focus:border-background focus:outline-none resize-none"
            />
          </label>
          {canSend ? (
            <a
              href={formWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center gap-2 bg-background text-foreground text-base font-medium transition-opacity hover:opacity-90"
            >
              Send via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="flex h-14 items-center justify-center gap-2 bg-background text-foreground text-base font-medium opacity-40 cursor-not-allowed"
            >
              Send via WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </button>
          )}
          <p className="text-sm text-background/50 text-center">
            Opens WhatsApp with your message ready to send.
          </p>
        </div>
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
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
            Get Started
          </p>
          <h2 className="text-3xl md:text-5xl font-light leading-tight text-foreground max-w-2xl text-balance">
            Ready to automate your next decision?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 bg-foreground px-8 py-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Email Us
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-foreground px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Chat on WhatsApp
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Image
              src="/driftmark-logo.png"
              alt="Driftmark Technologies"
              width={240}
              height={56}
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm text-background/60 leading-relaxed max-w-xs">
              A data and AI-enabled software engineering services partner,
              serving companies across all 54 African countries from Dar es
              Salaam, Tanzania.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-2">
              Services
            </h3>
            {services.map((s) => (
              <a
                key={s.title}
                href="#services"
                className="text-sm text-background/80 hover:text-background transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-2">
              Software
            </h3>
            {products.map((p) =>
              p.href ? (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/80 hover:text-background transition-colors inline-flex items-center gap-1"
                >
                  {p.name}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : (
                <a
                  key={p.name}
                  href="#software"
                  className="text-sm text-background/80 hover:text-background transition-colors"
                >
                  {p.name}
                </a>
              )
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-2">
              Contact
            </h3>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-background/80 hover:text-background transition-colors"
            >
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>WhatsApp: {contact.phone}</span>
            </a>
            <a
              href={contact.phoneHref}
              className="flex items-start gap-3 text-sm text-background/80 hover:text-background transition-colors"
            >
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-3 text-sm text-background/80 hover:text-background transition-colors"
            >
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{contact.email}</span>
            </a>
            <p className="flex items-start gap-3 text-sm text-background/80">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{contact.location}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-background/10 pt-8 mt-12">
          <p className="text-xs text-background/40">
            {"© 2026 Driftmark Technologies. All rights reserved."}
          </p>
          <p className="text-xs text-background/40">
            Dar es Salaam, Tanzania · Serving all 54 African countries
          </p>
        </div>
      </div>

      <div className="h-16 md:h-0" />
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SoftwareSection />
      <IndustriesSection />
      <ClientsSection />
      <ContactSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
