import type { Locale } from "@/lib/siteContent";

export type CaseStudy = {
  slug: string;
  company: string;
  product: string;
  technologies: string[];
  duration: string;
  summary: string;
  fullText: string;
  featured?: boolean;
  featuredLabel?: string;
  images?: {
    src: string;
    alt: string;
  }[];
};

const portugueseCaseStudies: CaseStudy[] = [
  {
    slug: "confidencial",
    company: "Empresa Confidencial",
    product: "Catálogo de Prêmios",
    technologies: ["C#", "ASP.NET Web Forms"],
    duration: "2021 – atual",
    featured: true,
    featuredLabel: "Cliente ativo até hoje",
    summary:
      "Atuação contínua em desenvolvimento, evolução, integrações críticas e sustentação de um marketplace de incentivo altamente customizável.",
    fullText: `Empresa Confidencial
Catálogo de Prêmios (2021 – atual)
Tecnologias C# ASP.NET Web Forms

Desde 2021, atuamos de forma contínua no desenvolvimento, evolução e sustentação de um produto no modelo marketplace de incentivo (catálogo de prêmios) para uma empresa cujo nome não pode ser divulgado por questões contratuais. Ao longo desse período, nossa atuação foi estratégica e abrangente, envolvendo desde a implementação de novas funcionalidades até melhorias estruturais profundas na plataforma.

A solução, construída em C# com ASP.NET Web Forms, evoluiu significativamente com a introdução de componentes modulares e integrações avançadas, elevando o nível de flexibilidade, personalização e escalabilidade do sistema.

Entre as principais entregas e evoluções, destacam-se

 Sistema modular de menus por campanha, permitindo personalizar a navegação conforme regras específicas de cada ação de incentivo
 Sistema modular de pop-ups, oferecendo comunicação dinâmica e contextual com os usuários da plataforma
 Sistema completo de “Fale Conosco”, estruturado com gestão por cards, status de atendimento e chat direto entre operador e cliente — muito além de soluções simples baseadas apenas em envio de e-mails
 Funcionalidade de lista de desejos, aumentando o engajamento dos participantes
 Integração de eventos com Google Analytics, ampliando a capacidade de análise comportamental e tomada de decisão orientada por dados
 Integração com Google reCAPTCHA, reforçando a segurança no processo de autenticação
 Implementação de sessões mutuamente exclusivas, garantindo maior controle e segurança no acesso dos usuários

Além disso, realizamos integrações críticas com parceiros e serviços estratégicos do mercado, incluindo

 Integração com a API B2B do Magazine Luiza
 Integração com APIs da Celcoin, incluindo pagamentos via PIX e emissão de boleto bancário
 Integração com serviços da Amazon Web Services, incluindo S3, Secret Manager e Lambda
 Integração com a plataforma de comunicação da Twilio, habilitando envios e interações via WhatsApp

O sistema também passou por diversas melhorias no fluxo de resgates personalizados, tornando o processo mais eficiente, rastreável e adaptável às demandas específicas dos usuários.

Paralelamente, conduzimos um trabalho contínuo de evolução técnica, incluindo

 Melhorias gerais de segurança, fortalecendo a proteção de dados e acessos
 Otimizações de performance, garantindo maior rapidez e estabilidade
 Ações de estabilidade e correção de bugs, elevando a confiabilidade da plataforma
 Aprimoramentos em funcionalidades internas e no sistema administrativo do catálogo

Além do desenvolvimento, nossa atuação incluiu a sustentação completa da plataforma, assegurando seu funcionamento contínuo, bem como consultoria técnica estratégica, contribuindo para decisões de evolução do produto e alinhamento com as melhores práticas do mercado.

O resultado é uma plataforma robusta, altamente customizável e em constante evolução, que atende com eficiência às demandas de um ambiente complexo de campanhas de incentivo, mantendo altos padrões de qualidade, segurança e desempenho ao longo dos anos.`,
  },
  {
    slug: "blux",
    company: "Blux",
    product: "Blux Prize",
    technologies: ["C#", "Vue"],
    duration: "2024 · 2 meses",
    summary:
      "MVP de marketplace completo para campanhas de incentivo, com sistema administrativo, resgates personalizados e integrações com grandes fornecedores.",
    fullText: `**Blux**
*Blux Prize (2024)*
*Tecnologias: C# e Vue*

Em 2024, desenvolvemos para a Blux o **Blux Prize**, um projeto estratégico com duração de **2 meses**, focado na criação de um ecossistema próprio para campanhas de incentivo. Antes da nossa atuação, a empresa utilizava um marketplace white-label genérico de terceiros, que, embora atendesse parcialmente às necessidades básicas, apresentava limitações significativas em termos de personalização, controle e evolução do produto.

Com esse cenário, foi idealizado e entregue um **MVP de um marketplace completo para campanhas de incentivo**, integrado a um sistema administrativo robusto. A solução foi desenvolvida utilizando **C# no back-end** e **Vue.js no front-end**, garantindo desempenho, escalabilidade e uma experiência moderna para usuários e administradores.

O sistema contemplava todas as funcionalidades essenciais de uma plataforma desse segmento, incluindo:

* **Sistema de pontuação e recompensas**, permitindo engajar participantes de forma dinâmica
* **Gestão de resgates**, com acompanhamento completo do ciclo de pedidos
* **Tracking detalhado**, oferecendo transparência e controle sobre cada interação
* **Campanhas personalizadas**, adaptáveis às estratégias de incentivo da empresa

Um dos grandes diferenciais da solução foi o módulo de **resgates personalizados**, que possibilita ao participante solicitar prêmios não disponíveis no catálogo padrão — como veículos, viagens ou experiências exclusivas. A partir dessa solicitação, um operador da Blux realiza a cotação e viabiliza a entrega, elevando significativamente o nível de personalização e valor percebido da plataforma.

Além disso, o sistema contava com **integração com grandes fornecedores do mercado**, como Magazine Luiza, Casas Bahia, Extra e Ponto, entre outros. Essa conectividade ampliava significativamente o catálogo de produtos disponíveis, garantindo mais variedade, competitividade de preços e agilidade nos processos de resgate.

Complementando o ecossistema, o sistema administrativo oferecia controle total da operação, permitindo o gerenciamento de:

* Campanhas
* Participantes
* Fornecedores
* Produtos
* Resgates (padrão e personalizados)

Além disso, a plataforma incluía uma ampla gama de **relatórios e análises**, fornecendo insights estratégicos que auxiliam na tomada de decisão e na otimização contínua das campanhas.

Outro ponto relevante do projeto foi a atuação coordenada de uma equipe ampliada: contamos com **desenvolvedores adicionais, contratados sob demanda**, para acelerar entregas e garantir a qualidade do produto dentro do prazo estabelecido.

O resultado final foi uma solução sob medida, que substituiu completamente a dependência de ferramentas genéricas, oferecendo à Blux autonomia, flexibilidade e um diferencial competitivo claro no mercado de campanhas de incentivo.`,
  },
  {
    slug: "connect-parts",
    company: "Connect Parts",
    product: "Sistema de Compras",
    technologies: ["Python", "Vue"],
    duration: "2021 · 1 ano",
    summary:
      "Sistema administrativo interno para compras, substituindo planilhas, VBA e processos manuais por uma operação automatizada e integrada.",
    fullText: `Connect Parts
Sistema de Compras (2021)
Tecnologias: Python e Vue

Em 2021, desenvolvemos para a Connect Parts um sistema administrativo interno robusto, projetado para transformar e otimizar a rotina da equipe de compras. Antes da implementação da solução, a empresa operava com planilhas combinadas a rotinas em VBA e forte dependência de processos manuais, o que tornava o fluxo suscetível a erros, retrabalho e baixa escalabilidade.

Com uma duração total de 1 ano, o projeto teve como objetivo substituir esse modelo operacional por uma plataforma moderna, automatizada e altamente eficiente. Desenvolvido com Python no back-end e Vue.js no front-end, o sistema oferece uma interface intuitiva e dinâmica, centralizando a gestão de produtos, controle de estoque e análise de demanda em um único ambiente.

A automação desses processos eliminou tarefas repetitivas e reduziu significativamente a intervenção manual, resultando em um expressivo ganho de eficiência e redução de custos operacionais. Além disso, o sistema passou a fornecer insights de performance estratégicos, permitindo uma visão mais clara sobre o comportamento dos produtos e apoiando decisões mais assertivas por parte da equipe.

Outro destaque importante foi a integração com o sistema KPL Ábacos Onclick, garantindo consistência de dados e fluidez entre diferentes áreas da operação. Essa conectividade ampliou ainda mais o valor da solução, promovendo uma gestão mais unificada e inteligente.

O resultado final foi uma plataforma que não apenas modernizou o processo de compras da Connect Parts, mas também elevou o nível de maturidade operacional da empresa, impulsionando sua capacidade de crescimento com mais controle, precisão e competitividade.`,
  },
  {
    slug: "dellaquino",
    company: "Dellaquino Seguros",
    product: "Sistema de Administração e Cotação de Áreas Seguradas",
    technologies: ["Sistema web", "Google Earth"],
    duration: "2022 · 3 meses",
    summary:
      "Plataforma para cotação de áreas seguradas, com delimitação geográfica, cálculo automatizado em tempo real e gestão completa da operação.",
    images: [
      {
        src: "/cases/dellaquino-principal.jpg",
        alt: "Tela principal do sistema Dellaquino com mapa de área segurada",
      },
      {
        src: "/cases/dellaquino-4.jpg",
        alt: "Tela do sistema Dellaquino com formulário de área segurada",
      },
      {
        src: "/cases/dellaquino-3.jpg",
        alt: "Tela do sistema Dellaquino com seleção em formulário",
      },
      {
        src: "/cases/dellaquino-2.jpg",
        alt: "Tela do sistema Dellaquino com seleção de dados",
      },
      {
        src: "/cases/dellaquino-1.jpg",
        alt: "Tela administrativa do sistema Dellaquino",
      },
    ],
    fullText: `Dellaquino Seguros
Sistema de Administração e Cotação de Áreas Seguradas (2022)

Em 2022, desenvolvemos para a Dellaquino Seguros uma solução tecnológica inovadora voltada à otimização do processo de cotação de áreas seguradas. Antes da implementação, a empresa combinava operações manuais com ferramentas pontuais para delimitação de áreas, enquanto o cálculo da cotação era realizado manualmente por um operador — um fluxo suscetível a inconsistências, retrabalho e baixa eficiência.

Com uma duração total de 3 meses, o projeto teve como objetivo centralizar e automatizar todo esse processo em uma única plataforma integrada. O sistema passou a oferecer uma experiência fluida e inteligente, permitindo que usuários delimitem áreas diretamente com o apoio de integração ao Google Earth, obtendo dados geográficos precisos de forma rápida e visual.

Um dos principais diferenciais da solução é o cálculo automatizado do custo do seguro em tempo real. A partir das informações coletadas — como dimensão da área e critérios de risco — o sistema processa instantaneamente os valores, eliminando a necessidade de intervenção manual e aumentando significativamente a confiabilidade das cotações.

Além disso, a plataforma foi expandida para atuar como um sistema completo de gestão, incluindo funcionalidades como gerenciamento de clientes, controle de seguros fechados, e a possibilidade de edição e renegociação de contratos diretamente no sistema. Essa centralização trouxe mais organização, rastreabilidade e agilidade para a operação.

O resultado foi uma solução que não apenas automatizou tarefas críticas, mas também elevou o padrão de eficiência da Dellaquino Seguros, proporcionando mais controle, escalabilidade e qualidade no atendimento aos clientes.`,
  },
];

const englishCaseStudies: CaseStudy[] = [
  {
    slug: "confidential",
    company: "Confidential Company",
    product: "Rewards Catalog",
    technologies: ["C#", "ASP.NET Web Forms"],
    duration: "2021 - present",
    featured: true,
    featuredLabel: "Active client to this day",
    summary:
      "Continuous work on development, evolution, critical integrations, and support for a highly customizable incentive marketplace.",
    fullText: `Confidential Company
Rewards Catalog (2021 - present)
Technologies C# ASP.NET Web Forms

Since 2021, we have continuously worked on the development, evolution, and support of an incentive marketplace product (rewards catalog) for a company whose name cannot be disclosed for contractual reasons. Throughout this period, our work has been strategic and broad, ranging from the implementation of new features to deep structural improvements in the platform.

The solution, built in C# with ASP.NET Web Forms, evolved significantly with the introduction of modular components and advanced integrations, increasing the system's flexibility, customization, and scalability.

Among the main deliveries and evolutions, the following stand out

 Modular menu system by campaign, allowing navigation to be customized according to the specific rules of each incentive initiative
 Modular pop-up system, enabling dynamic and contextual communication with platform users
 Complete “Contact Us” system, structured with card management, service status, and direct chat between operator and client — far beyond simple email-only solutions
 Wishlist functionality, increasing participant engagement
 Google Analytics event integration, expanding behavioral analysis and data-driven decision-making capabilities
 Google reCAPTCHA integration, strengthening security in the authentication process
 Implementation of mutually exclusive sessions, ensuring greater control and security for user access

In addition, we delivered critical integrations with strategic market partners and services, including

 Integration with Magazine Luiza's B2B API
 Integration with Celcoin APIs, including PIX payments and bank slip issuance
 Integration with Amazon Web Services, including S3, Secret Manager, and Lambda
 Integration with Twilio's communication platform, enabling WhatsApp sends and interactions

The system also received several improvements in the personalized redemption flow, making the process more efficient, traceable, and adaptable to users' specific needs.

In parallel, we conducted continuous technical evolution work, including

 General security improvements, strengthening data and access protection
 Performance optimizations, ensuring greater speed and stability
 Stability actions and bug fixes, increasing platform reliability
 Enhancements to internal features and to the catalog administration system

Beyond development, our work included complete platform support, ensuring continuous operation, as well as strategic technical consulting, contributing to product evolution decisions and alignment with market best practices.

The result is a robust, highly customizable, and constantly evolving platform that efficiently serves the demands of a complex incentive campaign environment, maintaining high standards of quality, security, and performance over the years.`,
  },
  {
    slug: "blux",
    company: "Blux",
    product: "Blux Prize",
    technologies: ["C#", "Vue"],
    duration: "2024 / 2 months",
    summary:
      "MVP of a complete marketplace for incentive campaigns, with an admin system, personalized redemptions, and integrations with major suppliers.",
    fullText: `**Blux**
*Blux Prize (2024)*
*Technologies: C# and Vue*

In 2024, we developed **Blux Prize** for Blux, a strategic project lasting **2 months**, focused on creating the company's own ecosystem for incentive campaigns. Before our work, the company used a generic third-party white-label marketplace that, while partially meeting basic needs, had significant limitations in terms of customization, control, and product evolution.

Given this scenario, we designed and delivered an **MVP of a complete marketplace for incentive campaigns**, integrated with a robust administrative system. The solution was developed using **C# on the back end** and **Vue.js on the front end**, ensuring performance, scalability, and a modern experience for users and administrators.

The system covered all essential features for this type of platform, including:

* **Points and rewards system**, enabling dynamic participant engagement
* **Redemption management**, with full tracking of the order cycle
* **Detailed tracking**, providing transparency and control over each interaction
* **Personalized campaigns**, adaptable to the company's incentive strategies

One of the solution's major differentiators was the **personalized redemption** module, which allows participants to request rewards not available in the standard catalog — such as vehicles, trips, or exclusive experiences. From that request, a Blux operator performs the quotation and enables delivery, significantly increasing the platform's personalization and perceived value.

In addition, the system included **integration with major market suppliers**, such as Magazine Luiza, Casas Bahia, Extra, and Ponto, among others. This connectivity significantly expanded the available product catalog, ensuring more variety, competitive pricing, and agility in redemption processes.

Completing the ecosystem, the administrative system provided full operational control, allowing management of:

* Campaigns
* Participants
* Suppliers
* Products
* Redemptions (standard and personalized)

The platform also included a broad set of **reports and analytics**, providing strategic insights that support decision-making and continuous campaign optimization.

Another relevant point in the project was the coordinated work of an expanded team: we brought in **additional developers, hired on demand**, to accelerate deliveries and ensure product quality within the established timeline.

The final result was a tailored solution that completely replaced the dependence on generic tools, giving Blux autonomy, flexibility, and a clear competitive advantage in the incentive campaign market.`,
  },
  {
    slug: "connect-parts",
    company: "Connect Parts",
    product: "Purchasing System",
    technologies: ["Python", "Vue"],
    duration: "2021 / 1 year",
    summary:
      "Internal administrative system for purchasing, replacing spreadsheets, VBA routines, and manual processes with an automated and integrated operation.",
    fullText: `Connect Parts
Purchasing System (2021)
Technologies: Python and Vue

In 2021, we developed a robust internal administrative system for Connect Parts, designed to transform and optimize the purchasing team's routine. Before the solution was implemented, the company operated with spreadsheets combined with VBA routines and a strong dependence on manual processes, making the flow vulnerable to errors, rework, and low scalability.

With a total duration of 1 year, the project aimed to replace that operating model with a modern, automated, and highly efficient platform. Developed with Python on the back end and Vue.js on the front end, the system provides an intuitive and dynamic interface, centralizing product management, inventory control, and demand analysis in a single environment.

Automating these processes eliminated repetitive tasks and significantly reduced manual intervention, resulting in a major efficiency gain and reduced operating costs. In addition, the system began providing strategic performance insights, enabling a clearer view of product behavior and supporting more accurate decisions by the team.

Another important highlight was the integration with the KPL Ábacos Onclick system, ensuring data consistency and fluidity between different areas of the operation. This connectivity further increased the solution's value, promoting more unified and intelligent management.

The final result was a platform that not only modernized Connect Parts' purchasing process, but also raised the company's operational maturity, increasing its ability to grow with more control, precision, and competitiveness.`,
  },
  {
    slug: "dellaquino",
    company: "Dellaquino Seguros",
    product: "Insured Area Administration and Quotation System",
    technologies: ["Web system", "Google Earth"],
    duration: "2022 / 3 months",
    summary:
      "Platform for quoting insured areas, with geographic delimitation, real-time automated calculation, and full operation management.",
    images: [
      {
        src: "/cases/dellaquino-principal.jpg",
        alt: "Main Dellaquino system screen with insured area map",
      },
      {
        src: "/cases/dellaquino-4.jpg",
        alt: "Dellaquino system screen with insured area form",
      },
      {
        src: "/cases/dellaquino-3.jpg",
        alt: "Dellaquino system screen with form selection",
      },
      {
        src: "/cases/dellaquino-2.jpg",
        alt: "Dellaquino system screen with data selection",
      },
      {
        src: "/cases/dellaquino-1.jpg",
        alt: "Dellaquino system administrative screen",
      },
    ],
    fullText: `Dellaquino Seguros
Insured Area Administration and Quotation System (2022)

In 2022, we developed an innovative technology solution for Dellaquino Seguros focused on optimizing the quotation process for insured areas. Before implementation, the company combined manual operations with isolated tools for area delimitation, while quotation calculation was performed manually by an operator — a flow prone to inconsistencies, rework, and low efficiency.

With a total duration of 3 months, the project aimed to centralize and automate this entire process in a single integrated platform. The system began offering a fluid and intelligent experience, allowing users to delimit areas directly with Google Earth integration support, obtaining precise geographic data quickly and visually.

One of the solution's main differentiators is the automated calculation of insurance cost in real time. Based on collected information — such as area size and risk criteria — the system instantly processes values, eliminating the need for manual intervention and significantly increasing quotation reliability.

In addition, the platform was expanded to function as a complete management system, including features such as customer management, control of closed insurance policies, and the ability to edit and renegotiate contracts directly in the system. This centralization brought more organization, traceability, and agility to the operation.

The result was a solution that not only automated critical tasks, but also raised Dellaquino Seguros' efficiency standard, providing more control, scalability, and service quality for customers.`,
  },
];

export const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  "pt-BR": portugueseCaseStudies,
  en: englishCaseStudies,
};
