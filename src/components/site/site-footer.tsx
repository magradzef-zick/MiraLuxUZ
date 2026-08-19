import Link from "next/link";
import { Send, Mail, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./social-icons";
import { LogoMark } from "./logo-mark";
import { LanguageSwitcher } from "./language-switcher";
import { contact } from "@/lib/data/contact";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${locale}/uzbekistan`, label: dict.nav.uzbekistan },
    { href: `/${locale}/world`, label: dict.nav.world },
    { href: `/${locale}#gallery`, label: dict.nav.gallery },
    { href: `/${locale}#reviews`, label: dict.nav.reviews },
    { href: `/${locale}#contacts`, label: dict.nav.contacts },
  ];

  return (
    <footer className="dark border-t border-border bg-background text-foreground">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.2fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <LogoMark />
              <span className="font-display text-lg font-medium" translate="no">Mira-Lux</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">{dict.footer.tagline}</p>
            <div className="flex items-center gap-3 pt-1 text-muted-foreground">
              <a href={contact.instagramInbound.url} target="_blank" rel="noreferrer" aria-label="Instagram — Uzbekistan" className="transition-colors hover:text-accent">
                <InstagramIcon className="size-5" />
              </a>
              <a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-accent">
                <FacebookIcon className="size-5" />
              </a>
              <a href={contact.telegram} target="_blank" rel="noreferrer" aria-label="Telegram" className="transition-colors hover:text-accent">
                <Send className="size-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {dict.footer.quickLinksTitle}
            </span>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {dict.footer.contactTitle}
            </span>
            <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
              <Mail className="size-4 shrink-0" /> {contact.email}
            </a>
            {contact.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="size-4 shrink-0" /> {p}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            © {new Date().getFullYear()} Mira-Lux. {dict.footer.rights} {dict.footer.tin}
          </p>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </footer>
  );
}
