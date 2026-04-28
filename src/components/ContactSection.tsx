import { useRef, useState, type FormEvent } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Loader2,
  Send,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  trackAnalyticsEvent,
  trackGoogleAdsConversion,
} from "@/lib/analytics";
import { siteContent, type Locale } from "@/lib/siteContent";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactSectionProps = {
  locale: Locale;
};

const ContactSection = ({ locale }: ContactSectionProps) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [messageLength, setMessageLength] = useState(0);
  const hasTrackedFormStartRef = useRef(false);
  const lastSubmitRef = useRef(0);
  const maxMessageLength = 3000;
  const content = siteContent[locale].contact;

  const trackFormStart = () => {
    if (hasTrackedFormStartRef.current) {
      return;
    }

    hasTrackedFormStartRef.current = true;
    trackAnalyticsEvent("home_form_inicio_preenchimento", {
      page: "home",
      section: "contato",
      label: "Formulario Home",
    });
  };

  const validate = (data: Record<string, string>) => {
    const nextErrors: Record<string, string> = {};
    if (!data.nome?.trim()) nextErrors.nome = content.validation.requiredName;
    if (!data.email?.trim())
      nextErrors.email = content.validation.requiredEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      nextErrors.email = content.validation.invalidEmail;
    if (!data.mensagem?.trim())
      nextErrors.mensagem = content.validation.requiredMessage;
    else if (data.mensagem.length > maxMessageLength)
      nextErrors.mensagem = content.validation.messageTooLong;
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => (data[key] = value.toString()));

    if (data.website?.trim()) {
      setErrors({ form: content.validation.honeypot });
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      setErrors({ form: content.validation.rateLimit });
      return;
    }
    lastSubmitRef.current = now;
    trackAnalyticsEvent("home_form_fim_preenchimento", {
      page: "home",
      section: "contato",
      label: "Formulario Home",
    });

    setStatus("loading");
    setErrors({});

    try {
      const API_BASE = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.nome || "",
          email: data.email || "",
          phone: data.telefone || "",
          company: data.empresa || "",
          serviceType: "Incenti Tech",
          message: data.mensagem || "",
          website: data.website || "",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        trackGoogleAdsConversion({
          value: 1,
          currency: "BRL",
          page: "home",
          section: "contato",
          label: "Formulario Home",
        });
        setStatus("success");
        form.reset();
        setErrors({});
        setMessageLength(0);
        return;
      }

      if (response.status === 400) {
        setErrors(
          result.fields || {
            form: result.error || content.validation.invalidData,
          },
        );
        setStatus("idle");
        return;
      }

      if (response.status === 429) {
        setErrors({ form: content.validation.tooManyAttempts });
        setStatus("idle");
        return;
      }

      setErrors({ form: result.error || content.validation.submitError });
      setStatus("error");
    } catch (error) {
      console.error("Error sending form:", error);
      setErrors({ form: content.validation.connectionError });
      setStatus("error");
    }
  };

  const inputClass = (field: string) =>
    `home-input w-full px-4 py-3.5 text-base ${errors[field] ? "border-destructive" : ""}`;

  return (
    <section id="contato" className="section-padding relative overflow-hidden">
      <div className="home-grid absolute opacity-70" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-4xl">
          <Reveal className="text-center">
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="home-section-title mx-auto max-w-3xl">
              {content.title}
            </h2>
            <p className="home-section-copy mx-auto max-w-2xl">
              {content.description}
            </p>
          </Reveal>

          <Reveal className="home-shell mt-10 p-7 md:p-9" delay={80}>
            {status === "success" ? (
              <div className="py-10 text-center">
                <CheckCircle className="mx-auto mb-4 h-14 w-14 text-primary" />
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  {content.successTitle}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {content.successDescription}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  data-ga-click="home_click_form_enviar_novamente"
                  data-ga-page="home"
                  data-ga-section="contato"
                  data-ga-label={content.sendAnother}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {content.sendAnother}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                onFocusCapture={trackFormStart}
                className="relative space-y-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="home-form-label">
                      {content.fields.name}
                    </label>
                    <input
                      id="contact-name"
                      name="nome"
                      type="text"
                      autoComplete="name"
                      placeholder={content.fields.namePlaceholder}
                      className={inputClass("nome")}
                      required
                      aria-invalid={Boolean(errors.nome)}
                      aria-describedby={errors.nome ? "contact-name-error" : undefined}
                    />
                    {errors.nome && (
                      <p id="contact-name-error" className="mt-2 text-xs text-destructive">
                        {errors.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="home-form-label">
                      {content.fields.company}
                    </label>
                    <input
                      id="contact-company"
                      name="empresa"
                      type="text"
                      autoComplete="organization"
                      placeholder={content.fields.companyPlaceholder}
                      className={inputClass("empresa")}
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="contact-email" className="home-form-label">
                      {content.fields.email}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder={content.fields.emailPlaceholder}
                      className={inputClass("email")}
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-2 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="home-form-label">
                      {content.fields.phone}
                    </label>
                    <input
                      id="contact-phone"
                      name="telefone"
                      type="tel"
                      autoComplete="tel"
                      placeholder={content.fields.phonePlaceholder}
                      className={inputClass("telefone")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="home-form-label">
                    {content.fields.message}
                  </label>
                  <textarea
                    id="contact-message"
                    name="mensagem"
                    rows={5}
                    autoComplete="off"
                    placeholder={content.fields.messagePlaceholder}
                    className={`${inputClass("mensagem")} resize-none`}
                    required
                    maxLength={maxMessageLength}
                    aria-invalid={Boolean(errors.mensagem)}
                    aria-describedby={
                      errors.mensagem
                        ? "contact-message-error contact-message-count"
                        : "contact-message-count"
                    }
                    onChange={(event) =>
                      setMessageLength(event.target.value.length)
                    }
                  />
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    {errors.mensagem ? (
                      <p
                        id="contact-message-error"
                        className="text-xs text-destructive"
                      >
                        {errors.mensagem}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span
                      id="contact-message-count"
                      className={`text-xs ${messageLength > maxMessageLength ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {messageLength}/{maxMessageLength}
                    </span>
                  </div>
                </div>

                <div
                  className="pointer-events-none absolute -left-[9999px] opacity-0"
                  aria-hidden="true"
                >
                  <label htmlFor="website">
                    {content.fields.honeypotLabel}
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    defaultValue=""
                  />
                </div>

                {(errors.form || status === "error") && (
                  <div className="flex items-start gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    {errors.form || content.genericSubmitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-ga-click="home_click_form_enviar"
                  data-ga-page="home"
                  data-ga-section="contato"
                  data-ga-label={content.submitIdle}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground shadow-[0_24px_48px_-30px_rgba(15,23,42,0.68)] transition-all hover:-translate-y-0.5 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {content.submitLoading}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {content.submitIdle}
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
