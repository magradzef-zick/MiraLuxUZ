import { contact } from "@/lib/data/contact";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
