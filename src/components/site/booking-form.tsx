"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { contact } from "@/lib/data/contact";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function BookingForm({ dict }: { dict: Dictionary }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [direction, setDirection] = useState<"inbound" | "outbound" | "undecided">(
    "undecided",
  );
  const [message, setMessage] = useState("");

  const directionLabel = {
    inbound: dict.booking.directionInbound,
    outbound: dict.booking.directionOutbound,
    undecided: dict.booking.directionUndecided,
  }[direction];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `${dict.booking.title}`,
      `${dict.booking.nameLabel}: ${name || "—"}`,
      `${dict.booking.phoneLabel}: ${phone || "—"}`,
      email ? `${dict.booking.emailLabel}: ${email}` : null,
      `${dict.booking.directionLabel}: ${directionLabel}`,
      message ? `${dict.booking.messageLabel}: ${message}` : null,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-name">{dict.booking.nameLabel}</Label>
          <Input
            id="booking-name"
            required
            autoComplete="name"
            placeholder={dict.booking.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-phone">{dict.booking.phoneLabel}</Label>
          <Input
            id="booking-phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+998 90 123 45 67"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-email">{dict.booking.emailLabel}</Label>
          <Input
            id="booking-email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-direction">{dict.booking.directionLabel}</Label>
          <Select
            value={direction}
            onValueChange={(v) => setDirection(v as typeof direction)}
          >
            <SelectTrigger id="booking-direction" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="inbound">{dict.booking.directionInbound}</SelectItem>
              <SelectItem value="outbound">{dict.booking.directionOutbound}</SelectItem>
              <SelectItem value="undecided">{dict.booking.directionUndecided}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="booking-message">{dict.booking.messageLabel}</Label>
        <Textarea
          id="booking-message"
          rows={4}
          placeholder={dict.booking.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="w-full sm:w-auto">
          {dict.booking.submit}
        </Button>
        <a
          href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
          className="text-sm text-muted-foreground underline-offset-4 hover:underline"
        >
          {dict.booking.orCall} {contact.phones[0]}
        </a>
      </div>
      <p className="text-xs text-muted-foreground">{dict.booking.note}</p>
    </form>
  );
}
