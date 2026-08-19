export const locales = ["ru", "en", "uz"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export const localeNames: Record<Locale, string> = {
  ru: "Рус",
  en: "Eng",
  uz: "O'zb",
};
