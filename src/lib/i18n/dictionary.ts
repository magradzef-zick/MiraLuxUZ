export interface TourCopy {
  title: string;
  description: string;
  duration: string;
  tag: string;
}

export interface Dictionary {
  common: { priceFrom: string; onRequest: string; details: string };
  meta: { title: string; description: string };
  nav: {
    uzbekistan: string;
    world: string;
    gallery: string;
    reviews: string;
    contacts: string;
    book: string;
  };
  hero: {
    ticketLabel: string;
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaInbound: string;
    ctaOutbound: string;
    scroll: string;
  };
  audience: {
    inboundTab: string;
    inboundTabSub: string;
    outboundTab: string;
    outboundTabSub: string;
  };
  stats: {
    years: { value: string; label: string };
    tours: { value: string; label: string };
    countries: { value: string; label: string };
    rating: { value: string; label: string };
    unesco: { value: string; label: string };
  };
  inbound: {
    eyebrow: string;
    title: string;
    lead: string;
    servicesTitle: string;
    services: { title: string; desc: string }[];
    toursTitle: string;
    viewAll: string;
    unescoNote: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  outbound: {
    eyebrow: string;
    title: string;
    lead: string;
    servicesTitle: string;
    services: { title: string; desc: string }[];
    toursTitle: string;
    viewAll: string;
    partnersTitle: string;
    partners: { name: string; desc: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  tours: Record<string, TourCopy>;
  gallery: { eyebrow: string; title: string; lead: string };
  testimonials: {
    eyebrow: string;
    title: string;
    items: { name: string; role: string; quote: string; rating: number }[];
  };
  booking: {
    eyebrow: string;
    title: string;
    lead: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    emailLabel: string;
    directionLabel: string;
    directionInbound: string;
    directionOutbound: string;
    directionUndecided: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    orCall: string;
    note: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    addressLabel: string;
    address: string;
    phonesLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string;
    socialLabel: string;
  };
  footer: {
    tagline: string;
    quickLinksTitle: string;
    contactTitle: string;
    rights: string;
    tin: string;
  };
}
