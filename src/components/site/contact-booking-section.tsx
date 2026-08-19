import { Send, Mail, Phone, Clock, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/site/social-icons";
import { BookingForm } from "./booking-form";
import { contact } from "@/lib/data/contact";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function ContactBookingSection({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="booking"
      className="scroll-mt-16 border-t border-border bg-card py-section-sm lg:py-section"
    >
      <div className="mx-auto grid max-w-(--breakpoint-xl) gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {dict.booking.eyebrow}
            </span>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">{dict.booking.title}</h2>
            <p className="max-w-md text-base text-muted-foreground">{dict.booking.lead}</p>
          </div>
          <div className="rounded-lg border border-border bg-background p-6 sm:p-8">
            <BookingForm dict={dict} />
          </div>
        </div>

        <div id="contacts" className="scroll-mt-16 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {dict.contact.eyebrow}
            </span>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">{dict.contact.title}</h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border">
            <iframe
              title="Mira-Lux — Tashkent"
              src={contact.mapEmbedSrc}
              className="h-64 w-full grayscale-[15%] sm:h-72"
              loading="lazy"
            />
          </div>

          <dl className="grid gap-5 rounded-lg border border-border bg-background p-6 text-sm sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {dict.contact.addressLabel}
                </dt>
                <dd className="mt-1">{dict.contact.address}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {dict.contact.hoursLabel}
                </dt>
                <dd className="mt-1">{dict.contact.hours}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {dict.contact.phonesLabel}
                </dt>
                {contact.phones.map((p) => (
                  <dd key={p}>
                    <a href={`tel:${p.replace(/\s/g, "")}`} className="mt-1 block hover:text-accent">
                      {p}
                    </a>
                  </dd>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <dt className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                  {dict.contact.emailLabel}
                </dt>
                <dd className="mt-1">
                  <a href={`mailto:${contact.email}`} className="hover:text-accent">
                    {contact.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="flex flex-col gap-3 rounded-lg border border-border bg-background p-6">
            <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
              {dict.contact.socialLabel}
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href={contact.instagramInbound.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
              >
                <InstagramIcon className="size-4" /> {contact.instagramInbound.handle}
              </a>
              <a
                href={contact.instagramOutbound.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
              >
                <InstagramIcon className="size-4" /> {contact.instagramOutbound.handle}
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
              >
                <FacebookIcon className="size-4" /> Facebook
              </a>
              <a
                href={contact.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
              >
                <Send className="size-4" /> Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
