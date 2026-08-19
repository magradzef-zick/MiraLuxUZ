// Curated, freely-licensed photography (Wikimedia Commons, CC-BY/CC-BY-SA),
// downloaded to /public/photos to avoid hotlink rate-limiting. Swap these for
// commissioned photography before final launch — see public/photos/CREDITS.md.
export const images = {
  registan: "/photos/registan.jpg",
  bukhara: "/photos/bukhara.jpg",
  khiva: "/photos/khiva.jpg",
  tashkent: "/photos/tashkent.jpg",
  antalya: "/photos/antalya.jpg",
  cappadocia: "/photos/cappadocia.jpg",
  dubai: "/photos/dubai.jpg",
  europe: "/photos/europe.jpg",
} as const;

export type ImageKey = keyof typeof images;

export const imageCaptions: Record<ImageKey, string> = {
  registan: "Registan, Samarkand",
  bukhara: "Kalyan Minaret, Bukhara",
  khiva: "Itchan Kala, Khiva",
  tashkent: "Tashkent",
  antalya: "Antalya coastline",
  cappadocia: "Cappadocia, hot-air balloons",
  dubai: "Dubai skyline",
  europe: "Swiss Alps",
};
