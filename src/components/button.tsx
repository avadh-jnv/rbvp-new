import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

const button = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-medium transition-[transform,background-color,box-shadow,color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-navy text-accent-fg hover:bg-ink",
        ghost: "bg-transparent text-ink hover:bg-paper-deep",
        outline:
          "bg-surface text-ink shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
      },
      size: {
        md: "h-11 px-5 rounded-md text-sm",
        sm: "h-9 px-3 rounded-sm text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>;

export function Button({ className, variant, size, ...props }: Props) {
  return <button className={cn(button({ variant, size }), className)} {...props} />;
}
