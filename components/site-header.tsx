"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, Search, X, ArrowUpRight } from "lucide-react";
import { contact, industries, products, services } from "@/lib/site";

export const navLinks = [
  { label: "AI Automation", href: "/ai-automation" },
  { label: "Services", href: "/#services" },
  { label: "Our Software", href: "/#software" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
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
    title: "AI Automation",
    category: "Page",
    href: "/ai-automation",
    keywords: "ai agents agentic automation workflows whatsapp invoices reports tanzania",
  },
  {
    title: "WhatsApp Chatbot",
    category: "Page",
    href: "/whatsapp-chatbot",
    keywords: "whatsapp business api chatbot ai chat bot customers orders bookings kiswahili",
  },
  {
    title: "Atlas School Management System",
    category: "Software",
    href: "/school-management-system",
    keywords: "school management system student information fees attendance report cards necta sms parents",
  },
  {
    title: "About Us",
    category: "Section",
    href: "/#about",
    keywords: "company tanzania dar es salaam who we are",
  },
  {
    title: "Contact Us",
    category: "Section",
    href: "/#contact",
    keywords: "email phone whatsapp location message talk quote start project",
  },
  ...services.map((s) => ({
    title: s.title,
    category: "Service",
    href: s.href,
    keywords: s.summary,
  })),
  ...products.map((p) => ({
    title: p.name,
    category: "Software",
    href: p.href ?? "/#software",
    keywords: p.description,
    external: Boolean(p.external),
  })),
  ...industries.map((i) => ({
    title: i,
    category: "Industry",
    href: "/#industries",
  })),
  {
    title: "Exchange Rates API",
    category: "Free tool",
    href: "/exchange-rates",
    keywords: "bank of tanzania bot exchange rate usd tzs api",
  },
];

function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const results = q
    ? searchIndex.filter((item) =>
        `${item.title} ${item.keywords ?? ""} ${item.category}`.toLowerCase().includes(q)
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
            <p className="text-muted-foreground py-12 text-center">{`No results for "${query}"`}</p>
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

export function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-[60] flex h-14 w-14 md:h-16 md:w-16 items-center justify-center transition-transform hover:scale-110"
    >
      <Image
        src="/whatsapp-floating-button.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="h-full w-full object-contain drop-shadow-lg"
      />
    </a>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex items-center justify-between px-8 py-5 bg-background/80 backdrop-blur-md border-b border-border">
        <a href="/" className="flex items-center gap-3" aria-label="Driftmark Technologies home">
          <Image
            src="/driftmark-logo.png"
            alt="Driftmark Technologies"
            width={240}
            height={56}
            className="h-12 w-auto"
            priority
          />
        </a>
        <div className="flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-8 mr-4" aria-label="Main">
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
            href="/#contact"
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
          href="/#contact"
          className="flex h-10 items-center justify-center border border-foreground px-6 text-sm font-medium text-foreground"
        >
          Get Started
        </a>
      </div>

      {/* Mobile Top Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 flex md:hidden items-center px-4 py-3 bg-background/80 backdrop-blur-md border-b border-border">
        <a href="/" aria-label="Driftmark Technologies home">
          <Image
            src="/driftmark-logo.png"
            alt="Driftmark Technologies"
            width={200}
            height={48}
            className="h-10 w-auto"
            priority
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
          <nav className="flex flex-col px-6 py-10 gap-1" aria-label="Menu">
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
            <p className="text-sm text-muted-foreground mt-1">{contact.phone}</p>
            <p className="text-sm text-muted-foreground mt-1">{contact.location}</p>
          </div>
        </div>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
