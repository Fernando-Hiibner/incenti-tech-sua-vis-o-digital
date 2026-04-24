export type Locale = "pt-BR" | "en";

export const localePaths: Record<Locale, string> = {
  "pt-BR": "/pt-br/",
  en: "/en/",
};

export const localeSwitchLabel: Record<Locale, string> = {
  "pt-BR": "EN",
  en: "BR",
};

export const siteContent = {
  "pt-BR": {
    nav: {
      items: [
        { href: "#servicos", label: "Serviços" },
        { href: "#projetos", label: "Projetos" },
        { href: "#tecnologias", label: "Stack" },
        { href: "#contato", label: "Contato" },
      ],
      contactButton: "Fale com um especialista",
      contactButtonCompact: "Especialista",
      languageButtonAriaLabel: "Mudar idioma para inglês",
    },
    hero: {
      badge: "Desenvolvimento de Software sob Medida",
      titleStart: "Transformamos ideias em",
      titleHighlight: "soluções digitais",
      titleEnd: "que impulsionam negócios",
      description:
        "Somos especialistas em criar sistemas web robustos, integrações complexas e softwares personalizados que resolvem problemas reais da sua empresa.",
      primaryCta: "Fale com um especialista",
      secondaryCta: "Conheça nossos serviços",
      proofItems: [
        { value: "sob medida", label: "arquitetura orientada ao negócio" },
        {
          value: "integração",
          label: "marketplaces, APIs, pagamentos e legado",
        },
        {
          value: "continuidade",
          label: "evolução, sustentação e entrega real",
        },
      ],
    },
    pain: {
      eyebrow: "Desafios operacionais",
      title: "Quando o produto cresce, a operação não pode ficar no escuro",
      description:
        "Muitas empresas chegam em um ponto em que o software funciona, mas já não entrega clareza, velocidade ou segurança para evoluir. É nesse momento que problemas técnicos começam a virar custo operacional.",
      items: [
        {
          title: "Baixa visibilidade operacional",
          description:
            "Indicadores espalhados, processos sem rastreio e dificuldade para entender gargalos reais do produto.",
        },
        {
          title: "Débito técnico acumulado",
          description:
            "Código difícil de evoluir, dependências antigas e mudanças simples que passam a exigir esforço desproporcional.",
        },
        {
          title: "Integrações instáveis",
          description:
            "APIs, ERPs, pagamentos e marketplaces falhando em pontos críticos da jornada e gerando retrabalho.",
        },
        {
          title: "Operação dependente de esforço manual",
          description:
            "Times compensando limitações do sistema com planilhas, conferências manuais e processos paralelos.",
        },
        {
          title: "Crescimento travado por legado",
          description:
            "Sistemas importantes para o faturamento que precisam continuar vivos, mas impedem novas entregas.",
        },
        {
          title: "Risco técnico sem dono claro",
          description:
            "Falhas recorrentes, correções urgentes e decisões técnicas tomadas sem uma visão estruturada de continuidade.",
        },
      ],
    },
    services: {
      eyebrow: "Soluções",
      title: "Como resolvemos esses problemas",
      description:
        "Entramos para dar estrutura técnica ao produto, reduzir riscos da operação e criar caminhos reais para evolução contínua.",
      supportItems: [
        "Mais visibilidade para decisão",
        "Menos fricção técnica",
        "Integrações com continuidade",
      ],
      creationHighlight: {
        title: "Criamos do zero, evoluímos o que já existe",
        description:
          "Atuamos desde a concepção de novos produtos digitais até a modernização e sustentação de sistemas críticos. A ideia não é só manter o software vivo, é transformar tecnologia em uma base melhor para crescer.",
      },
      items: [
        {
          title: "Produto sob medida para a operação",
          description:
            "Criamos sistemas web alinhados ao fluxo real do negócio, com telas, regras e automações que reduzem trabalho manual e aumentam a visibilidade da operação.",
        },
        {
          title: "Estabilização e manutenção contínua",
          description:
            "Organizamos correções, atualizações, monitoramento e melhorias para reduzir falhas recorrentes e manter sistemas críticos funcionando com previsibilidade.",
        },
        {
          title: "Integrações confiáveis entre plataformas",
          description:
            "Conectamos pagamentos, marketplaces, ERPs e APIs com tratamento de erros, sincronização consistente e automações que eliminam retrabalho entre áreas.",
        },
        {
          title: "Modernização gradual do legado",
          description:
            "Evoluímos sistemas antigos por etapas, preservando dados e regras críticas enquanto removemos gargalos técnicos que impedem novas entregas.",
        },
        {
          title: "Sustentação técnica com visão de produto",
          description:
            "Assumimos a continuidade de sistemas legados de alto impacto, priorizando riscos, performance e evolução sem interromper a operação que já gera receita.",
        },
      ],
    },
    advantages: {
      eyebrow: "Vantagens",
      title: "Por que escolher a Incenti Tech?",
      description:
        "Combinamos expertise técnica, visão de negócio e compromisso com resultados.",
      items: [
        {
          title: "Soluções Personalizadas",
          description:
            "Cada projeto é único. Desenvolvemos software que se adapta ao seu fluxo de trabalho, não o contrário.",
        },
        {
          title: "Foco em Performance",
          description:
            "Sistemas rápidos, eficientes e escaláveis. Otimizamos cada detalhe para garantir a melhor experiência.",
        },
        {
          title: "Experiência Real de Mercado",
          description:
            "Anos atuando com clientes de diversos segmentos, resolvendo problemas complexos com soluções práticas.",
        },
        {
          title: "Integrações Complexas",
          description:
            "Conectamos seu sistema a gateways de pagamento, marketplaces e APIs com segurança e confiabilidade.",
        },
        {
          title: "Suporte Próximo",
          description:
            "Comunicação direta, ágil e transparente. Estamos ao seu lado em cada etapa do projeto.",
        },
      ],
    },
    projects: {
      eyebrow: "Experiência Comprovada",
      title: "Cases reais de produto e operação",
      description:
        "Alguns projetos em que atuamos criando, evoluindo e sustentando produtos digitais com impacto direto na operação dos clientes.",
      items: [
        {
          title: "Integração com Sistemas de Pagamento",
          description:
            "Implementação completa de Pix, boleto bancário e outros meios de pagamento, garantindo segurança e confiabilidade nas transações.",
        },
        {
          title: "Integração com Marketplaces",
          description:
            "Conexão automatizada com os principais marketplaces do Brasil, sincronizando produtos, pedidos e estoque em tempo real.",
        },
        {
          title: "Integração com Twilio",
          description:
            "Automação de comunicações via SMS, chamadas e verificações utilizando a plataforma Twilio para fluxos empresariais.",
        },
        {
          title: "Integração com API de WhatsApp",
          description:
            "Sistemas conectados ao WhatsApp Business API para atendimento automatizado, notificações e comunicação direta com clientes.",
        },
        {
          title: "Sustentação de Software Legado",
          description:
            "Manutenção e evolução de sistemas legados com faturamento multimilionário, garantindo estabilidade, performance e continuidade do negócio.",
        },
        {
          title: "Desenvolvimento de Aplicações Web",
          description:
            "Criação de diversos sistemas web sob medida para diferentes segmentos, desde portais corporativos até plataformas SaaS completas.",
        },
      ],
    },
    tech: {
      eyebrow: "Tecnologias",
      title: "Stack tecnológica robusta",
      description:
        "Trabalhamos com as tecnologias certas para cada projeto, garantindo performance, segurança e escalabilidade.",
      items: [
        { name: "C#", category: "Backend e APIs" },
        { name: ".NET 10", category: "Backend e APIs" },
        { name: "ASP.NET", category: "Backend e APIs" },
        { name: "PHP", category: "Backend e APIs" },
        { name: "Python", category: "Backend e APIs" },
        { name: "REST APIs", category: "Backend e APIs" },
        { name: "SOAP/WSDL", category: "Backend e APIs" },
        { name: "Blazor", category: "Frontend e UI" },
        { name: "JavaScript", category: "Frontend e UI" },
        { name: "React", category: "Frontend e UI" },
        { name: "Vue", category: "Frontend e UI" },
        { name: "jQuery", category: "Frontend e UI" },
        { name: "ASP.NET Web Forms", category: "Frontend e UI" },
        { name: "SQL e NoSQL", category: "Dados e Persistencia" },
        { name: "Redis", category: "Dados e Persistencia" },
        { name: "Docker", category: "Infra" },
        { name: "AWS", category: "Infra" },
        { name: "Azure", category: "Infra" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos entender sua necessidade e preparar um orçamento",
      description:
        "Preencha o formulário abaixo com o contexto do projeto. Nossa equipe entrará em contato em até 24 horas para entender cenário, prioridades e próximos passos para uma proposta.",
      successTitle: "Informações recebidas!",
      successDescription:
        "Vamos analisar o contexto e retornar com os próximos passos para entendimento e orçamento.",
      sendAnother: "Enviar outra mensagem",
      valueProps: [
        "Resposta inicial em até 24 horas úteis.",
        "Conversa técnica focada em contexto, risco e viabilidade.",
        "Escopo pensado para entrega real, não para discurso vazio.",
      ],
      fields: {
        name: "Nome *",
        namePlaceholder: "Seu nome",
        company: "Empresa",
        companyPlaceholder: "Empresa",
        email: "E-mail *",
        emailPlaceholder: "seu@email.com",
        phone: "Telefone",
        phonePlaceholder: "(00) 00000-0000",
        message: "Mensagem *",
        messagePlaceholder: "Conte-nos sobre seu projeto...",
        honeypotLabel: "Site",
      },
      submitIdle: "Solicite orçamento gratuito",
      submitLoading: "Enviando...",
      genericSubmitError: "Erro ao enviar. Tente novamente.",
      validation: {
        requiredName: "Nome é obrigatório",
        requiredEmail: "E-mail é obrigatório",
        invalidEmail: "E-mail inválido",
        requiredMessage: "Mensagem é obrigatória",
        messageTooLong: "Mensagem não pode ultrapassar 3.000 caracteres",
        honeypot: "Falha ao enviar formulário.",
        rateLimit: "Aguarde alguns segundos antes de enviar novamente.",
        invalidData: "Dados inválidos.",
        tooManyAttempts:
          "Muitas tentativas. Aguarde um pouco e tente novamente.",
        submitError: "Erro ao enviar formulário.",
        connectionError: "Não foi possível conectar ao servidor.",
      },
    },
    footer: {
      description:
        "Software sob medida, integrações complexas e sustentação para operações que precisam de clareza técnica e continuidade.",
      navigationLabel: "Navegação",
      links: [
        { href: "#servicos", label: "Serviços" },
        { href: "#projetos", label: "Projetos" },
        { href: "#contato", label: "Contato" },
      ],
      closingStatement: "Tecnologia com presença, estrutura e continuidade.",
      rights: "Todos os direitos reservados.",
    },
    notFound: {
      eyebrow: "Erro 404",
      message: "Ops! Página não encontrada",
      description:
        "O endereço solicitado não existe ou foi movido. Use o atalho abaixo para continuar navegando.",
      action: "Voltar para a página inicial",
    },
  },
  en: {
    nav: {
      items: [
        { href: "#servicos", label: "Services" },
        { href: "#projetos", label: "Projects" },
        { href: "#tecnologias", label: "Stack" },
        { href: "#contato", label: "Contact" },
      ],
      contactButton: "Talk to a specialist",
      contactButtonCompact: "Specialist",
      languageButtonAriaLabel: "Switch language to Portuguese",
    },
    hero: {
      badge: "Custom Software Development",
      titleStart: "We turn ideas into",
      titleHighlight: "digital solutions",
      titleEnd: "that drive business growth",
      description:
        "We specialize in building robust web systems, complex integrations, and custom software that solves real problems for your company.",
      primaryCta: "Talk to a specialist",
      secondaryCta: "Explore our services",
      proofItems: [
        {
          value: "tailored",
          label: "architecture aligned with your business",
        },
        {
          value: "integration",
          label: "marketplaces, APIs, payments and legacy",
        },
        {
          value: "continuity",
          label: "evolution, support and real delivery",
        },
      ],
    },
    pain: {
      eyebrow: "Operational challenges",
      title: "As the product grows, operations cannot stay in the dark",
      description:
        "Many companies reach a point where the software still works, but no longer provides clarity, speed, or confidence to evolve. That is when technical issues start becoming operational cost.",
      items: [
        {
          title: "Low operational visibility",
          description:
            "Scattered metrics, untracked processes, and limited clarity around the real bottlenecks in the product.",
        },
        {
          title: "Accumulated technical debt",
          description:
            "Code that is hard to evolve, outdated dependencies, and simple changes that start requiring disproportionate effort.",
        },
        {
          title: "Unstable integrations",
          description:
            "APIs, ERPs, payments, and marketplaces failing at critical points in the journey and creating rework.",
        },
        {
          title: "Operations dependent on manual effort",
          description:
            "Teams compensating for system limitations with spreadsheets, manual checks, and parallel processes.",
        },
        {
          title: "Growth blocked by legacy systems",
          description:
            "Revenue-critical systems that must remain active but make new delivery slower and riskier.",
        },
        {
          title: "Technical risk without clear ownership",
          description:
            "Recurring failures, urgent fixes, and technical decisions made without a structured continuity view.",
        },
      ],
    },
    services: {
      eyebrow: "Solutions",
      title: "How we solve these problems",
      description:
        "We bring technical structure to the product, reduce operational risk, and create practical paths for continuous evolution.",
      supportItems: [
        "More visibility for decisions",
        "Less technical friction",
        "Integrations with continuity",
      ],
      creationHighlight: {
        title: "We create from scratch and evolve what already exists",
        description:
          "We work from the conception of new digital products to the modernization and support of critical systems. The point is not just keeping software alive, but turning technology into a stronger base for growth.",
      },
      items: [
        {
          title: "Product built around the operation",
          description:
            "We build web systems aligned with the real business flow, with screens, rules, and automations that reduce manual work and improve operational visibility.",
        },
        {
          title: "Stabilization and ongoing maintenance",
          description:
            "We organize fixes, updates, monitoring, and improvements to reduce recurring failures and keep critical systems running predictably.",
        },
        {
          title: "Reliable platform integrations",
          description:
            "We connect payments, marketplaces, ERPs, and APIs with error handling, consistent synchronization, and automations that eliminate cross-team rework.",
        },
        {
          title: "Gradual legacy modernization",
          description:
            "We evolve older systems in stages, preserving critical data and business rules while removing technical bottlenecks that block new delivery.",
        },
        {
          title: "Technical support with product perspective",
          description:
            "We take care of high-impact legacy systems by prioritizing risk, performance, and evolution without interrupting the operation that already generates revenue.",
        },
      ],
    },
    advantages: {
      eyebrow: "Advantages",
      title: "Why choose Incenti Tech?",
      description:
        "We combine technical expertise, business vision, and a strong commitment to results.",
      items: [
        {
          title: "Tailor made solutions",
          description:
            "Every project is unique. We develop software that adapts to your workflow, not the other way around.",
        },
        {
          title: "Performance Focus",
          description:
            "Fast, efficient, and scalable systems. We optimize every detail to deliver the best possible experience.",
        },
        {
          title: "Real Market Experience",
          description:
            "Years of hands-on work with clients across industries, solving complex problems with practical solutions.",
        },
        {
          title: "Complex Integrations",
          description:
            "We connect your system to payment gateways, marketplaces, and APIs with security and reliability.",
        },
        {
          title: "Close Support",
          description:
            "Direct, agile, and transparent communication. We stay by your side through every stage of the project.",
        },
      ],
    },
    projects: {
      eyebrow: "Proven Experience",
      title: "Real product and operations cases",
      description:
        "Selected projects where we created, evolved, and supported digital products with direct impact on client operations.",
      items: [
        {
          title: "Payment System Integration",
          description:
            "Full implementation of Pix, bank slips, and other payment methods, ensuring security and reliability in every transaction.",
        },
        {
          title: "Marketplace Integration",
          description:
            "Automated connections with major Brazilian marketplaces, syncing products, orders, and inventory in real time.",
        },
        {
          title: "Twilio Integration",
          description:
            "Communication automation through SMS, voice, and verification flows using the Twilio platform for business operations.",
        },
        {
          title: "WhatsApp API Integration",
          description:
            "Systems connected to the WhatsApp Business API for automated support, notifications, and direct communication with customers.",
        },
        {
          title: "Legacy Software Support",
          description:
            "Maintenance and evolution of legacy systems with multimillion-revenue operations, ensuring stability, performance, and business continuity.",
        },
        {
          title: "Web Application Development",
          description:
            "Development of custom web systems for different industries, from corporate portals to complete SaaS platforms.",
        },
      ],
    },
    tech: {
      eyebrow: "Technologies",
      title: "A robust technology stack",
      description:
        "We work with the right technologies for each project, ensuring performance, security, and scalability.",
      items: [
        { name: "C#", category: "Backend and APIs" },
        { name: ".NET 10", category: "Backend and APIs" },
        { name: "ASP.NET", category: "Backend and APIs" },
        { name: "PHP", category: "Backend and APIs" },
        { name: "Python", category: "Backend and APIs" },
        { name: "REST APIs", category: "Backend and APIs" },
        { name: "SOAP/WSDL", category: "Backend and APIs" },
        { name: "Blazor", category: "Frontend and UI" },
        { name: "JavaScript", category: "Frontend and UI" },
        { name: "React", category: "Frontend and UI" },
        { name: "Vue", category: "Frontend and UI" },
        { name: "jQuery", category: "Frontend and UI" },
        { name: "ASP.NET Web Forms", category: "Frontend and UI" },
        { name: "SQL and NoSQL", category: "Data and Persistence" },
        { name: "Redis", category: "Data and Persistence" },
        { name: "Docker", category: "Infra" },
        { name: "AWS", category: "Infra" },
        { name: "Azure", category: "Infra" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's understand your need and prepare an estimate",
      description:
        "Fill out the form below with your project context. Our team will get in touch within 24 hours to understand the scenario, priorities, and next steps for a proposal.",
      successTitle: "Information received!",
      successDescription:
        "We will review the context and get back with the next steps for discovery and estimate.",
      sendAnother: "Send another message",
      valueProps: [
        "Initial response within 24 business hours.",
        "Technical conversation focused on context, risk, and feasibility.",
        "Scope shaped for real delivery, not empty positioning.",
      ],
      fields: {
        name: "Name *",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Company",
        email: "Email *",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "+1 (555) 123-4567",
        message: "Message *",
        messagePlaceholder: "Tell us about your project...",
        honeypotLabel: "Website",
      },
      submitIdle: "Request a free estimate",
      submitLoading: "Sending...",
      genericSubmitError: "Unable to send. Please try again.",
      validation: {
        requiredName: "Name is required",
        requiredEmail: "Email is required",
        invalidEmail: "Invalid email",
        requiredMessage: "Message is required",
        messageTooLong: "Message cannot exceed 3,000 characters",
        honeypot: "Unable to submit the form.",
        rateLimit: "Please wait a few seconds before submitting again.",
        invalidData: "Invalid data.",
        tooManyAttempts:
          "Too many attempts. Please wait a moment and try again.",
        submitError: "Error sending the form.",
        connectionError: "Could not connect to the server.",
      },
    },
    footer: {
      description:
        "Custom software, complex integrations, and support for operations that need technical clarity and continuity.",
      navigationLabel: "Navigation",
      links: [
        { href: "#servicos", label: "Services" },
        { href: "#projetos", label: "Projects" },
        { href: "#contato", label: "Contact" },
      ],
      closingStatement: "Technology with presence, structure, and continuity.",
      rights: "All rights reserved.",
    },
    notFound: {
      eyebrow: "Error 404",
      message: "Oops! Page not found",
      description:
        "The requested address does not exist or has moved. Use the shortcut below to keep browsing.",
      action: "Return to the homepage",
    },
  },
} as const;
