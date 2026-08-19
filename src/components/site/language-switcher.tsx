"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname() ?? `/${locale}`;
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label="Language" className={cn("flex items-center gap-1 font-mono text-xs", className)}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          <Link
            href={`/${l}${rest ? `/${rest}` : ""}`}
            aria-current={l === locale ? "true" : undefined}
            className={cn(
              "rounded-sm px-1.5 py-0.5 tracking-wide uppercase transition-colors hover:text-accent",
              l === locale ? "text-foreground font-semibold" : "text-muted-foreground",
            )}
          >
            {localeNames[l]}
          </Link>
          {i < locales.length - 1 && <span className="text-border">/</span>}
        </span>
      ))}
    </nav>
  );
}
