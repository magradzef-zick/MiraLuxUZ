import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { OutboundSection } from "@/components/site/outbound-section";
import { GallerySection } from "@/components/site/gallery-section";
import { ContactBookingSection } from "@/components/site/contact-booking-section";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function WorldPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const dict = getDictionary(locale);

  return (
    <>
      <OutboundSection locale={locale} dict={dict} full />
      <div className="bg-background py-6">
        <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
          <Link
            href={`/${locale}/uzbekistan`}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent"
          >
            {dict.audience.inboundTab} · {dict.audience.inboundTabSub}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
      <GallerySection dict={dict} />
      <ContactBookingSection dict={dict} />
    </>
  );
}
