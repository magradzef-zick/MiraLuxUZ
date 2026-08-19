import Link from "next/link";
import { Handshake } from "lucide-react";
import { TicketCard } from "./ticket-card";
import { Button } from "@/components/ui/button";
import { tours } from "@/lib/data/tours";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function OutboundSection({
  locale,
  dict,
  full = false,
}: {
  locale: Locale;
  dict: Dictionary;
  full?: boolean;
}) {
  const list = tours.filter((t) => t.category === "outbound").slice(0, full ? undefined : 3);

  return (
    <section
      id="outbound"
      className="dark scroll-mt-16 bg-background py-section-sm text-foreground lg:py-section"
    >
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-border pb-10">
          <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {dict.outbound.eyebrow}
          </span>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] font-medium text-balance sm:text-5xl">
            {dict.outbound.title}
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">{dict.outbound.lead}</p>
        </div>

        {full && (
          <div className="grid gap-6 border-b border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
            {dict.outbound.services.map((s) => (
              <div key={s.title} className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-10 pb-6">
          <h3 className="font-display text-2xl font-medium">{dict.outbound.toursTitle}</h3>
          {!full && (
            <Button asChild variant="ghost" size="sm">
              <Link href={`/${locale}/world`}>{dict.outbound.viewAll}</Link>
            </Button>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((t) => (
            <TicketCard
              key={t.id}
              tour={t}
              copy={dict.tours[t.id]}
              priceLabel={dict.common.priceFrom}
              onRequestLabel={dict.common.onRequest}
              ctaLabel={dict.common.details}
              ctaHref="#booking"
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            <Handshake className="size-4" />
            {dict.outbound.partnersTitle}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {dict.outbound.partners.map((p) => (
              <div key={p.name} className="rounded-lg border border-border bg-card p-5">
                <p className="font-display text-lg font-medium">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {full && (
          <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium">{dict.outbound.ctaTitle}</h3>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">{dict.outbound.ctaBody}</p>
            </div>
            <Button asChild size="lg">
              <a href="#booking">{dict.outbound.ctaButton}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
