import type { Locale } from "./config";
import type { Dictionary } from "./dictionary";
import { ru } from "./locales/ru";
import { en } from "./locales/en";
import { uz } from "./locales/uz";

const dictionaries: Record<Locale, Dictionary> = { ru, en, uz };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.ru;
}
