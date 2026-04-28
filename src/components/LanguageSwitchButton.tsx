import type { ButtonHTMLAttributes } from "react";
import { localeSwitchLabel, type Locale } from "@/lib/locale";
import { cn } from "@/lib/utils";

type LanguageSwitchButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  currentLocale: Locale;
};

const LanguageSwitchButton = ({
  currentLocale,
  className,
  ...props
}: LanguageSwitchButtonProps) => {
  const targetLocale: Locale = currentLocale === "pt-BR" ? "en" : "pt-BR";
  const label = localeSwitchLabel[currentLocale];

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/70 px-3 py-2 text-[11px] font-semibold tracking-normal text-foreground transition-colors hover:border-primary/40 hover:text-primary md:px-4",
        className,
      )}
      {...props}
    >
      <span>{label}</span>
      <span
        className={cn(
          "language-flag",
          targetLocale === "pt-BR" ? "language-flag-br" : "language-flag-us",
        )}
        aria-hidden="true"
      />
    </button>
  );
};

export default LanguageSwitchButton;
