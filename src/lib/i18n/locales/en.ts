import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
  common: { priceFrom: "from", onRequest: "Price on request", details: "Details" },
  meta: {
    title: "Mira-Lux — Tashkent travel agency since 2009",
    description:
      "Mira-Lux: private and group tours across Uzbekistan for international guests, plus flights, hotels, visas and outbound tours for local travellers. 17 years in business.",
  },
  nav: {
    uzbekistan: "Uzbekistan",
    world: "World",
    gallery: "Gallery",
    reviews: "Reviews",
    contacts: "Contact",
    book: "Book now",
  },
  hero: {
    ticketLabel: "MIRA-LUX BOARDING PASS",
    eyebrow: "Tashkent · since 2009",
    titleLine1: "Your itinerary",
    titleLine2: "is already written",
    subtitle:
      "For 17 years Mira-Lux has built trips like a ticket: an exact route, vetted partners, nothing left to chance. Uzbekistan tours for guests from anywhere — and flights, hotels, visas and tours abroad for Tashkent residents.",
    ctaInbound: "Uzbekistan for guests",
    ctaOutbound: "World for our clients",
    scroll: "Scroll the itinerary",
  },
  audience: {
    inboundTab: "Uzbekistan",
    inboundTabSub: "Inbound · for international guests",
    outboundTab: "World",
    outboundTabSub: "Outbound · for Tashkent residents",
  },
  stats: {
    years: { value: "17", label: "years in business" },
    tours: { value: "300+", label: "tours a year" },
    countries: { value: "15+", label: "destination countries" },
    rating: { value: "4.9", label: "average rating" },
    unesco: { value: "7+", label: "UNESCO sites" },
  },
  inbound: {
    eyebrow: "INBOUND · UZBEKISTAN",
    title: "Uzbekistan, issued like a ticket",
    lead: "We host international guests as a DMC: private and group itineraries, transfers, guides and hotels — booked in advance, nothing improvised.",
    servicesTitle: "What's on the ticket",
    services: [
      {
        title: "Private & group experiences",
        desc: "From a bespoke route for two to full group departures — you set the pace.",
      },
      {
        title: "Transfers & meet-and-greet",
        desc: "Airport pickup, inter-city transfers, and support at every stage of the route.",
      },
      {
        title: "Licensed guides",
        desc: "English-speaking historian guides — the Registan and Itchan Kala told by people, not guidebooks.",
      },
      {
        title: "3–5★ hotels",
        desc: "From boutique old-town riads to five-star properties, matched to your budget and style.",
      },
    ],
    toursTitle: "Routes across Uzbekistan",
    viewAll: "See all Uzbekistan tours",
    unescoNote:
      "7+ UNESCO World Heritage sites on a single route: the Registan, Shah-i-Zinda, Po-i-Kalyan, Itchan Kala and more.",
    ctaTitle: "Planning a group or a private visit?",
    ctaBody:
      "Send us your dates and party size — we'll build a route through Tashkent, Samarkand, Bukhara and Khiva around your schedule.",
    ctaButton: "Request an itinerary",
  },
  outbound: {
    eyebrow: "OUTBOUND · WORLD",
    title: "The world we've booked for 17 years",
    lead: "Flights, hotels, visas and ready-made tours abroad — Turkey, the UAE, Europe. Direct partnerships with hotels such as Mardan Palace mean better rates, no middlemen.",
    servicesTitle: "What we arrange",
    services: [
      {
        title: "Flight tickets",
        desc: "Fares and issuing across every route, including complex connections.",
      },
      {
        title: "Visa support",
        desc: "Document preparation and appointments — Schengen, UAE and other destinations.",
      },
      {
        title: "Hotels & packages",
        desc: "From all-inclusive beach stays in Antalya to European city tours, at a fixed price.",
      },
      {
        title: "Partner rates",
        desc: "Direct agreements with hotels and operators, including Mardan Palace and WorkshopAntalya.",
      },
    ],
    toursTitle: "Ready-made destinations",
    viewAll: "See all tours abroad",
    partnersTitle: "Partners",
    partners: [
      {
        name: "Mardan Palace",
        desc: "Direct allocation at one of Antalya's most recognisable resorts.",
      },
      {
        name: "WorkshopAntalya",
        desc: "Joint Turkish programmes and on-the-ground events.",
      },
    ],
    ctaTitle: "Where are you headed this season?",
    ctaBody:
      "Tell us the destination and dates — we'll bundle flights, hotel and visa into one package.",
    ctaButton: "Plan my trip",
  },
  tours: {
    "tashkent-day": {
      title: "Tashkent in a day",
      description:
        "The old town, the metro's underground palaces, Hazrat Imam and an evening plov — a guide-led day that never feels like a checklist.",
      duration: "1 day",
      tag: "Private / group",
    },
    "golden-triangle": {
      title: "Golden Triangle: Tashkent – Samarkand – Bukhara",
      description:
        "The classic Silk Road route: the Registan at sunset, Po-i-Kalyan in Bukhara, high-speed Afrosiyob transfers between cities.",
      duration: "4 days",
      tag: "Bestseller",
    },
    "silk-road-grand": {
      title: "Grand Silk Road: + Khiva",
      description:
        "The full four-city line, adding the walled old town of Itchan Kala and the road through the Kyzylkum desert. For seeing all of it.",
      duration: "7 days",
      tag: "Extended",
    },
    "private-dmc": {
      title: "Custom DMC programme",
      description:
        "A wedding, a business delegation, a photo expedition — we build the route, transport and logistics around a non-standard brief.",
      duration: "On request",
      tag: "VIP",
    },
    "antalya-allinclusive": {
      title: "Antalya, all-inclusive",
      description:
        "Beach holiday with direct allocation at partner hotels, including Mardan Palace. Departs Tashkent, transfer included.",
      duration: "8 days",
      tag: "Beach",
    },
    "istanbul-cappadocia": {
      title: "Istanbul – Cappadocia – Antalya",
      description:
        "The Bosphorus and bazaars of Istanbul, a hot-air balloon flight over Cappadocia, and the Antalya coast to finish. Three Turkeys in one trip.",
      duration: "9 days",
      tag: "Combined",
    },
    "dubai-getaway": {
      title: "Dubai long weekend",
      description:
        "Burj Khalifa, a desert safari, shopping at Dubai Mall — a short but full format for a short break.",
      duration: "4 days",
      tag: "City",
    },
    "europe-grand": {
      title: "Italy – Switzerland – Liechtenstein",
      description:
        "Milan, the Swiss Alpine passes and tiny Liechtenstein — a coach tour for seeing Europe without rushing it.",
      duration: "10 days",
      tag: "Multi-country",
    },
  },
  gallery: {
    eyebrow: "GALLERY",
    title: "From the route archive",
    lead: "Frames from our destinations — from Bukhara's domes to the Dubai waterfront.",
  },
  testimonials: {
    eyebrow: "REVIEWS",
    title: "What guests say afterwards",
    items: [
      {
        name: "Aleksander",
        role: "Tashkent city tour",
        quote:
          "A wonderful day discovering Tashkent's finest locations with a friendly, professional guide.",
        rating: 5,
      },
      {
        name: "Alisher Nazarov",
        role: "Antalya tour",
        quote:
          "Our Antalya tour proved splendid; the beaches astounded us and organisation was flawless throughout.",
        rating: 5,
      },
      {
        name: "Group tour guest",
        role: "Samarkand – Bukhara – Khiva",
        quote:
          "Every detail of the route was handled quickly and competently, from visa help to a discounted fare — I'll be back.",
        rating: 5,
      },
    ],
  },
  booking: {
    eyebrow: "ENQUIRY",
    title: "Let's issue a ticket for your trip",
    lead: "Fill in the form — a manager will reach out on WhatsApp or by phone within the working day.",
    nameLabel: "Name",
    namePlaceholder: "How should we address you",
    phoneLabel: "Phone",
    emailLabel: "Email",
    directionLabel: "Direction",
    directionInbound: "Uzbekistan (for guests)",
    directionOutbound: "Abroad",
    directionUndecided: "Not decided yet",
    messageLabel: "Message",
    messagePlaceholder: "Dates, party size, preferences",
    submit: "Send via WhatsApp",
    orCall: "or call",
    note: "Pressing “Send” opens WhatsApp with your message pre-filled — nothing is sent automatically.",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Find us in Tashkent",
    addressLabel: "Address",
    address: "Tashkent, Yunusabad district, Kiyot block, Sh. Rashidov avenue 60/23",
    phonesLabel: "Phones",
    emailLabel: "Email",
    hoursLabel: "Hours",
    hours: "Mon–Fri, 9:00–18:00",
    socialLabel: "Follow us",
  },
  footer: {
    tagline: "Your itinerary, issued in advance — since 2009.",
    quickLinksTitle: "Sections",
    contactTitle: "Get in touch",
    rights: "All rights reserved.",
    tin: "MIRA-LUX LLC · Tashkent, Uzbekistan",
  },
};
