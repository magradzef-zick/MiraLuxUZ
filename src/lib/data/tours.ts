import { images, type ImageKey } from "./images";

export type TourCategory = "inbound" | "outbound";

export interface Tour {
  id: string;
  category: TourCategory;
  routeCode: string;
  image: ImageKey;
  /** UZS, null = price on request */
  priceFrom: number | null;
  rating: number;
  featured?: boolean;
}

export const tours: Tour[] = [
  {
    id: "tashkent-day",
    category: "inbound",
    routeCode: "TAS",
    image: "tashkent",
    priceFrom: 750_000,
    rating: 5.0,
    featured: true,
  },
  {
    id: "golden-triangle",
    category: "inbound",
    routeCode: "TAS–SKD–BUX",
    image: "registan",
    priceFrom: 4_500_000,
    rating: 5.0,
    featured: true,
  },
  {
    id: "silk-road-grand",
    category: "inbound",
    routeCode: "TAS–SKD–BUX–KHV",
    image: "khiva",
    priceFrom: null,
    rating: 4.9,
    featured: true,
  },
  {
    id: "private-dmc",
    category: "inbound",
    routeCode: "VIP",
    image: "bukhara",
    priceFrom: null,
    rating: 5.0,
  },
  {
    id: "antalya-allinclusive",
    category: "outbound",
    routeCode: "TAS–AYT",
    image: "antalya",
    priceFrom: 10_600_000,
    rating: 5.0,
    featured: true,
  },
  {
    id: "istanbul-cappadocia",
    category: "outbound",
    routeCode: "TAS–IST–AYT",
    image: "cappadocia",
    priceFrom: null,
    rating: 4.9,
    featured: true,
  },
  {
    id: "dubai-getaway",
    category: "outbound",
    routeCode: "TAS–DXB",
    image: "dubai",
    priceFrom: null,
    rating: 4.8,
    featured: true,
  },
  {
    id: "europe-grand",
    category: "outbound",
    routeCode: "TAS–MIL–ZRH",
    image: "europe",
    priceFrom: null,
    rating: 4.9,
  },
];

export const featuredTours = (category: TourCategory) =>
  tours.filter((t) => t.category === category);

export { images };
