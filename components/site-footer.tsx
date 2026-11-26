import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact, products, services, socials } from "@/lib/site";

export function SiteFooter() {
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
              A Tanzanian AI and software engineering company, based in Dar es Salaam. We build AI agents that
              organise your data and automate your workflows.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-2">Services</h3>
            {services.map((s) => (
              <a key={s.slug} href={s.href} className="text-sm text-background/80 hover:text-background transition-colors">
                {s.title}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-2">Software</h3>
            {products.map((p) => (
              <a
                key={p.name}
                href={p.href ?? "/#software"}
                target={p.external ? "_blank" : undefined}
                rel={p.external ? "noopener noreferrer" : undefined}
                className="text-sm text-background/80 hover:text-background transition-colors inline-flex items-center gap-1"
              >
                {p.name}
                {p.external && <ArrowUpRight className="h-3 w-3" />}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-medium tracking-widest uppercase text-background/40 mb-2">Contact</h3>
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
            <a
              href="/ai-automation"
              className="inline-flex items-center gap-2 text-sm font-medium text-background underline underline-offset-4 hover:text-background/70 transition-colors"
            >
              How AI automation works
              <ArrowRight className="h-4 w-4" />
            </a>
            <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="inline-flex items-center gap-1 text-sm text-background/80 hover:text-background transition-colors"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-background/10 pt-8 mt-12">
          <p className="text-xs text-background/40">
            {`© ${new Date().getFullYear()} Driftmark Technologies. All rights reserved.`}
          </p>
          <nav aria-label="Legal and tools" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-background/60">
            <a href="/exchange-rates" className="hover:text-background transition-colors">
              Exchange Rates API
            </a>
            <a href="/privacy" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <span className="text-background/40">Dar es Salaam, Tanzania</span>
          </nav>
        </div>
      </div>

      <div className="h-16 md:h-0" />
    </footer>
  );
}
