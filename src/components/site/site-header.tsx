"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { LogoMark } from "./logo-mark";
import { LanguageSwitcher } from "./language-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const links = [
    { href: `/${locale}/uzbekistan`, label: dict.nav.uzbekistan },
    { href: `/${locale}/world`, label: dict.nav.world },
    { href: `/${locale}#gallery`, label: dict.nav.gallery },
    { href: `/${locale}#reviews`, label: dict.nav.reviews },
    { href: `/${locale}#contacts`, label: dict.nav.contacts },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <LogoMark />
          <span
            className="font-display text-lg leading-none font-medium tracking-tight"
            translate="no"
          >
            Mira-Lux
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Button asChild size="sm">
            <a href={`/${locale}#booking`}>{dict.nav.book}</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm bg-background">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 font-display text-lg font-medium">
                <LogoMark />
                Mira-Lux
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile" className="flex flex-col gap-1 px-4 pb-4">
              {links.map((l) => (
                <SheetClose asChild key={l.href}>
                  <Link
                    href={l.href}
                    className="rounded-md px-3 py-3 text-base font-medium hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button asChild className="mt-3">
                  <a href={`/${locale}#booking`}>{dict.nav.book}</a>
                </Button>
              </SheetClose>
              <LanguageSwitcher locale={locale} className="mt-4 px-3" />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
