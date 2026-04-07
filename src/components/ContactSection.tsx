import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactSection = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [mensagemLen, setMensagemLen] = useState(0);
  const lastSubmitRef = useRef(0);
  const MAX_MENSAGEM = 3000;

  const validate = (data: Record<string, string>) => {
    const errs: Record<string, string> = {};
    if (!data.nome?.trim()) errs.nome = "Nome é obrigatório";
    if (!data.email?.trim()) errs.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "E-mail inválido";
    if (!data.mensagem?.trim()) errs.mensagem = "Mensagem é obrigatória";
    else if (data.mensagem.length > 3000) errs.mensagem = "Mensagem não pode ultrapassar 3.000 caracteres";
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((v, k) => (data[k] = v.toString()));

    // Honeypot anti-bot
    if (data.website?.trim()) {
      setErrors({ form: "Falha ao enviar formulário." });
      return;
    }

    const errs = validate(data);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Rate limit - 10s entre envios
    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      setErrors({ form: "Aguarde alguns segundos antes de enviar novamente." });
      return;
    }
    lastSubmitRef.current = now;

    setStatus("loading");
    setErrors({});

    try {
      const response = await fetch("http://127.0.0.1:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.nome || "",
          email: data.email || "",
          phone: data.telefone || "",
          company: data.empresa || "",
          serviceType: "",
          message: data.mensagem || "",
          website: data.website || "",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
        form.reset();
        setErrors({});
        return;
      }

      // 400 - erro de validação
      if (response.status === 400) {
        setErrors(result.fields || { form: result.error || "Dados inválidos." });
        setStatus("idle");
        return;
      }

      // 429 - rate limit do backend
      if (response.status === 429) {
        setErrors({ form: "Muitas tentativas. Aguarde um pouco e tente novamente." });
        setStatus("idle");
        return;
      }

      // outros erros
      setErrors({ form: result.error || "Erro ao enviar formulário." });
      setStatus("error");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setErrors({ form: "Não foi possível conectar ao servidor." });
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
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Contato</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Vamos conversar sobre o seu projeto
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas necessidades.
          </p>
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
                <h3 className="text-xl font-heading font-semibold mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Retornaremos o mais breve possível.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-primary hover:underline text-sm"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Nome *</label>
                    <input name="nome" type="text" placeholder="Seu nome" className={inputClass("nome")} />
                    {errors.nome && <p className="text-xs text-destructive mt-1">{errors.nome}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Empresa</label>
                    <input name="empresa" type="text" placeholder="Empresa" className={inputClass("empresa")} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">E-mail *</label>
                    <input name="email" type="email" placeholder="seu@email.com" className={inputClass("email")} />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Telefone</label>
                    <input name="telefone" type="tel" placeholder="(00) 00000-0000" className={inputClass("telefone")} />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Mensagem *</label>
                  <textarea
                    name="mensagem"
                    rows={5}
                    placeholder="Conte-nos sobre seu projeto..."
                    className={inputClass("mensagem") + " resize-none"}
                    onChange={(e) => setMensagemLen(e.target.value.length)}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.mensagem
                      ? <p className="text-xs text-destructive">{errors.mensagem}</p>
                      : <span />
                    }
                    <span className={`text-xs ml-auto ${mensagemLen > MAX_MENSAGEM ? "text-destructive" : "text-muted-foreground"}`}>
                      {mensagemLen}/{MAX_MENSAGEM}
                    </span>
                  </div>
                </div>

                {/* honeypot anti-bot */}
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
                    {errors.form || "Erro ao enviar. Tente novamente."}
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
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Enviar mensagem
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              fernando@incentitech.com.br
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
