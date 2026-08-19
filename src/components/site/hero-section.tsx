import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/lib/data/images";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function HeroSection({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-(--breakpoint-xl) gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-20 lg:pb-24">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-accent/50 px-3 py-1 font-mono text-xs tracking-[0.14em] text-accent uppercase">
            {dict.hero.eyebrow}
          </span>
          <h1 className="font-display text-[2.75rem] leading-[0.98] font-medium text-balance sm:text-6xl lg:text-7xl">
            {dict.hero.titleLine1}
            <br />
            {dict.hero.titleLine2}
          </h1>
          <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
            {dict.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild size="lg" className="h-11 px-5">
              <a href="#inbound">
                {dict.hero.ctaInbound}
                <ArrowDownRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-5">
              <a href="#outbound">
                {dict.hero.ctaOutbound}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Signature visual: two stacked boarding-pass stubs for the two audiences */}
        <div className="flex flex-col gap-5">
          <TicketPreview
            href="#inbound"
            image={images.registan}
            label={dict.hero.ticketLabel}
            route="TAS – SKD – BUX – KHV"
            title={dict.audience.inboundTab}
            subtitle={dict.audience.inboundTabSub}
          />
          <TicketPreview
            href="#outbound"
            image={images.antalya}
            label={dict.hero.ticketLabel}
            route="TAS – AYT – DXB – MIL"
            title={dict.audience.outboundTab}
            subtitle={dict.audience.outboundTabSub}
            dark
          />
        </div>
      </div>
    </section>
  );
}

function TicketPreview({
  href,
  image,
  label,
  route,
  title,
  subtitle,
  dark,
}: {
  href: string;
  image: string;
  label: string;
  route: string;
  title: string;
  subtitle: string;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative flex overflow-hidden rounded-lg border border-border shadow-[0_8px_24px_-12px_rgba(24,15,27,0.35)] ${dark ? "dark bg-card text-card-foreground" : "bg-card text-card-foreground"}`}
    >
      <div className="relative w-32 shrink-0 sm:w-40">
        <Image src={image} alt="" fill sizes="160px" className="object-cover" />
      </div>
      <div className="relative flex flex-1 flex-col justify-between gap-2 p-4">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
          <span>{label}</span>
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <div>
          <p className="font-display text-xl leading-none font-medium">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <p className="font-mono text-sm tracking-wide">{route}</p>
      </div>
      <div
        aria-hidden
        className="absolute inset-y-0 right-16 border-l border-dashed border-border sm:right-20"
      />
    </Link>
  );
}
