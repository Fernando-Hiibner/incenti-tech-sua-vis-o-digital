import WhatsAppIcon from "@/components/WhatsAppIcon";
import { CONTACT_PHONE_DISPLAY, CONTACT_WHATSAPP_URL } from "@/lib/contact";
import type { Locale } from "@/lib/locale";

type FloatingWhatsAppButtonProps = {
  locale: Locale;
};

const labels: Record<Locale, string> = {
  "pt-BR": "Fale com um especialista pelo WhatsApp",
  en: "Talk to a specialist on WhatsApp",
};

const FloatingWhatsAppButton = ({ locale }: FloatingWhatsAppButtonProps) => {
  const label = labels[locale];

  return (
    <a
      href={CONTACT_WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      data-ga-click="home_click_whatsapp_floating"
      data-ga-page="home"
      data-ga-section="floating_contact"
      data-ga-label={CONTACT_PHONE_DISPLAY}
      aria-label={`${label}: ${CONTACT_PHONE_DISPLAY}`}
      title={label}
      className="whatsapp-floating-motion fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_42px_-22px_rgba(15,23,42,0.7)] ring-1 ring-black/5 transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 md:bottom-7 md:right-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
};

export default FloatingWhatsAppButton;
