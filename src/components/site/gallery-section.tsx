import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { images, imageCaptions, type ImageKey } from "@/lib/data/images";
import type { Dictionary } from "@/lib/i18n/dictionary";

const order: { key: ImageKey; span?: string }[] = [
  { key: "registan", span: "sm:col-span-2 sm:row-span-2" },
  { key: "bukhara" },
  { key: "khiva" },
  { key: "antalya" },
  { key: "cappadocia", span: "sm:col-span-2" },
  { key: "dubai" },
  { key: "tashkent" },
  { key: "europe" },
];

export function GallerySection({ dict }: { dict: Dictionary }) {
  return (
    <section id="gallery" className="scroll-mt-16 bg-background py-section-sm lg:py-section">
      <div className="mx-auto max-w-(--breakpoint-xl) px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 pb-10">
          <span className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {dict.gallery.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-medium sm:text-5xl">{dict.gallery.title}</h2>
          <p className="max-w-xl text-base text-muted-foreground">{dict.gallery.lead}</p>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-4 sm:grid-cols-4">
          {order.map(({ key, span }) => (
            <Dialog key={key}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label={`${dict.gallery.eyebrow}: ${imageCaptions[key]}`}
                  className={`group relative overflow-hidden rounded-lg border border-border bg-muted ${span ?? ""}`}
                >
                  <Image
                    src={images[key]}
                    alt={imageCaptions[key]}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              </DialogTrigger>
              <DialogContent
                showCloseButton
                className="max-w-3xl border-none bg-transparent p-0 shadow-none"
              >
                <DialogTitle className="sr-only">{imageCaptions[key]}</DialogTitle>
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
                  <Image
                    src={images[key]}
                    alt={imageCaptions[key]}
                    fill
                    sizes="768px"
                    className="object-cover"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
