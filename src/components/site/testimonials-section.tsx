import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function TestimonialsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="reviews" className="scroll-mt-16 bg-background py-section-sm lg:py-section">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 pb-10">
          <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {dict.testimonials.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-medium sm:text-5xl">
            {dict.testimonials.title}
          </h2>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {dict.testimonials.items.map((t) => (
              <CarouselItem key={t.name} className="sm:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col justify-between gap-4 rounded-lg border border-border bg-card p-6">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg leading-snug text-balance">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                    {t.name} · {t.role}
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-6 flex gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
