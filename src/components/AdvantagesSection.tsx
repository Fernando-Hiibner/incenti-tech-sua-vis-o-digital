import { motion } from "framer-motion";
import { Target, Zap, Users, ShieldCheck, Headphones } from "lucide-react";

const advantages = [
  { icon: Target, title: "Soluções Personalizadas", description: "Cada projeto é único. Desenvolvemos software que se adapta ao seu fluxo de trabalho, não o contrário." },
  { icon: Zap, title: "Foco em Performance", description: "Sistemas rápidos, eficientes e escaláveis. Otimizamos cada detalhe para garantir a melhor experiência." },
  { icon: Users, title: "Experiência Real de Mercado", description: "Anos atuando com clientes de diversos segmentos, resolvendo problemas complexos com soluções práticas." },
  { icon: ShieldCheck, title: "Integrações Complexas", description: "Conectamos seu sistema a gateways de pagamento, marketplaces e APIs com segurança e confiabilidade." },
  { icon: Headphones, title: "Suporte Próximo", description: "Comunicação direta, ágil e transparente. Estamos ao seu lado em cada etapa do projeto." },
];

const AdvantagesSection = () => (
  <section id="vantagens" className="section-padding bg-secondary/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Vantagens</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
          Por que escolher a Incenti Tech?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Combinamos expertise técnica, visão de negócio e compromisso com resultados.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto [&>*:nth-last-child(-n+2):nth-child(3n+1)]:lg:col-start-1 [&>*:nth-last-child(2):nth-child(3n+1)]:lg:col-start-2 justify-items-center">
        {advantages.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
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

export default AdvantagesSection;
