import { motion } from "framer-motion";
import { CreditCard, ShoppingBag, MessageCircle, Phone, Server, Globe } from "lucide-react";

const projects = [
  {
    icon: CreditCard,
    title: "Integração com Sistemas de Pagamento",
    description: "Implementação completa de Pix, boleto bancário e outros meios de pagamento, garantindo segurança e confiabilidade nas transações.",
  },
  {
    icon: ShoppingBag,
    title: "Integração com Marketplaces",
    description: "Conexão automatizada com os principais marketplaces do Brasil, sincronizando produtos, pedidos e estoque em tempo real.",
  },
  {
    icon: Phone,
    title: "Integração com Twilio",
    description: "Automação de comunicações via SMS, chamadas e verificações utilizando a plataforma Twilio para fluxos empresariais.",
  },
  {
    icon: MessageCircle,
    title: "Integração com API de WhatsApp",
    description: "Sistemas conectados ao WhatsApp Business API para atendimento automatizado, notificações e comunicação direta com clientes.",
  },
  {
    icon: Server,
    title: "Sustentação de Software Legado",
    description: "Manutenção e evolução de sistemas legados com faturamento multimilionário, garantindo estabilidade, performance e continuidade do negócio.",
  },
  {
    icon: Globe,
    title: "Desenvolvimento de Aplicações Web",
    description: "Criação de diversos sistemas web sob medida para diferentes segmentos, desde portais corporativos até plataformas SaaS completas.",
  },
];

const ProjectsSection = () => (
  <section id="projetos" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Experiência Comprovada</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
          Projetos que já realizamos
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Ao longo dos anos, entregamos soluções complexas para empresas de diversos segmentos. Confira algumas das nossas áreas de atuação.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <item.icon className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
