import { cn } from "@/lib/utils";

/** New wordmark: a stamped ticket seal, not the old gradient app-icon logo. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-8", className)}
      aria-hidden
    >
      <circle cx="20" cy="20" r="19" fill="var(--primary)" />
      <circle
        cx="20"
        cy="20"
        r="14.5"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1"
        strokeDasharray="2.4 2.6"
      />
      <text
        x="20"
        y="26"
        textAnchor="middle"
        fontFamily="var(--font-bodoni), Georgia, serif"
        fontSize="17"
        fontWeight="600"
        fill="var(--primary-foreground)"
      >
        ML
      </text>
    </svg>
  );
}
