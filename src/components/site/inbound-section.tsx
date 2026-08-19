import Link from "next/link";
import { Landmark } from "lucide-react";
import { TicketCard } from "./ticket-card";
import { Button } from "@/components/ui/button";
import { tours } from "@/lib/data/tours";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function InboundSection({
  locale,
  dict,
  full = false,
}: {
  locale: Locale;
  dict: Dictionary;
  full?: boolean;
}) {
  const list = tours.filter((t) => t.category === "inbound").slice(0, full ? undefined : 3);

  return (
    <section id="inbound" className="scroll-mt-16 bg-background py-section-sm lg:py-section">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-border pb-10">
          <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {dict.inbound.eyebrow}
          </span>
          <h2 className="max-w-2xl font-display text-4xl leading-[1.05] font-medium text-balance sm:text-5xl">
            {dict.inbound.title}
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">{dict.inbound.lead}</p>
        </div>

        {full && (
          <div className="grid gap-6 border-b border-border py-10 sm:grid-cols-2 lg:grid-cols-4">
            {dict.inbound.services.map((s) => (
              <div key={s.title} className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-medium">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between gap-4 pt-10 pb-6">
          <h3 className="font-display text-2xl font-medium">{dict.inbound.toursTitle}</h3>
          {!full && (
            <Button asChild variant="ghost" size="sm">
              <Link href={`/${locale}/uzbekistan`}>{dict.inbound.viewAll}</Link>
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

        <div className="mt-10 flex items-start gap-3 rounded-lg border border-border bg-card p-5 text-sm text-muted-foreground">
          <Landmark className="mt-0.5 size-5 shrink-0 text-accent" />
          <p>{dict.inbound.unescoNote}</p>
        </div>

        {full && (
          <div className="mt-12 flex flex-col items-start gap-4 rounded-lg border border-border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-2xl font-medium">{dict.inbound.ctaTitle}</h3>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">{dict.inbound.ctaBody}</p>
            </div>
            <Button asChild size="lg">
              <a href="#booking">{dict.inbound.ctaButton}</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
