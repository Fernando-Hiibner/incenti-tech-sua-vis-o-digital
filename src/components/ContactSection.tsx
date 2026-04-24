import { useRef, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle,
  Loader2,
  Mail,
  Send,
  ShieldCheck,
} from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";
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
  const valueProps = content.valueProps;

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
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="home-kicker">{content.eyebrow}</p>
            <h2 className="home-section-title">{content.title}</h2>
            <p className="home-section-copy">{content.description}</p>

            <div className="mt-8 space-y-4">
              {valueProps.map((item) => (
                <div
                  key={item}
                  className="glass-card grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)] items-center gap-3.5 p-4"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <p className="min-w-0 break-words text-[0.95rem] leading-6 text-muted-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="home-shell p-7 md:p-9"
          >
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
                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <label className="home-form-label">
                      {content.fields.name}
                    </label>
                    <input
                      name="nome"
                      type="text"
                      placeholder={content.fields.namePlaceholder}
                      className={inputClass("nome")}
                    />
                    {errors.nome && (
                      <p className="mt-2 text-xs text-destructive">
                        {errors.nome}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="home-form-label">
                      {content.fields.company}
                    </label>
                    <input
                      name="empresa"
                      type="text"
                      placeholder={content.fields.companyPlaceholder}
                      className={inputClass("empresa")}
                    />
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                  <div>
                    <label className="home-form-label">
                      {content.fields.email}
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder={content.fields.emailPlaceholder}
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="mt-2 text-xs text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="home-form-label">
                      {content.fields.phone}
                    </label>
                    <input
                      name="telefone"
                      type="tel"
                      placeholder={content.fields.phonePlaceholder}
                      className={inputClass("telefone")}
                    />
                  </div>
                </div>

                <div>
                  <label className="home-form-label">
                    {content.fields.message}
                  </label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    placeholder={content.fields.messagePlaceholder}
                    className={`${inputClass("mensagem")} resize-none`}
                    onChange={(event) =>
                      setMessageLength(event.target.value.length)
                    }
                  />
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                    {errors.mensagem ? (
                      <p className="text-xs text-destructive">
                        {errors.mensagem}
                      </p>
                    ) : (
                      <span />
                    )}
                    <span
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
          </motion.div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-xl flex-col gap-4 text-sm text-muted-foreground md:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-ga-click="home_click_contato_email"
              data-ga-page="home"
              data-ga-section="contato"
              data-ga-label={CONTACT_EMAIL}
              className="home-contact-link home-shell-soft flex flex-1 items-center justify-center gap-3 px-5 py-4 text-center transition-colors hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="break-all sm:break-normal">{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
