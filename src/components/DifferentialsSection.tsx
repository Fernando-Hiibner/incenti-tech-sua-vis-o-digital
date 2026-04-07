import { motion } from "framer-motion";

const differentials = [
  { number: "10+", label: "Anos de experiência", description: "Atuação consolidada no mercado de desenvolvimento de software." },
  { number: "50+", label: "Projetos entregues", description: "Sistemas web, integrações e soluções personalizadas para diferentes segmentos." },
  { number: "7+", label: "Tecnologias dominadas", description: "Stack diversificada para escolher a melhor ferramenta para cada problema." },
  { number: "100%", label: "Compromisso com prazos", description: "Entregas confiáveis e comunicação transparente do início ao fim." },
];

const DifferentialsSection = () => (
  <section id="diferenciais" className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
          O que nos torna diferentes
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Não somos apenas desenvolvedores. Somos parceiros estratégicos que entendem de tecnologia e de negócio.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {differentials.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center hover:border-primary/30 transition-all"
          >
            <div className="text-4xl font-heading font-bold text-primary mb-2">{item.number}</div>
            <h3 className="font-heading font-semibold mb-2">{item.label}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
