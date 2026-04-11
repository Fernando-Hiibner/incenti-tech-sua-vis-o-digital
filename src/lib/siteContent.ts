export type Locale = "pt-BR" | "en";

export const localePaths: Record<Locale, string> = {
  "pt-BR": "/pt-br/",
  en: "/en/",
};

export const localeSwitchLabel: Record<Locale, string> = {
  "pt-BR": "EN",
  en: "PT-BR",
};

export const siteContent = {
  "pt-BR": {
    nav: {
      contactButton: "Fale conosco",
      languageButtonAriaLabel: "Mudar idioma para ingles",
    },
    hero: {
      badge: "Desenvolvimento de Software sob Medida",
      titleStart: "Transformamos ideias em",
      titleHighlight: "soluções digitais",
      titleEnd: "que impulsionam negócios",
      description:
        "Somos especialistas em criar sistemas web robustos, integrações complexas e softwares personalizados que resolvem problemas reais da sua empresa.",
      primaryCta: "Fale conosco",
      secondaryCta: "Conheça nossos serviços",
    },
    services: {
      eyebrow: "Serviços",
      title: "O que fazemos de melhor",
      description:
        "Soluções completas de software para empresas que precisam de tecnologia confiável e resultados concretos.",
      items: [
        {
          title: "Desenvolvimento Web sob Medida",
          description:
            "Criamos sistemas web completos, pensados para as necessidades específicas do seu negócio. Do planejamento à entrega, cada linha de código é feita para resolver o seu problema.",
        },
        {
          title: "Manutenção de Sistemas",
          description:
            "Mantemos seus sistemas funcionando com estabilidade, segurança e performance. Atualizações, correções e melhorias contínuas para garantir operação sem interrupções.",
        },
        {
          title: "Integrações entre Plataformas",
          description:
            "Conectamos seus sistemas a meios de pagamento, marketplaces, ERPs e APIs de terceiros. Integrações robustas que automatizam processos e eliminam retrabalho.",
        },
        {
          title: "Modernização de Software Legado",
          description:
            "Transformamos sistemas antigos em soluções modernas, sem perder dados ou funcionalidades. Migração segura para tecnologias atuais com ganho real de performance.",
        },
        {
          title: "Sustentação de Software Legado",
          description:
            "Mantemos sistemas legados críticos em pleno funcionamento. Monitoramento, correções e evoluções contínuas para garantir a continuidade de operações de alto faturamento.",
        },
        {
          title: "Revisão e Manutenção de Software Gerado por IA",
          description:
            "Revisamos, otimizamos e damos manutenção a sistemas desenvolvidos com auxílio de inteligência artificial. Garantimos qualidade de código, segurança e escalabilidade para projetos que nasceram de prototipagem assistida por IA.",
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
      title: "Projetos que já realizamos",
      description:
        "Ao longo dos anos, entregamos soluções complexas para empresas de diversos segmentos. Confira algumas das nossas áreas de atuação.",
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
        { name: "ASP.NET Core Web API", category: "Backend e APIs" },
        { name: "PHP", category: "Backend e APIs" },
        { name: "Python", category: "Backend e APIs" },
        { name: "OWIN", category: "Backend e APIs" },
        { name: "JWT", category: "Backend e APIs" },
        { name: "REST APIs", category: "Backend e APIs" },
        { name: "SOAP/WSDL", category: "Backend e APIs" },
        { name: "Blazor Server", category: "Frontend e UI" },
        { name: "MudBlazor", category: "Frontend e UI" },
        { name: "JavaScript", category: "Frontend e UI" },
        { name: "TypeScript", category: "Frontend e UI" },
        { name: "React", category: "Frontend e UI" },
        { name: "Vue", category: "Frontend e UI" },
        { name: "jQuery", category: "Frontend e UI" },
        { name: "Bootstrap", category: "Frontend e UI" },
        { name: "ASP.NET Web Forms", category: "Frontend e UI" },
        { name: "Telerik UI", category: "Frontend e UI" },
        { name: "SQL Server", category: "Dados e Persistencia" },
        { name: "Entity Framework", category: "Dados e Persistencia" },
        { name: "MongoDB", category: "Dados e Persistencia" },
        { name: "Redis", category: "Dados e Persistencia" },
        { name: "Qdrant", category: "Dados e Persistencia" },
        { name: "Hangfire", category: "Infra e Jobs" },
        { name: "Docker", category: "Infra e Jobs" },
        { name: "AWS Lambda", category: "Infra e Jobs" },
        { name: "Azure Pipelines", category: "Infra e Jobs" },
        { name: "OpenAI", category: "IA, Busca e Observabilidade" },
        { name: "Swagger", category: "IA, Busca e Observabilidade" },
        { name: "Elasticsearch", category: "IA, Busca e Observabilidade" },
        { name: "Logstash", category: "IA, Busca e Observabilidade" },
        { name: "Kibana", category: "IA, Busca e Observabilidade" },
        { name: "AutoMapper", category: "Qualidade e Ferramentas" },
        { name: "xUnit", category: "Qualidade e Ferramentas" },
        { name: "Moq", category: "Qualidade e Ferramentas" },
        { name: "EPPlus", category: "Qualidade e Ferramentas" },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos conversar sobre o seu projeto",
      description:
        "Preencha o formulário abaixo e nossa equipe entrará em contato para entender suas necessidades.",
      successTitle: "Mensagem enviada!",
      successDescription: "Retornaremos o mais breve possível.",
      sendAnother: "Enviar outra mensagem",
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
      },
      submitIdle: "Enviar mensagem",
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
      rights: "Todos os direitos reservados.",
    },
    notFound: {
      message: "Ops! Página não encontrada",
      action: "Voltar para a página inicial",
    },
  },
  en: {
    nav: {
      contactButton: "Contact us",
      languageButtonAriaLabel: "Switch language to Portuguese",
    },
    hero: {
      badge: "Custom Software Development",
      titleStart: "We turn ideas into",
      titleHighlight: "digital solutions",
      titleEnd: "that drive business growth",
      description:
        "We specialize in building robust web systems, complex integrations, and custom software that solves real problems for your company.",
      primaryCta: "Contact us",
      secondaryCta: "Explore our services",
    },
    services: {
      eyebrow: "Services",
      title: "What we do best",
      description:
        "Complete software solutions for companies that need reliable technology and measurable results.",
      items: [
        {
          title: "Custom Web Development",
          description:
            "We build complete web systems designed around your business needs. From planning to delivery, every line of code is made to solve your specific problem.",
        },
        {
          title: "System Maintenance",
          description:
            "We keep your systems running with stability, security, and performance. Updates, fixes, and continuous improvements ensure uninterrupted operation.",
        },
        {
          title: "Platform Integrations",
          description:
            "We connect your systems to payment providers, marketplaces, ERPs, and third-party APIs. Solid integrations that automate processes and eliminate rework.",
        },
        {
          title: "Legacy Software Modernization",
          description:
            "We transform outdated systems into modern solutions without losing data or functionality. Safe migrations to current technologies with real performance gains.",
        },
        {
          title: "Legacy Software Support",
          description:
            "We keep mission-critical legacy systems fully operational. Monitoring, fixes, and continuous improvements protect revenue-generating operations.",
        },
        {
          title: "AI-Generated Software Review & Maintenance",
          description:
            "We review, optimize, and maintain systems built with AI-assisted development tools. We ensure code quality, security, and scalability for projects that started as AI-generated prototypes.",
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
      title: "Projects we have delivered",
      description:
        "Over the years, we have delivered complex solutions for companies across different industries. Here are some of our areas of expertise.",
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
        { name: "ASP.NET Core Web API", category: "Backend and APIs" },
        { name: "PHP", category: "Backend and APIs" },
        { name: "Python", category: "Backend and APIs" },
        { name: "OWIN", category: "Backend and APIs" },
        { name: "JWT", category: "Backend and APIs" },
        { name: "REST APIs", category: "Backend and APIs" },
        { name: "SOAP/WSDL", category: "Backend and APIs" },
        { name: "Blazor Server", category: "Frontend and UI" },
        { name: "MudBlazor", category: "Frontend and UI" },
        { name: "JavaScript", category: "Frontend and UI" },
        { name: "TypeScript", category: "Frontend and UI" },
        { name: "React", category: "Frontend and UI" },
        { name: "Vue", category: "Frontend and UI" },
        { name: "jQuery", category: "Frontend and UI" },
        { name: "Bootstrap", category: "Frontend and UI" },
        { name: "ASP.NET Web Forms", category: "Frontend and UI" },
        { name: "Telerik UI", category: "Frontend and UI" },
        { name: "SQL Server", category: "Data and Persistence" },
        { name: "Entity Framework", category: "Data and Persistence" },
        { name: "MongoDB", category: "Data and Persistence" },
        { name: "Redis", category: "Data and Persistence" },
        { name: "Qdrant", category: "Data and Persistence" },
        { name: "Hangfire", category: "Infra and Jobs" },
        { name: "Docker", category: "Infra and Jobs" },
        { name: "AWS Lambda", category: "Infra and Jobs" },
        { name: "Azure Pipelines", category: "Infra and Jobs" },
        { name: "OpenAI", category: "AI, Search and Observability" },
        { name: "Swagger", category: "AI, Search and Observability" },
        { name: "Elasticsearch", category: "AI, Search and Observability" },
        { name: "Logstash", category: "AI, Search and Observability" },
        { name: "Kibana", category: "AI, Search and Observability" },
        { name: "AutoMapper", category: "Quality and Tooling" },
        { name: "xUnit", category: "Quality and Tooling" },
        { name: "Moq", category: "Quality and Tooling" },
        { name: "EPPlus", category: "Quality and Tooling" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      description:
        "Fill out the form below and our team will get in touch to understand your needs.",
      successTitle: "Message sent!",
      successDescription: "We will get back to you as soon as possible.",
      sendAnother: "Send another message",
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
      },
      submitIdle: "Send message",
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
      rights: "All rights reserved.",
    },
    notFound: {
      message: "Oops! Page not found",
      action: "Return to the homepage",
    },
  },
} as const;
