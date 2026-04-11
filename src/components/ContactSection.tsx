import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteContent, type Locale } from "@/lib/siteContent";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactSectionProps = {
  locale: Locale;
};

const ContactSection = ({ locale }: ContactSectionProps) => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [messageLength, setMessageLength] = useState(0);
  const lastSubmitRef = useRef(0);
  const maxMessageLength = 3000;
  const content = siteContent[locale].contact;

  const validate = (data: Record<string, string>) => {
    const nextErrors: Record<string, string> = {};
    if (!data.nome?.trim()) nextErrors.nome = content.validation.requiredName;
    if (!data.email?.trim()) nextErrors.email = content.validation.requiredEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = content.validation.invalidEmail;
    if (!data.mensagem?.trim()) nextErrors.mensagem = content.validation.requiredMessage;
    else if (data.mensagem.length > maxMessageLength) nextErrors.mensagem = content.validation.messageTooLong;
    return nextErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
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

    setStatus("loading");
    setErrors({});

    try {
      const API_BASE = import.meta.env.VITE_API_URL || "";
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
        setStatus("success");
        form.reset();
        setErrors({});
        setMessageLength(0);
        return;
      }

      if (response.status === 400) {
        setErrors(result.fields || { form: result.error || content.validation.invalidData });
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
    `w-full bg-secondary/50 border ${
      errors[field] ? "border-destructive" : "border-border"
    } rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all`;

  return (
    <section id="contato" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">{content.eyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">{content.title}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{content.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            {status === "success" ? (
              <div className="text-center py-10">
                <CheckCircle className="text-primary mx-auto mb-4" size={56} />
                <h3 className="text-xl font-heading font-semibold mb-2">{content.successTitle}</h3>
                <p className="text-muted-foreground">{content.successDescription}</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-primary hover:underline text-sm"
                >
                  {content.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{content.fields.name}</label>
                    <input name="nome" type="text" placeholder={content.fields.namePlaceholder} className={inputClass("nome")} />
                    {errors.nome && <p className="text-xs text-destructive mt-1">{errors.nome}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{content.fields.company}</label>
                    <input name="empresa" type="text" placeholder={content.fields.companyPlaceholder} className={inputClass("empresa")} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{content.fields.email}</label>
                    <input name="email" type="email" placeholder={content.fields.emailPlaceholder} className={inputClass("email")} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">{content.fields.phone}</label>
                    <input name="telefone" type="tel" placeholder={content.fields.phonePlaceholder} className={inputClass("telefone")} />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{content.fields.message}</label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    placeholder={content.fields.messagePlaceholder}
                    className={inputClass("mensagem") + " resize-none"}
                    onChange={(e) => setMessageLength(e.target.value.length)}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.mensagem ? <p className="text-xs text-destructive">{errors.mensagem}</p> : <span />}
                    <span className={`text-xs ml-auto ${messageLength > maxMessageLength ? "text-destructive" : "text-muted-foreground"}`}>
                      {messageLength}/{maxMessageLength}
                    </span>
                  </div>
                </div>

                <div
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  aria-hidden="true"
                >
                  <label htmlFor="website">Website</label>
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
                  <div className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    {errors.form || content.genericSubmitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {content.submitLoading}
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      {content.submitIdle}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a href="mailto:fernando@incentitech.com.br" className="transition-colors hover:text-foreground">
                fernando@incentitech.com.br
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              +55 (11) 97154-2519
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
