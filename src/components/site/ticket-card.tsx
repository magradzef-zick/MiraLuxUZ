import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Tour } from "@/lib/data/tours";
import { images } from "@/lib/data/images";
import type { TourCopy } from "@/lib/i18n/dictionary";

function PerforationRow({ className }: { className?: string }) {
  return (
    <div className={cn("relative border-t border-dashed border-border", className)}>
      <span
        aria-hidden
        className="absolute top-1/2 -left-[11px] size-[22px] -translate-y-1/2 rounded-full bg-background"
      />
      <span
        aria-hidden
        className="absolute top-1/2 -right-[11px] size-[22px] -translate-y-1/2 rounded-full bg-background"
      />
    </div>
  );
}

export function TicketCard({
  tour,
  copy,
  priceLabel,
  onRequestLabel,
  ctaLabel,
  ctaHref,
  className,
}: {
  tour: Tour;
  copy: TourCopy;
  priceLabel: string;
  onRequestLabel: string;
  ctaLabel: string;
  ctaHref: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-[0_8px_24px_-12px_rgba(24,15,27,0.35)]",
        className,
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={images[tour.image]}
          alt={copy.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 font-sans text-[11px] font-semibold tracking-[0.14em] text-primary-foreground uppercase backdrop-blur-sm">
          {copy.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between font-mono text-sm tracking-wide text-secondary">
          <span>{tour.routeCode}</span>
          <span className="flex items-center gap-1 text-accent">
            <Star className="size-3.5 fill-current" />
            {tour.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="font-display text-xl leading-tight font-medium text-balance">
          {copy.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {copy.description}
        </p>
      </div>

      <PerforationRow />

      <div className="flex items-center justify-between gap-3 p-5 pt-4">
        <div className="flex flex-col">
          <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
            {copy.duration}
          </span>
          <span className="font-mono text-lg font-semibold">
            {tour.priceFrom
              ? `${priceLabel} ${tour.priceFrom.toLocaleString("ru-RU")} UZS`
              : onRequestLabel}
          </span>
        </div>
        <Button asChild size="sm" variant="outline" className="shrink-0">
          <a href={ctaHref}>{ctaLabel}</a>
        </Button>
      </div>
    </article>
  );
}
