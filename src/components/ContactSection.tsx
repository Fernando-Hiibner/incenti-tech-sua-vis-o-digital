import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";

interface ContactFormData {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  mensagem: string;
}

// Função preparada para futura integração com backend SMTP
async function sendContactForm(data: ContactFormData): Promise<void> {
  // TODO: Integrar com endpoint real de envio de e-mail via SMTP Google
  // Exemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
  console.log("Dados do formulário prontos para envio:", data);
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nome: "", empresa: "", email: "", telefone: "", mensagem: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await sendContactForm(formData);
      setSent(true);
      setFormData({ nome: "", empresa: "", email: "", telefone: "", mensagem: "" });
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all";

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
            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Retornaremos o mais breve possível.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-primary hover:underline text-sm"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    required
                    type="text"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    required
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <textarea
                  required
                  rows={5}
                  placeholder="Conte-nos sobre seu projeto..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className={inputClass + " resize-none"}
                />
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {sending ? "Enviando..." : (
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
