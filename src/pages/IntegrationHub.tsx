import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Database,
  DollarSign,
  Eye,
  FolderTree,
  Gauge,
  Gift,
  GitBranch,
  Globe,
  Heart,
  History,
  Layers,
  Link2,
  Loader2,
  Lock,
  Mail,
  Menu,
  RefreshCw,
  Search,
  Send,
  Server,
  Settings2,
  Shield,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import integrationHubLogo from "@/assets/logo-incenti-tech.svg";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { Button } from "@/components/ui/button";
import {
  registerAnalyticsClickTracking,
  registerSectionViewTracking,
  trackAnalyticsEvent,
} from "@/lib/analytics";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact";
import SeoHead from "@/components/SeoHead";
import { getIntegrationHubPath } from "@/lib/integrationHubRoutes";
import { getIntegrationHubStructuredData, integrationHubSeo } from "@/lib/seo";
import type { Locale } from "@/lib/siteContent";
import logoMagalu from "@/assets/integration-hub/logo-magalu.png";
import logoCasasBahia from "@/assets/integration-hub/logo-casas-bahia-2020.svg";
import logoExtra from "@/assets/integration-hub/logo-extra.png";
import logoPontoFrio from "@/assets/integration-hub/logo-ponto-frio.png";
import "./integration-hub.css";

type IntegrationHubPageProps = {
  locale: Locale;
};

const content = {
  "pt-BR": {
    seo: {
      title: "Integration Hub | IncentiTech",
      description:
        "Conecte campanhas de incentivo, marketplaces e operações B2B aos maiores varejistas do Brasil com uma única integração, governança e alta disponibilidade.",
      keywords:
        "integration hub, integração com marketplaces, campanhas de incentivo, varejistas, incentitech, catálogo de produtos, integração enterprise",
      ogLocale: "pt_BR",
    },
    langSwitchLabel: "EN",
    langSwitchAria: "Mudar idioma para inglês",
    nav: {
      features: "Recursos",
      differentiators: "Diferenciais",
      security: "Segurança",
      contact: "Contato",
      cta: "Solicitar Demo",
    },
    hero: {
      titleLead: "Premie com produtos dos",
      titleHighlight: "maiores varejistas",
      titleTail: "do Brasil",
      description:
        "Conecte suas campanhas de incentivo ou marketplace aos catálogos de grandes varejistas. Uma única integração, milhares de produtos disponíveis.",
      primaryCta: "Fale com um Especialista",
      secondaryCta: "Como Funciona",
      stats: [
        { value: "4", label: "Grandes Varejistas" },
        { value: "1M+", label: "Produtos Disponíveis" },
        { value: "1", label: "Única Integração" },
        { value: "24/7", label: "Disponibilidade" },
      ],
      signals: [
        "Uma única integração",
        "Catálogo unificado",
        "Governança e disponibilidade",
      ],
    },
    problem: {
      eyebrow: "O Problema Real",
      title:
        "Integrar múltiplos varejistas não deveria significar múltiplos riscos.",
      description:
        "Cada novo parceiro exige uma nova camada de complexidade operacional.",
      painPoints: [
        "API diferente",
        "Padrão de dados diferente",
        "Manutenção contínua",
        "Monitoramento individual",
      ],
      summary:
        "Isso cria complexidade exponencial, risco operacional e custo técnico crescente para sua operação.",
    },
    solution: {
      eyebrow: "A Solução",
      title: "Uma Arquitetura Centralizada. Uma Única Integração.",
      description:
        "O Integration Hub atua como camada intermediária entre sua operação e os grandes varejistas.",
      cards: [
        {
          title: "Você integra uma vez.",
          description:
            "Conecte seu sistema ao Hub e tenha acesso a todos os varejistas parceiros automaticamente.",
        },
        {
          title: "Nós gerenciamos tudo.",
          description:
            "Catálogo, estoque, preço, sincronização e governança centralizados e automatizados.",
        },
      ],
    },
    audiences: {
      title: "Para quem é o Integration Hub?",
      description:
        "Nossa plataforma atende operações que precisam de acesso confiável aos catálogos dos maiores varejistas.",
      cards: [
        {
          title: "Campanhas de Incentivo",
          description:
            "Empresas que premiam funcionários, vendedores, parceiros ou clientes e precisam de um catálogo forte sem operar múltiplos fornecedores isolados.",
          bullets: [
            "Catálogo diversificado de prêmios",
            "Entrega em todo o Brasil",
            "Preços competitivos de varejo",
            "Gestão simplificada de pedidos",
            "Relatórios de premiação",
          ],
        },
        {
          title: "Marketplaces",
          description:
            "Plataformas de e-commerce que desejam ampliar catálogo vendendo produtos dos maiores varejistas do Brasil.",
          bullets: [
            "Milhares de SKUs disponíveis",
            "Sincronização de estoque em tempo real",
            "Preços atualizados automaticamente",
            "Fulfillment pelos varejistas",
            "Comissões competitivas",
          ],
        },
      ],
      examples: [
        {
          title: "Premiação de Vendedores",
          description:
            "Premie equipes comerciais com produtos relevantes e de alto valor percebido.",
        },
        {
          title: "Programas de Fidelidade",
          description:
            "Ofereça recompensas atrativas em programas de pontos e relacionamento.",
        },
        {
          title: "Campanhas Promocionais",
          description:
            "Crie promoções com prêmios instantâneos usando marcas conhecidas do consumidor.",
        },
        {
          title: "Marketplaces Nichados",
          description:
            "Amplie catálogo sem carregar a complexidade de múltiplas integrações diretas.",
        },
        {
          title: "Incentivo a Canais",
          description:
            "Motive distribuidores e revendedores com premiações baseadas em metas.",
        },
        {
          title: "Endomarketing",
          description:
            "Engaje colaboradores com campanhas internas de reconhecimento e recompensa.",
        },
      ],
    },
    singleIntegration: {
      eyebrow: "Uma Única Integração",
      title: "Acesso unificado aos maiores varejistas com uma só integração",
      description:
        "Nossa plataforma conecta seu sistema aos catálogos de Magazine Luiza, Casas Bahia, Ponto Frio e Extra com preço, catálogo e estoque padronizados.",
      yourSystem: "Seu Sistema",
      yourSystemCaption: "ERP / CRM / WMS",
      morePartners: "+ Novos parceiros sem custo",
      whyTitle: "Por que isso é melhor?",
      benefits: [
        "Implementação única",
        "Manutenção centralizada",
        "Atualizações automáticas",
      ],
    },
    priceHistory: {
      eyebrow: "Histórico de Preços",
      title: "Histórico de Preços Inteligente",
      description:
        "Acompanhe a evolução dos preços por fornecedor e tome decisões estratégicas com base em dados reais de mercado.",
      bullets: [
        "Evolução de preços por fornecedor",
        "Melhores momentos de compra",
        "Comparativo histórico entre marketplaces",
        "Alertas de variação de preço",
      ],
      chartTitle: 'Smart TV 55" 4K',
      chartSubtitle: "Últimos 6 meses",
      lowestPrice: "Menor: R$ 2.199",
      lowestPriceLabel: "Ponto Frio - Mar/25",
      historyBadge: "até 24 meses",
      historyBadgeLabel: "de dados históricos para análise estratégica",
      months: ["Set", "Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
    },
    pricing: {
      eyebrow: "Otimização de Preços",
      title: "Maximize seus ganhos com ajuste inteligente de preços",
      description:
        "Configure regras por marketplace para equilibrar margem, competitividade e velocidade comercial.",
      panelTitle: "Ajuste Dinâmico de Preços",
      panelDescription:
        "Configure regras por marketplace para maximizar margem",
      basePriceLabel: "Preço base: R$ 2.199",
      sampleProductName: "Celular 256GB genérico",
      sampleProductAlt: "Celular 256GB genérico",
      benefits: [
        {
          title: "Aumente suas Margens",
          description:
            "Configure markups diferentes por marketplace com base em taxas, comissões e demanda.",
        },
        {
          title: "Preços Competitivos",
          description:
            "Ajuste preços onde você precisa ganhar mercado sem comprometer a operação inteira.",
        },
        {
          title: "Análise de Performance",
          description:
            "Visualize o impacto das alterações de preço no desempenho comercial.",
        },
        {
          title: "Sincronização Automática",
          description:
            "Atualize preços em todos os marketplaces com um único fluxo operacional.",
        },
      ],
    },
    features: {
      title: "Recursos e Funcionalidades da Plataforma",
      description:
        "Base tecnológica para garantir estabilidade, performance e governança em integrações de alto volume.",
      items: [
        {
          title: "Integrações Nativas",
          description:
            "Conectores prontos para Magazine Luiza, Casas Bahia, Ponto Frio e Extra.",
        },
        {
          title: "Produto Consolidado",
          description:
            "Agrupa ofertas equivalentes de diferentes fornecedores em uma visão unificada.",
        },
        {
          title: "Categoria Consolidada",
          description:
            "Unifica categorias e departamentos em uma estrutura padronizada.",
        },
        {
          title: "Lista de Desejos Unificada",
          description:
            "Consolida intenção de compra dos usuários em todos os canais conectados.",
        },
        {
          title: "Relatórios e Dados",
          description:
            "Dashboards executivos para acompanhar vendas, pedidos e performance por varejista.",
        },
        {
          title: "Interesse em Produtos",
          description:
            "Identifique itens mais desejados com base em buscas, cliques e listas.",
        },
        {
          title: "Busca Inteligente",
          description:
            "Busca com fuzzy matching, tolerância a erros e sugestões em tempo real.",
        },
        {
          title: "APIs REST",
          description:
            "Endpoints documentados e webhooks para integrações flexíveis.",
        },
        {
          title: "Escalabilidade",
          description:
            "Escala horizontal automática para crescer sem gargalos.",
        },
        {
          title: "Multi-tenant",
          description: "Isolamento por cliente com segurança enterprise.",
        },
        {
          title: "Alta Disponibilidade",
          description: "Infraestrutura redundante com SLA de 99,9%.",
        },
      ],
    },
    differentiators: {
      title: "Diferenciais Estratégicos",
      description:
        "Uma solução desenhada para acelerar resultados, reduzir complexidade operacional e sustentar crescimento.",
      items: [
        {
          title: "Tecnologia que impulsiona resultados",
          description:
            "Infraestrutura confiável para sustentar crescimento com estabilidade, agilidade e menor custo operacional.",
        },
        {
          title: "Experiência em Alto Volume",
          description:
            "Plataforma validada em ambientes de alta demanda, com milhões de transações processadas mensalmente.",
        },
        {
          title: "Evita Integrações Ponto-a-Ponto",
          description:
            "Arquitetura centralizada que elimina a complexidade exponencial de integrações diretas.",
        },
        {
          title: "Pensado para Crescer",
          description:
            "Design modular para adicionar novos parceiros sem reescrever a base existente.",
        },
        {
          title: "Governança de Integrações",
          description:
            "Visibilidade completa do fluxo de dados com auditoria, logs e métricas centralizadas.",
        },
        {
          title: "Time Especializado",
          description:
            "Suporte técnico de quem opera integrações complexas no dia a dia.",
        },
      ],
    },
    businessBenefits: {
      title: "Benefícios para o Negócio",
      description:
        "Resultados concretos que impactam diretamente crescimento, margem e previsibilidade operacional.",
      items: [
        {
          title: "Redução de Custo",
          description:
            "Menos retrabalho, menos manutenção e mais foco do time em gerar valor.",
          highlight: "Até 60%",
          highlightLabel: "menos custo operacional",
        },
        {
          title: "Time-to-Market",
          description:
            "Novas integrações em dias, não meses. Conecte novos canais rapidamente.",
          highlight: "5x",
          highlightLabel: "mais velocidade",
        },
        {
          title: "Menos Falhas",
          description:
            "Retry automático, monitoramento e boas práticas reduzem incidentes operacionais.",
          highlight: "99.9%",
          highlightLabel: "de disponibilidade",
        },
      ],
    },
    security: {
      title: "Segurança e Confiabilidade",
      description:
        "Infraestrutura enterprise com boas práticas de segurança e alta disponibilidade.",
      items: [
        {
          title: "Isolamento por Cliente",
          description: "Dados segregados com arquitetura multi-tenant segura.",
        },
        {
          title: "Boas Práticas de Segurança",
          description:
            "Criptografia em trânsito e em repouso com autenticação robusta.",
        },
        {
          title: "Monitoramento Contínuo",
          description:
            "Alertas proativos e dashboards em tempo real para visibilidade total.",
        },
        {
          title: "Alta Disponibilidade",
          description: "Infraestrutura redundante com failover automático.",
        },
      ],
    },
    contact: {
      eyebrow: "Fale Conosco",
      title: "Pronto para transformar suas integrações?",
      description:
        "Converse com nossos especialistas e descubra como o Integration Hub pode simplificar sua operação e acelerar crescimento.",
      valueProps: [
        {
          title: "Resposta Rápida",
          description: "Nossa equipe responde em até 24 horas úteis.",
        },
        {
          title: "Sem Compromisso",
          description: "Entenda como podemos ajudar antes de qualquer decisão.",
        },
        {
          title: "Demonstração Personalizada",
          description:
            "Veja a plataforma com cenários próximos ao seu negócio.",
        },
      ],
      form: {
        name: "Nome *",
        email: "Email *",
        company: "Empresa *",
        phone: "Telefone",
        message: "Mensagem *",
        namePlaceholder: "Seu nome completo",
        emailPlaceholder: "seu@email.com",
        companyPlaceholder: "Nome da sua empresa",
        phonePlaceholder: "(11) 99999-9999",
        messagePlaceholder:
          "Conte sobre sua operação, volume de integrações e desafios atuais...",
        submitIdle: "Enviar Mensagem",
        submitLoading: "Enviando...",
        successTitle: "Mensagem enviada!",
        successDescription: "Nossa equipe entrará em contato em breve.",
        sendAnother: "Enviar outra mensagem",
        privacy: "Ao enviar, você concorda com nossa política de privacidade.",
        genericError: "Erro ao enviar. Tente novamente.",
        honeypotLabel: "Site",
      },
      validation: {
        requiredName: "Nome é obrigatório",
        requiredEmail: "Email é obrigatório",
        invalidEmail: "Digite um email válido",
        requiredCompany: "Empresa é obrigatória",
        requiredMessage: "Mensagem é obrigatória",
        messageTooLong: "Mensagem não pode ultrapassar 3.000 caracteres",
        honeypot: "Falha ao enviar formulário.",
        rateLimit: "Aguarde alguns segundos antes de enviar novamente.",
        invalidData: "Dados inválidos. Revise os campos preenchidos.",
        tooManyAttempts:
          "Muitas tentativas. Aguarde um pouco e tente novamente.",
        submitError: "Erro ao enviar formulário.",
        connectionError: "Falha de conexão. Tente novamente.",
      },
    },
    footer: {
      description:
        "Especialistas em integrações complexas, automação e soluções enterprise para e-commerce e ecossistemas B2B.",
      tagline: "Transformando desafios de integração em vantagem competitiva.",
      product: "Produto",
      contact: "Contato",
      backToForm: "Voltar ao formulário",
      rights: "© 2026 IncentiTech. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Uso",
      productLabel: "produto da Incenti Tech",
    },
  },
  en: {
    seo: {
      title: "Integration Hub | IncentiTech",
      description:
        "Connect incentive programs, marketplaces, and B2B operations to Brazil's largest retailers through a single integration layer with governance and high availability.",
      keywords:
        "integration hub, marketplace integration, incentive programs, retailers, incentitech, product catalog, enterprise integration",
      ogLocale: "en_US",
    },
    langSwitchLabel: "PT-BR",
    langSwitchAria: "Switch language to Portuguese",
    nav: {
      features: "Features",
      differentiators: "Differentiators",
      security: "Security",
      contact: "Contact",
      cta: "Request Demo",
    },
    hero: {
      titleLead: "Reward users with products from",
      titleHighlight: "Brazil's leading retailers",
      titleTail: "",
      description:
        "Connect your incentive programs or marketplace to major retailer catalogs through a single integration and unlock thousands of products.",
      primaryCta: "Talk to a Specialist",
      secondaryCta: "How It Works",
      stats: [
        { value: "4", label: "Major Retailers" },
        { value: "1M+", label: "Available Products" },
        { value: "1", label: "Single Integration" },
        { value: "24/7", label: "Availability" },
      ],
      signals: [
        "Single integration",
        "Unified catalog",
        "Governance and availability",
      ],
    },
    problem: {
      eyebrow: "The Real Problem",
      title: "Integrating multiple retailers should not mean multiplying risk.",
      description:
        "Every new partner introduces a new layer of operational complexity.",
      painPoints: [
        "Different APIs",
        "Different data standards",
        "Ongoing maintenance",
        "Individual monitoring",
      ],
      summary:
        "That creates exponential complexity, operational risk, and growing technical cost for your team.",
    },
    solution: {
      eyebrow: "The Solution",
      title: "A Centralized Architecture. A Single Integration.",
      description:
        "Integration Hub acts as a middleware layer between your operation and major retailers.",
      cards: [
        {
          title: "You integrate once.",
          description:
            "Connect your system to the hub and gain access to every partner retailer automatically.",
        },
        {
          title: "We manage the rest.",
          description:
            "Catalog, inventory, pricing, synchronization, and governance handled in one place.",
        },
      ],
    },
    audiences: {
      title: "Who is Integration Hub for?",
      description:
        "The platform supports operations that need reliable access to the catalogs of major retailers.",
      cards: [
        {
          title: "Incentive Programs",
          description:
            "Companies rewarding employees, sellers, partners, or customers with high-value products without managing multiple isolated suppliers.",
          bullets: [
            "Diverse reward catalog",
            "Nationwide delivery in Brazil",
            "Competitive retail pricing",
            "Simplified order management",
            "Reward reporting",
          ],
        },
        {
          title: "Marketplaces",
          description:
            "E-commerce platforms that want to expand their catalog with products from Brazil's biggest retailers.",
          bullets: [
            "Thousands of available SKUs",
            "Real-time stock synchronization",
            "Automatically updated pricing",
            "Retailer fulfillment",
            "Competitive commissions",
          ],
        },
      ],
      examples: [
        {
          title: "Sales Team Rewards",
          description:
            "Reward commercial teams with relevant products from trusted retailers.",
        },
        {
          title: "Loyalty Programs",
          description:
            "Offer stronger rewards for points-based and customer engagement programs.",
        },
        {
          title: "Promotional Campaigns",
          description:
            "Create campaigns with instant prizes backed by recognized brands.",
        },
        {
          title: "Niche Marketplaces",
          description:
            "Expand catalog depth without taking on multiple point-to-point integrations.",
        },
        {
          title: "Channel Incentives",
          description:
            "Motivate distributors and resellers with performance-based rewards.",
        },
        {
          title: "Internal Engagement",
          description:
            "Run employee recognition campaigns with relevant and desirable rewards.",
        },
      ],
    },
    singleIntegration: {
      eyebrow: "Single Integration",
      title: "Unified access to major retailers through one integration",
      description:
        "Connect your system to Magazine Luiza, Casas Bahia, Ponto Frio, and Extra with normalized pricing, catalog, and inventory data.",
      yourSystem: "Your System",
      yourSystemCaption: "ERP / CRM / WMS",
      morePartners: "+ New partners at no extra integration cost",
      whyTitle: "Why is this better?",
      benefits: [
        "Single implementation",
        "Centralized maintenance",
        "Automatic updates",
      ],
    },
    priceHistory: {
      eyebrow: "Price History",
      title: "Smart Price History",
      description:
        "Track price changes per supplier over time and make strategic decisions based on real market data.",
      bullets: [
        "Price evolution by supplier",
        "Best buying windows",
        "Historical marketplace comparisons",
        "Price variation alerts",
      ],
      chartTitle: '55" 4K Smart TV',
      chartSubtitle: "Last 6 months",
      lowestPrice: "Lowest: R$ 2,199",
      lowestPriceLabel: "Ponto Frio - Mar/25",
      historyBadge: "up to 24 months",
      historyBadgeLabel: "of historical data for strategic analysis",
      months: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
    },
    pricing: {
      eyebrow: "Price Optimization",
      title: "Maximize returns with smart pricing adjustments",
      description:
        "Configure marketplace rules to balance margin, competitiveness, and commercial speed.",
      panelTitle: "Dynamic Pricing Adjustments",
      panelDescription: "Configure marketplace rules to maximize margin",
      basePriceLabel: "Base price: R$ 2,199",
      sampleProductName: "Generic 256GB smartphone",
      sampleProductAlt: "Generic 256GB smartphone",
      benefits: [
        {
          title: "Increase Margins",
          description:
            "Set different markups per marketplace based on fees, commissions, and demand.",
        },
        {
          title: "Stay Competitive",
          description:
            "Adjust pricing where you need market share without changing your entire operation.",
        },
        {
          title: "Performance Analysis",
          description:
            "Measure the commercial impact of price changes with live operational data.",
        },
        {
          title: "Automatic Sync",
          description:
            "Update prices across all marketplaces through a single operational flow.",
        },
      ],
    },
    features: {
      title: "Platform Features and Capabilities",
      description:
        "Technology foundation built for stability, performance, and governance at scale.",
      items: [
        {
          title: "Native Integrations",
          description:
            "Ready connectors for Magazine Luiza, Casas Bahia, Ponto Frio, and Extra.",
        },
        {
          title: "Unified Product View",
          description:
            "Group equivalent offers from different suppliers in a single product view.",
        },
        {
          title: "Consolidated Categories",
          description:
            "Unify categories and departments in a standardized structure.",
        },
        {
          title: "Unified Wishlist",
          description:
            "Consolidate customer buying intent across connected channels.",
        },
        {
          title: "Reporting and Data",
          description:
            "Executive dashboards for sales, orders, and retailer performance.",
        },
        {
          title: "Product Interest Signals",
          description:
            "Identify the most desired items through searches, clicks, and lists.",
        },
        {
          title: "Smart Search",
          description:
            "Search with fuzzy matching, typo tolerance, and relevant suggestions.",
        },
        {
          title: "REST APIs",
          description:
            "Documented endpoints and webhooks for flexible integrations.",
        },
        {
          title: "Scalability",
          description:
            "Automatic horizontal scale for growth without bottlenecks.",
        },
        {
          title: "Multi-tenant",
          description: "Tenant isolation with enterprise-grade security.",
        },
        {
          title: "High Availability",
          description: "Redundant infrastructure with a 99.9% SLA.",
        },
      ],
    },
    differentiators: {
      title: "Strategic Advantages",
      description:
        "A solution designed to accelerate results, reduce operational complexity, and support growth.",
      items: [
        {
          title: "Technology that drives results",
          description:
            "Reliable infrastructure to sustain growth with stability, agility, and lower operating cost.",
        },
        {
          title: "High-volume experience",
          description:
            "Platform validated in high-demand environments with millions of monthly transactions.",
        },
        {
          title: "No point-to-point sprawl",
          description:
            "Centralized architecture that eliminates the exponential complexity of direct integrations.",
        },
        {
          title: "Built to grow",
          description:
            "Modular design for onboarding new partners without rewriting the existing core.",
        },
        {
          title: "Integration governance",
          description:
            "Full visibility over data flows with centralized auditing, logs, and metrics.",
        },
        {
          title: "Specialized team",
          description:
            "Technical support from engineers who work with complex integrations every day.",
        },
      ],
    },
    businessBenefits: {
      title: "Business Benefits",
      description:
        "Concrete gains that directly impact growth, margins, and operational predictability.",
      items: [
        {
          title: "Cost Reduction",
          description:
            "Less rework, less maintenance, and more time focused on value creation.",
          highlight: "Up to 60%",
          highlightLabel: "lower operating cost",
        },
        {
          title: "Time-to-Market",
          description:
            "New integrations in days, not months. Launch new sales channels faster.",
          highlight: "5x",
          highlightLabel: "more speed",
        },
        {
          title: "Fewer Failures",
          description:
            "Retries, monitoring, and best practices reduce operational incidents.",
          highlight: "99.9%",
          highlightLabel: "availability",
        },
      ],
    },
    security: {
      title: "Security and Reliability",
      description:
        "Enterprise-grade infrastructure with strong security practices and high availability.",
      items: [
        {
          title: "Tenant Isolation",
          description: "Segregated data with secure multi-tenant architecture.",
        },
        {
          title: "Security Best Practices",
          description:
            "Encryption in transit and at rest with strong authentication.",
        },
        {
          title: "Continuous Monitoring",
          description:
            "Proactive alerts and real-time dashboards for full visibility.",
        },
        {
          title: "High Availability",
          description: "Redundant infrastructure with automatic failover.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Ready to transform your integrations?",
      description:
        "Talk to our specialists and discover how Integration Hub can simplify operations and accelerate growth.",
      valueProps: [
        {
          title: "Fast Response",
          description: "Our team gets back to you within one business day.",
        },
        {
          title: "No Commitment",
          description:
            "Understand where we can help before making any decision.",
        },
        {
          title: "Tailored Demo",
          description:
            "See the platform applied to scenarios close to your business.",
        },
      ],
      form: {
        name: "Name *",
        email: "Email *",
        company: "Company *",
        phone: "Phone",
        message: "Message *",
        namePlaceholder: "Your full name",
        emailPlaceholder: "you@company.com",
        companyPlaceholder: "Your company name",
        phonePlaceholder: "+1 (555) 123-4567",
        messagePlaceholder:
          "Tell us about your operation, integration volume, and current challenges...",
        submitIdle: "Send Message",
        submitLoading: "Sending...",
        successTitle: "Message sent!",
        successDescription: "Our team will contact you shortly.",
        sendAnother: "Send another message",
        privacy: "By submitting, you agree with our privacy policy.",
        genericError:
          "There was an error sending your message. Please try again.",
        honeypotLabel: "Website",
      },
      validation: {
        requiredName: "Name is required",
        requiredEmail: "Email is required",
        invalidEmail: "Enter a valid email",
        requiredCompany: "Company is required",
        requiredMessage: "Message is required",
        messageTooLong: "Message cannot exceed 3,000 characters",
        honeypot: "Failed to submit the form.",
        rateLimit: "Please wait a few seconds before submitting again.",
        invalidData: "Invalid data. Review the filled fields.",
        tooManyAttempts: "Too many attempts. Please wait a bit and try again.",
        submitError: "Failed to submit the form.",
        connectionError: "Connection error. Please try again.",
      },
    },
    footer: {
      description:
        "Specialists in complex integrations, automation, and enterprise solutions for e-commerce and B2B ecosystems.",
      tagline: "Turning integration challenges into competitive advantage.",
      product: "Product",
      contact: "Contact",
      backToForm: "Back to form",
      rights: "© 2026 IncentiTech. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      productLabel: "IncentiTech product",
    },
  },
} as const;

const retailerLogos = [
  { name: "Magazine Luiza", logo: logoMagalu },
  { name: "Casas Bahia", logo: logoCasasBahia },
  { name: "Ponto Frio", logo: logoPontoFrio },
  { name: "Extra", logo: logoExtra },
];

const audienceCardIcons = [Gift, Globe];
const audienceExampleIcons = [Gift, Users, Target, Globe, BarChart3, Zap];
const featureIcons = [
  Globe,
  Database,
  FolderTree,
  Heart,
  BarChart3,
  Sparkles,
  Search,
  Server,
  Cloud,
  Lock,
  Gauge,
];
const pricingBenefitIcons = [TrendingUp, Target, BarChart3, RefreshCw];
const businessBenefitIcons = [BarChart3, Zap, Shield];
const securityIcons = [Lock, Shield, BarChart3, Cloud];

const formatPrice = (locale: Locale, value: number) =>
  new Intl.NumberFormat(locale === "pt-BR" ? "pt-BR" : "en-US", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);

const IntegrationHubContactForm = ({ locale }: { locale: Locale }) => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [messageLength, setMessageLength] = useState(0);
  const hasTrackedFormStartRef = useRef(false);
  const lastSubmitRef = useRef(0);
  const maxMessageLength = 3000;
  const contact = content[locale].contact;

  const trackFormStart = () => {
    if (hasTrackedFormStartRef.current) {
      return;
    }

    hasTrackedFormStartRef.current = true;
    trackAnalyticsEvent("integration_hub_form_inicio_preenchimento", {
      page: "integration_hub",
      section: "contato",
      label: "Formulario Integration Hub",
    });
  };

  const validate = (data: Record<string, string>) => {
    const nextErrors: Record<string, string> = {};
    if (!data.nome?.trim()) nextErrors.nome = contact.validation.requiredName;
    if (!data.email?.trim())
      nextErrors.email = contact.validation.requiredEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      nextErrors.email = contact.validation.invalidEmail;
    if (!data.empresa?.trim())
      nextErrors.empresa = contact.validation.requiredCompany;
    if (!data.mensagem?.trim())
      nextErrors.mensagem = contact.validation.requiredMessage;
    else if (data.mensagem.length > maxMessageLength)
      nextErrors.mensagem = contact.validation.messageTooLong;
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => (data[key] = value.toString()));

    if (data.website?.trim()) {
      setErrors({ form: contact.validation.honeypot });
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const now = Date.now();
    if (now - lastSubmitRef.current < 10000) {
      setErrors({ form: contact.validation.rateLimit });
      return;
    }
    lastSubmitRef.current = now;
    trackAnalyticsEvent("integration_hub_form_fim_preenchimento", {
      page: "integration_hub",
      section: "contato",
      label: "Formulario Integration Hub",
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
          serviceType: "Integration Hub",
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
        setErrors(
          result.fields || {
            form: result.error || contact.validation.invalidData,
          },
        );
        setStatus("idle");
        return;
      }

      if (response.status === 429) {
        setErrors({ form: contact.validation.tooManyAttempts });
        setStatus("idle");
        return;
      }

      setErrors({ form: result.error || contact.validation.submitError });
      setStatus("error");
    } catch (error) {
      console.error("Error sending integration hub form:", error);
      setErrors({ form: contact.validation.connectionError });
      setStatus("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-2xl border px-4 py-3.5 text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/25 ${
      errors[field]
        ? "border-destructive bg-destructive/5"
        : "border-border bg-white"
    }`;

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mb-2 text-2xl font-bold">{contact.form.successTitle}</h3>
        <p className="mb-6 text-muted-foreground">
          {contact.form.successDescription}
        </p>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => setStatus("idle")}
          data-ga-click="integration_hub_click_form_enviar_novamente"
          data-ga-page="integration_hub"
          data-ga-section="contato"
          data-ga-label={contact.form.sendAnother}
        >
          {contact.form.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={trackFormStart}
      className="relative space-y-5"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            {contact.form.name}
          </label>
          <input
            name="nome"
            type="text"
            placeholder={contact.form.namePlaceholder}
            className={inputClass("nome")}
          />
          {errors.nome && (
            <p className="mt-1 text-xs text-destructive">{errors.nome}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            {contact.form.email}
          </label>
          <input
            name="email"
            type="email"
            placeholder={contact.form.emailPlaceholder}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            {contact.form.company}
          </label>
          <input
            name="empresa"
            type="text"
            placeholder={contact.form.companyPlaceholder}
            className={inputClass("empresa")}
          />
          {errors.empresa && (
            <p className="mt-1 text-xs text-destructive">{errors.empresa}</p>
          )}
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            {contact.form.phone}
          </label>
          <input
            name="telefone"
            type="tel"
            placeholder={contact.form.phonePlaceholder}
            className={inputClass("telefone")}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium">
          {contact.form.message}
        </label>
        <textarea
          name="mensagem"
          rows={5}
          placeholder={contact.form.messagePlaceholder}
          className={inputClass("mensagem") + " resize-none"}
          onChange={(event) => setMessageLength(event.target.value.length)}
        />
        <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
          {errors.mensagem ? (
            <p className="text-xs text-destructive">{errors.mensagem}</p>
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
        <label htmlFor="website">{contact.form.honeypotLabel}</label>
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
        <p className="text-sm text-destructive">
          {errors.form || contact.form.genericError}
        </p>
      )}

      <Button
        type="submit"
        variant="hero"
        size="lg"
        className="h-[54px] w-full rounded-2xl px-6 text-base font-semibold"
        disabled={status === "loading"}
        data-ga-click="integration_hub_click_form_enviar"
        data-ga-page="integration_hub"
        data-ga-section="contato"
        data-ga-label={contact.form.submitIdle}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {contact.form.submitLoading}
          </>
        ) : (
          <>
            {contact.form.submitIdle}
            <Send className="h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        {contact.form.privacy}
      </p>
    </form>
  );
};

const EmblaCarousel = <T,>({
  items,
  renderItem,
  slidesPerView = "basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4",
  prevClickEvent,
  nextClickEvent,
}: {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: string;
  prevClickEvent: string;
  nextClickEvent: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {items.map((item, index) => (
            <div
              key={index}
              className={`min-w-0 shrink-0 grow-0 pl-4 ${slidesPerView}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          data-ga-click={prevClickEvent}
          data-ga-page="integration_hub"
          data-ga-section="carrossel"
          data-ga-label="Anterior"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary/50 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          data-ga-click={nextClickEvent}
          data-ga-page="integration_hub"
          data-ga-section="carrossel"
          data-ga-label="Proximo"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-colors hover:border-primary/50 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const IntegrationHub = ({ locale }: IntegrationHubPageProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const page = content[locale];
  const seo = integrationHubSeo[locale];
  const switchLocale: Locale = locale === "pt-BR" ? "en" : "pt-BR";
  const switchPath = getIntegrationHubPath(switchLocale);
  const canonical = `https://incentitech.com.br${getIntegrationHubPath(locale)}`;
  const productLabel = page.footer.productLabel;
  const audienceCards = page.audiences.cards.map((item, index) => ({
    ...item,
    Icon: audienceCardIcons[index],
  }));
  const audienceExamples = page.audiences.examples.map((item, index) => ({
    ...item,
    Icon: audienceExampleIcons[index],
  }));
  const featureItems = page.features.items.map((item, index) => ({
    ...item,
    Icon: featureIcons[index],
  }));
  const pricingBenefits = page.pricing.benefits.map((item, index) => ({
    ...item,
    Icon: pricingBenefitIcons[index],
  }));
  const businessBenefits = page.businessBenefits.items.map((item, index) => ({
    ...item,
    Icon: businessBenefitIcons[index],
  }));
  const securityItems = page.security.items.map((item, index) => ({
    ...item,
    Icon: securityIcons[index],
  }));
  const priceLegend = [
    {
      name: "Magazine Luiza",
      logo: logoMagalu,
      price: formatPrice(locale, 2399),
      color: "bg-primary",
    },
    {
      name: "Casas Bahia",
      logo: logoCasasBahia,
      price: formatPrice(locale, 2499),
      color: "bg-amber-500",
    },
    {
      name: "Ponto Frio",
      logo: logoPontoFrio,
      price: formatPrice(locale, 2199),
      color: "bg-emerald-500",
    },
  ];
  const pricingItems = [
    {
      marketplace: "Magazine Luiza",
      logo: logoMagalu,
      adjustment: 15,
      final: 2529,
    },
    {
      marketplace: "Casas Bahia",
      logo: logoCasasBahia,
      adjustment: 10,
      final: 2419,
    },
    {
      marketplace: "Ponto Frio",
      logo: logoPontoFrio,
      adjustment: 5,
      final: 2309,
    },
    { marketplace: "Extra", logo: logoExtra, adjustment: -5, final: 2089 },
  ];
  const heroSignals = page.hero.signals;
  const contactSection = (
    <section id="contato" className="relative overflow-hidden py-24">
      <div className="ih-bg-gradient-glow absolute inset-0 opacity-30" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-start gap-12 xl:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
              <Send className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {page.contact.eyebrow}
              </span>
            </div>
            <h2 className="ih-section-title mb-6">{page.contact.title}</h2>
            <p className="ih-section-copy mb-8 max-w-xl">
              {page.contact.description}
            </p>
            <div className="space-y-4">
              {page.contact.valueProps.map((item) => (
                <div
                  key={item.title}
                  className="ih-shell-soft flex min-w-0 gap-4 rounded-[24px] border border-border p-5"
                >
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="ih-card-title mb-1 break-words">
                      {item.title}
                    </h3>
                    <p className="ih-card-copy break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary opacity-5 blur-3xl" />
            <div className="ih-shell ih-shadow-elevated relative rounded-[32px] border border-border p-8 md:p-10">
              <IntegrationHubContactForm locale={locale} />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-3xl flex-col gap-4 text-sm text-muted-foreground md:flex-row">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              data-ga-click="integration_hub_click_contato_email"
              data-ga-page="integration_hub"
              data-ga-section="contato"
              data-ga-label={CONTACT_EMAIL}
              className="ih-contact-link ih-shell-soft flex flex-1 items-center justify-center gap-3 rounded-[24px] border border-border px-5 py-4 text-center transition-colors hover:text-foreground"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="break-all sm:break-normal">{CONTACT_EMAIL}</span>
            </a>
            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-ga-click="integration_hub_click_contato_whatsapp"
              data-ga-page="integration_hub"
              data-ga-section="contato"
              data-ga-label={CONTACT_PHONE_DISPLAY}
              className="ih-contact-link ih-shell-soft flex flex-1 items-center justify-center gap-3 rounded-[24px] border border-border px-5 py-4 text-center transition-colors hover:text-foreground"
              aria-label={`Conversar no WhatsApp com a Incenti Tech pelo número ${CONTACT_PHONE_DISPLAY}`}
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    const removeClickTracking = registerAnalyticsClickTracking();
    const removeSectionTracking = registerSectionViewTracking([
      {
        id: "hero",
        eventName: "integration_hub_scroll_hero",
        label: "Hero",
        page: "integration_hub",
      },
      {
        id: "problema",
        eventName: "integration_hub_scroll_problema",
        label: "Problema",
        page: "integration_hub",
      },
      {
        id: "solucao",
        eventName: "integration_hub_scroll_solucao",
        label: "Solucao",
        page: "integration_hub",
      },
      {
        id: "contato",
        eventName: "integration_hub_scroll_contato",
        label: "Contato",
        page: "integration_hub",
      },
      {
        id: "publicos",
        eventName: "integration_hub_scroll_publicos",
        label: "Publicos",
        page: "integration_hub",
      },
      {
        id: "integracao-unica",
        eventName: "integration_hub_scroll_integracao_unica",
        label: "Integracao Unica",
        page: "integration_hub",
      },
      {
        id: "historico-precos",
        eventName: "integration_hub_scroll_historico_precos",
        label: "Historico de Precos",
        page: "integration_hub",
      },
      {
        id: "precificacao",
        eventName: "integration_hub_scroll_precificacao",
        label: "Precificacao",
        page: "integration_hub",
      },
      {
        id: "recursos",
        eventName: "integration_hub_scroll_recursos",
        label: "Recursos",
        page: "integration_hub",
      },
      {
        id: "diferenciais",
        eventName: "integration_hub_scroll_diferenciais",
        label: "Diferenciais",
        page: "integration_hub",
      },
      {
        id: "beneficios-negocio",
        eventName: "integration_hub_scroll_beneficios_negocio",
        label: "Beneficios do Negocio",
        page: "integration_hub",
      },
      {
        id: "seguranca",
        eventName: "integration_hub_scroll_seguranca",
        label: "Seguranca",
        page: "integration_hub",
      },
    ]);

    return () => {
      removeClickTracking();
      removeSectionTracking();
    };
  }, []);

  return (
    <div className="integration-hub-theme relative min-h-screen bg-background text-foreground">
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonical={canonical}
        lang={seo.lang}
        ogLocale={seo.ogLocale}
        keywords={seo.keywords}
        alternates={seo.alternates}
        structuredData={getIntegrationHubStructuredData(locale)}
      />

      <header className="fixed left-0 right-0 top-4 z-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`ih-nav-shell flex items-center justify-between rounded-full px-4 transition-all duration-300 md:px-5 ${scrolled ? "gap-4 py-2" : "gap-3 py-0.5"}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`rounded-2xl border border-white/60 bg-white/70 transition-all duration-300 ${scrolled ? "p-1.5" : "p-1"}`}
              >
                <img
                  src={integrationHubLogo}
                  alt="Incenti Tech"
                  className={`rounded-xl object-contain transition-all duration-300 ${scrolled ? "h-20 w-20" : "h-28 w-28"}`}
                />
              </div>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {productLabel}
                </p>
                <p
                  className={`font-heading font-semibold tracking-[-0.04em] transition-all duration-300 ${scrolled ? "text-lg" : "text-base md:text-lg"}`}
                >
                  Integration Hub
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 lg:flex">
              <a
                href="#recursos"
                data-ga-click="integration_hub_click_nav_recursos"
                data-ga-page="integration_hub"
                data-ga-section="navbar"
                data-ga-label={page.nav.features}
                className="ih-nav-link"
              >
                {page.nav.features}
              </a>
              <a
                href="#diferenciais"
                data-ga-click="integration_hub_click_nav_diferenciais"
                data-ga-page="integration_hub"
                data-ga-section="navbar"
                data-ga-label={page.nav.differentiators}
                className="ih-nav-link"
              >
                {page.nav.differentiators}
              </a>
              <a
                href="#seguranca"
                data-ga-click="integration_hub_click_nav_seguranca"
                data-ga-page="integration_hub"
                data-ga-section="navbar"
                data-ga-label={page.nav.security}
                className="ih-nav-link"
              >
                {page.nav.security}
              </a>
              <a
                href="#contato"
                data-ga-click="integration_hub_click_nav_contato"
                data-ga-page="integration_hub"
                data-ga-section="navbar"
                data-ga-label={page.nav.contact}
                className="ih-nav-link"
              >
                {page.nav.contact}
              </a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={() => window.location.assign(switchPath)}
                aria-label={page.langSwitchAria}
                data-ga-click="integration_hub_click_nav_mudar_idioma"
                data-ga-page="integration_hub"
                data-ga-section="navbar"
                data-ga-label={page.langSwitchLabel}
                className="rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] transition-colors hover:border-primary/35 hover:text-primary"
              >
                {page.langSwitchLabel}
              </button>
              <Button
                variant="hero"
                size="sm"
                asChild
                data-ga-click="integration_hub_click_nav_cta"
                data-ga-page="integration_hub"
                data-ga-section="navbar"
                data-ga-label={page.nav.cta}
              >
                <a href="#contato">
                  {page.nav.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <button
              type="button"
              className="text-foreground lg:hidden"
              onClick={() => setMobileMenuOpen((value) => !value)}
              data-ga-click="integration_hub_click_mobile_menu_toggle"
              data-ga-page="integration_hub"
              data-ga-section="navbar"
              data-ga-label="Menu mobile"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="ih-nav-shell mt-3 rounded-[28px] border border-border p-5 lg:hidden">
              <nav className="flex flex-col gap-4">
                <a
                  href="#recursos"
                  onClick={() => setMobileMenuOpen(false)}
                  data-ga-click="integration_hub_click_mobile_nav_recursos"
                  data-ga-page="integration_hub"
                  data-ga-section="navbar"
                  data-ga-label={page.nav.features}
                  className="ih-nav-link"
                >
                  {page.nav.features}
                </a>
                <a
                  href="#diferenciais"
                  onClick={() => setMobileMenuOpen(false)}
                  data-ga-click="integration_hub_click_mobile_nav_diferenciais"
                  data-ga-page="integration_hub"
                  data-ga-section="navbar"
                  data-ga-label={page.nav.differentiators}
                  className="ih-nav-link"
                >
                  {page.nav.differentiators}
                </a>
                <a
                  href="#seguranca"
                  onClick={() => setMobileMenuOpen(false)}
                  data-ga-click="integration_hub_click_mobile_nav_seguranca"
                  data-ga-page="integration_hub"
                  data-ga-section="navbar"
                  data-ga-label={page.nav.security}
                  className="ih-nav-link"
                >
                  {page.nav.security}
                </a>
                <a
                  href="#contato"
                  onClick={() => setMobileMenuOpen(false)}
                  data-ga-click="integration_hub_click_mobile_nav_contato"
                  data-ga-page="integration_hub"
                  data-ga-section="navbar"
                  data-ga-label={page.nav.contact}
                  className="ih-nav-link"
                >
                  {page.nav.contact}
                </a>
                <div className="mt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => window.location.assign(switchPath)}
                    aria-label={page.langSwitchAria}
                    data-ga-click="integration_hub_click_mobile_mudar_idioma"
                    data-ga-page="integration_hub"
                    data-ga-section="navbar"
                    data-ga-label={page.langSwitchLabel}
                    className="rounded-full border border-border bg-white/80 px-4 py-2 text-xs font-semibold tracking-[0.18em] transition-colors hover:border-primary/35 hover:text-primary"
                  >
                    {page.langSwitchLabel}
                  </button>
                  <Button
                    variant="hero"
                    className="flex-1"
                    asChild
                    data-ga-click="integration_hub_click_mobile_cta"
                    data-ga-page="integration_hub"
                    data-ga-section="navbar"
                    data-ga-label={page.nav.cta}
                  >
                    <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
                      {page.nav.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section
        id="hero"
        className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
      >
        <div className="ih-bg-gradient-glow absolute inset-0" />
        <div className="ih-grid-pattern absolute opacity-70" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <div className="ih-animate-slide-up inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              {page.solution.eyebrow}
            </div>
            <h1 className="ih-animate-slide-up ih-hero-title mt-6 max-w-4xl">
              {page.hero.titleLead}{" "}
              <span className="ih-text-gradient">
                {page.hero.titleHighlight}
              </span>{" "}
              {page.hero.titleTail}
            </h1>
            <p
              className="ih-animate-slide-up ih-section-copy mt-6 max-w-3xl"
              style={{ animationDelay: "0.1s" }}
            >
              {page.hero.description}
            </p>
            <div
              className="ih-animate-slide-up mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                variant="hero"
                size="xl"
                asChild
                data-ga-click="integration_hub_click_hero_contato"
                data-ga-page="integration_hub"
                data-ga-section="hero"
                data-ga-label={page.hero.primaryCta}
              >
                <a href="#contato">
                  {page.hero.primaryCta}
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                asChild
                data-ga-click="integration_hub_click_hero_recursos"
                data-ga-page="integration_hub"
                data-ga-section="hero"
                data-ga-label={page.hero.secondaryCta}
              >
                <a href="#recursos">{page.hero.secondaryCta}</a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {heroSignals.map((item) => (
                <span
                  key={item}
                  className="ih-chip rounded-full px-4 py-2 text-center text-[10px] font-semibold leading-4 tracking-[0.14em] sm:text-[11px] sm:tracking-[0.18em]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.hero.stats.map((stat) => (
                <div key={stat.label} className="ih-stat-card p-5">
                  <div className="ih-text-gradient text-3xl font-bold tracking-[-0.04em] md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="problema" className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-destructive/[0.03] to-background" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-destructive/30 bg-destructive/5 px-3 py-1">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <span className="text-sm font-medium text-destructive">
                {page.problem.eyebrow}
              </span>
            </div>
            <h2 className="ih-section-title mx-auto mb-4 max-w-3xl">
              {page.problem.title}
            </h2>
            <p className="ih-section-copy mx-auto max-w-xl">
              {page.problem.description}
            </p>
          </div>
          <div className="mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-4">
            {[GitBranch, Database, Settings2, Eye].map((Icon, index) => (
              <div
                key={page.problem.painPoints[index]}
                className="ih-shell-soft ih-card-hover group relative w-full max-w-[220px] min-w-0 rounded-[24px] border border-destructive/20 p-5 text-center sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)]"
              >
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 transition-colors group-hover:bg-destructive/15">
                  <Icon className="h-6 w-6 text-destructive" />
                </div>
                <p className="break-words text-sm font-medium">
                  {page.problem.painPoints[index]}
                </p>
              </div>
            ))}
          </div>
          <div className="ih-shell-soft mx-auto max-w-2xl rounded-[24px] border border-destructive/20 p-6 text-center">
            <p className="leading-relaxed text-muted-foreground">
              {page.problem.summary}
            </p>
          </div>
        </div>
      </section>

      <section
        id="solucao"
        className="relative overflow-hidden bg-secondary/30 py-24"
      >
        <div className="ih-bg-gradient-glow absolute inset-0 opacity-40" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
              <Layers className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {page.solution.eyebrow}
              </span>
            </div>
            <h2 className="ih-section-title mx-auto mb-4 max-w-3xl">
              {page.solution.title}
            </h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.solution.description}
            </p>
          </div>
          <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
            {page.solution.cards.map((card, index) => {
              const Icon = index === 0 ? Zap : RefreshCw;
              return (
                <div
                  key={card.title}
                  className="ih-shell-soft ih-card-hover min-w-0 rounded-[28px] border border-border p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="ih-card-title mb-1 break-words">
                        {card.title}
                      </h3>
                      <p className="ih-card-copy break-words">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {contactSection}

      <section id="publicos" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="ih-section-title mb-4">{page.audiences.title}</h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.audiences.description}
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {audienceCards.map(({ Icon, ...item }) => (
              <div key={item.title} className="group relative">
                <div className="absolute inset-0 rounded-3xl bg-primary opacity-5 blur-2xl transition-opacity group-hover:opacity-10" />
                <div className="ih-shell-soft ih-card-hover relative h-full min-w-0 rounded-[30px] border border-border p-8">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="ih-card-title mb-4 break-words">
                    {item.title}
                  </h3>
                  <p className="ih-card-copy mb-6 break-words">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="min-w-0 break-words">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 max-w-6xl">
            <EmblaCarousel
              items={audienceExamples}
              slidesPerView="basis-[85%] sm:basis-[60%] md:basis-1/2 xl:basis-1/3"
              prevClickEvent="integration_hub_click_publicos_carrossel_anterior"
              nextClickEvent="integration_hub_click_publicos_carrossel_proximo"
              renderItem={(item) => (
                <div className="ih-shell-soft ih-card-hover group h-full min-w-0 rounded-[24px] border border-border p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <item.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="ih-card-title mb-2 break-words transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="ih-card-copy break-words">{item.description}</p>
                </div>
              )}
            />
          </div>
        </div>
      </section>

      <section id="integracao-unica" className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
              <Link2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {page.singleIntegration.eyebrow}
              </span>
            </div>
            <h2 className="ih-section-title mb-4">
              {page.singleIntegration.title}
            </h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.singleIntegration.description}
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="ih-shell rounded-[32px] border border-border/60 p-6 md:p-8">
              <div className="mb-4 flex flex-col items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/30 bg-background">
                  <Server className="h-7 w-7 text-primary" />
                </div>
                <span className="mt-2 font-semibold">
                  {page.singleIntegration.yourSystem}
                </span>
                <p className="text-xs text-muted-foreground">
                  {page.singleIntegration.yourSystemCaption}
                </p>
              </div>
              <div className="mb-2 flex justify-center">
                <div className="ih-bg-gradient-primary ih-shadow-glow flex h-14 w-14 items-center justify-center rounded-xl">
                  <Send className="h-7 w-7 text-primary-foreground" />
                </div>
              </div>
              <div className="mb-5 flex justify-center">
                <svg className="h-12 w-full max-w-lg" viewBox="0 0 400 52">
                  <circle
                    cx="200"
                    cy="6"
                    r="3"
                    fill="#ef4444"
                    fillOpacity="0.35"
                  />
                  <path
                    d="M200 8 C200 20 56 26 56 48"
                    stroke="#ef4444"
                    strokeOpacity="0.28"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M200 8 C200 20 152 26 152 48"
                    stroke="#ef4444"
                    strokeOpacity="0.28"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M200 8 C200 20 248 26 248 48"
                    stroke="#ef4444"
                    strokeOpacity="0.28"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M200 8 C200 20 344 26 344 48"
                    stroke="#ef4444"
                    strokeOpacity="0.28"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                {retailerLogos.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex h-20 items-center justify-center rounded-xl border border-border/70 bg-white px-4 transition-all duration-300 hover:border-primary/35"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-[65%] w-auto max-w-[76%] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
                <div className="flex h-20 flex-col items-center justify-center rounded-xl border border-border/70 bg-white px-4 text-center transition-all duration-300 hover:border-primary/35">
                  <span className="text-base font-semibold text-foreground">
                    {page.singleIntegration.morePartners}
                  </span>
                </div>
              </div>
              <div className="mt-8 border-t border-border/60 pt-6">
                <p className="mb-4 text-center text-sm font-semibold">
                  {page.singleIntegration.whyTitle}
                </p>
                <div className="grid grid-cols-1 gap-3 rounded-xl border border-border/50 bg-secondary/35 p-4 lg:grid-cols-3">
                  {page.singleIntegration.benefits.map((item, index) => {
                    const Icon = [Zap, RefreshCw, Gauge][index];
                    return (
                      <div
                        key={item}
                        className="flex min-w-0 items-center justify-center gap-2 rounded-full border border-border/60 bg-background/70 px-3 py-2 text-sm"
                      >
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="min-w-0 break-words text-center leading-5">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="historico-precos" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 xl:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
                <History className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  {page.priceHistory.eyebrow}
                </span>
              </div>
              <h2 className="ih-section-title mb-6">
                {page.priceHistory.title}
              </h2>
              <p className="ih-section-copy mb-8 max-w-xl">
                {page.priceHistory.description}
              </p>
              <ul className="space-y-4">
                {page.priceHistory.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary opacity-10 blur-3xl" />
              <div className="ih-shell ih-shadow-elevated relative rounded-[32px] border border-border p-8">
                <div className="mb-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        {page.priceHistory.chartTitle}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {page.priceHistory.chartSubtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-primary">
                        {page.priceHistory.lowestPrice}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {page.priceHistory.lowestPriceLabel}
                      </p>
                    </div>
                  </div>
                  <div className="relative mb-4 h-40">
                    <svg
                      className="h-full w-full"
                      viewBox="0 0 400 160"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 80 L67 70 L133 90 L200 60 L267 75 L333 50 L400 65"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2.5"
                        fill="none"
                      />
                      <path
                        d="M0 90 L67 85 L133 100 L200 75 L267 85 L333 70 L400 80"
                        stroke="#f59e0b"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="6 3"
                      />
                      <path
                        d="M0 100 L67 95 L133 80 L200 95 L267 65 L333 90 L400 85"
                        stroke="#10b981"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="3 3"
                      />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 text-[10px] text-muted-foreground">
                      <div className="flex justify-between">
                        {page.priceHistory.months.map((month) => (
                          <span key={month}>{month}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 border-t border-border pt-4">
                  {priceLegend.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-3 rounded-lg bg-secondary p-2"
                    >
                      <div className={`h-3 w-3 rounded-full ${item.color}`} />
                      <div className="flex h-6 items-center justify-center rounded bg-white px-1.5 py-0.5">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-4 w-10 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="flex-1 text-xs">{item.name}</span>
                      <span className="text-sm font-semibold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-4 text-center">
                  <div className="ih-text-gradient text-3xl font-bold">
                    {page.priceHistory.historyBadge}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {page.priceHistory.historyBadgeLabel}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="precificacao"
        className="relative overflow-hidden bg-secondary/30 py-24"
      >
        <div className="ih-bg-gradient-glow absolute inset-0 opacity-30" />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1">
              <DollarSign className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {page.pricing.eyebrow}
              </span>
            </div>
            <h2 className="ih-section-title mb-4">{page.pricing.title}</h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.pricing.description}
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl items-start gap-8 xl:grid-cols-2">
            <div className="ih-shell ih-shadow-elevated rounded-[32px] border border-border p-8">
              <div className="mb-6">
                <h3 className="ih-card-title mb-2">
                  {page.pricing.panelTitle}
                </h3>
                <p className="ih-card-copy">{page.pricing.panelDescription}</p>
              </div>
              <div className="rounded-xl bg-secondary p-4">
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src="https://t2.tudocdn.net/655954?w=147&h=304"
                    alt={page.pricing.sampleProductAlt}
                    className="h-16 w-16 rounded-md border border-border object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="flex-1">
                    <p className="font-medium">
                      {page.pricing.sampleProductName}
                    </p>
                    <span className="text-sm text-muted-foreground">
                      {page.pricing.basePriceLabel}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  {pricingItems.map((item) => (
                    <div
                      key={item.marketplace}
                      className="grid grid-cols-[auto,minmax(0,1fr)] items-center gap-2 rounded-lg bg-background/50 p-2 sm:grid-cols-[auto,minmax(0,1fr),auto,auto] sm:gap-3"
                    >
                      <div className="flex h-7 w-12 items-center justify-center rounded border border-border bg-white px-1.5 py-0.5">
                        <img
                          src={item.logo}
                          alt={item.marketplace}
                          className="h-4 w-10 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="min-w-0 text-xs text-muted-foreground">
                        {item.marketplace}
                      </span>
                      <div className="flex items-center gap-1 text-sm font-medium">
                        {item.adjustment > 0 ? (
                          <>
                            <TrendingUp className="h-4 w-4 text-green-500" />
                            <span className="text-green-500">
                              +{item.adjustment}%
                            </span>
                          </>
                        ) : (
                          <>
                            <TrendingDown className="h-4 w-4 text-amber-500" />
                            <span className="text-amber-500">
                              {item.adjustment}%
                            </span>
                          </>
                        )}
                      </div>
                      <span className="justify-self-end font-semibold sm:justify-self-auto">
                        {formatPrice(locale, item.final)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {pricingBenefits.map((item) => (
                <div
                  key={item.title}
                  className="ih-shell-soft flex gap-4 rounded-[24px] border border-border p-5"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <item.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="ih-card-title mb-1">{item.title}</h3>
                    <p className="ih-card-copy">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="recursos" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="ih-section-title mb-4">{page.features.title}</h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.features.description}
            </p>
          </div>
          <EmblaCarousel
            items={featureItems}
            slidesPerView="basis-[85%] sm:basis-[60%] md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            prevClickEvent="integration_hub_click_recursos_carrossel_anterior"
            nextClickEvent="integration_hub_click_recursos_carrossel_proximo"
            renderItem={(item) => (
              <div className="ih-shell-soft ih-card-hover group h-full min-w-0 rounded-[24px] border border-border p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="ih-card-title mb-2 break-words">{item.title}</h3>
                <p className="ih-card-copy break-words">{item.description}</p>
              </div>
            )}
          />
        </div>
      </section>

      <section id="diferenciais" className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="ih-section-title mb-4">
              {page.differentiators.title}
            </h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.differentiators.description}
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {page.differentiators.items.map((item) => (
              <div
                key={item.title}
                className="ih-shell-soft flex min-w-0 gap-4 rounded-[24px] border border-border p-5"
              >
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="ih-card-title mb-2 break-words">
                    {item.title}
                  </h3>
                  <p className="ih-card-copy break-words">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="beneficios-negocio" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16 text-center">
            <h2 className="ih-section-title mb-4">
              {page.businessBenefits.title}
            </h2>
            <p className="ih-section-copy mx-auto max-w-2xl">
              {page.businessBenefits.description}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {businessBenefits.map((item) => (
              <div
                key={item.title}
                className="ih-shell-soft ih-card-hover group min-w-0 rounded-[30px] border border-border p-8 text-center"
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <item.Icon className="h-7 w-7 text-primary" />
                </div>
                <div className="ih-text-gradient mb-1 text-4xl font-bold">
                  {item.highlight}
                </div>
                <div className="mb-4 text-sm text-muted-foreground">
                  {item.highlightLabel}
                </div>
                <h3 className="ih-card-title mb-3 break-words">{item.title}</h3>
                <p className="ih-card-copy break-words">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="seguranca" className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="ih-section-title mb-6">{page.security.title}</h2>
            <p className="ih-section-copy mb-8 max-w-3xl">
              {page.security.description}
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {securityItems.map((item) => (
                <div
                  key={item.title}
                  className="ih-shell-soft flex min-w-0 gap-4 rounded-[24px] border border-border p-5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                    <item.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="ih-card-title mb-1 break-words">
                      {item.title}
                    </h3>
                    <p className="ih-card-copy break-words">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="ih-shell rounded-[32px] border border-border p-8 md:p-10">
            <div className="mb-10 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              <div className="min-w-0 md:col-span-2">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-2xl border border-white/60 bg-white/80 p-2">
                    <img
                      src={integrationHubLogo}
                      alt="Incenti Tech"
                      className="h-12 w-12 rounded-xl object-contain"
                    />
                  </div>
                  <div className="min-w-0 leading-tight">
                    <p className="break-words text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {productLabel}
                    </p>
                    <p className="break-words font-heading text-2xl font-semibold tracking-[-0.04em]">
                      Integration Hub
                    </p>
                  </div>
                </div>
                <p className="mb-6 max-w-sm text-muted-foreground">
                  {page.footer.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {page.footer.tagline}
                </p>
              </div>
              <div className="min-w-0">
                <h4 className="mb-4 break-words text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {page.footer.product}
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a
                      href="#recursos"
                      data-ga-click="integration_hub_click_footer_recursos"
                      data-ga-page="integration_hub"
                      data-ga-section="footer"
                      data-ga-label={page.nav.features}
                      className="ih-footer-link"
                    >
                      {page.nav.features}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#diferenciais"
                      data-ga-click="integration_hub_click_footer_diferenciais"
                      data-ga-page="integration_hub"
                      data-ga-section="footer"
                      data-ga-label={page.nav.differentiators}
                      className="ih-footer-link"
                    >
                      {page.nav.differentiators}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#seguranca"
                      data-ga-click="integration_hub_click_footer_seguranca"
                      data-ga-page="integration_hub"
                      data-ga-section="footer"
                      data-ga-label={page.nav.security}
                      className="ih-footer-link"
                    >
                      {page.nav.security}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="min-w-0">
                <h4 className="mb-4 break-words text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {page.footer.contact}
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a
                      href="#contato"
                      data-ga-click="integration_hub_click_footer_contato"
                      data-ga-page="integration_hub"
                      data-ga-section="footer"
                      data-ga-label={page.nav.contact}
                      className="ih-footer-link"
                    >
                      {page.nav.contact}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      data-ga-click="integration_hub_click_footer_email"
                      data-ga-page="integration_hub"
                      data-ga-section="footer"
                      data-ga-label={CONTACT_EMAIL}
                      className="ih-footer-link block break-all sm:break-normal"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <a
                      href={CONTACT_WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      data-ga-click="integration_hub_click_footer_whatsapp"
                      data-ga-page="integration_hub"
                      data-ga-section="footer"
                      data-ga-label={CONTACT_PHONE_DISPLAY}
                      className="ih-footer-link"
                    >
                      {CONTACT_PHONE_DISPLAY}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
              <p>{page.footer.rights}</p>
              <div className="flex gap-6">
                <span>{page.footer.privacy}</span>
                <span>{page.footer.terms}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntegrationHub;
