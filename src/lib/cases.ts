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

export const caseStudies: CaseStudy[] = [
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
