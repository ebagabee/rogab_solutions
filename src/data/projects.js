export const projects = [
  {
    slug: "finn",
    name: "Finn",
    shortDescription: "App de controle financeiro para MEIs e autônomos",
    category: "Mobile App",
    description: `Finn é um aplicativo mobile voltado para microempreendedores individuais e autônomos que precisam organizar suas finanças de forma simples e eficiente.
O app permite registrar entradas e saídas, categorizar despesas, gerar relatórios mensais e acompanhar o fluxo de caixa em tempo real.`,
    tags: ["Finanças", "MEI", "Mobile", "iOS", "Android"],
    techs: ["React Native", "Node.js", "PostgreSQL"],
    challenge: "Criar uma experiência mobile intuitiva para quem não tem familiaridade com gestão financeira, transformando dados complexos em visualizações simples e acionáveis.",
    images: [],
  },
  {
    slug: "apolocao",
    name: "Apolocão",
    shortDescription: "Aplicativo completo para gestão e agendamento em petshops",
    category: "Mobile App",
    description: `Apolocão é um aplicativo de petshop que conecta tutores e estabelecimentos, facilitando o agendamento de banho e tosa, consultas veterinárias e compra de produtos.
O app oferece histórico de atendimentos, lembretes de vacinas e um catálogo completo de produtos para o pet.`,
    tags: ["Petshop", "Agendamento", "Mobile", "E-commerce"],
    techs: ["React Native", "Node.js", "MySQL"],
    challenge: "Unificar em um único app o agendamento de serviços, venda de produtos e histórico de saúde do pet, oferecendo uma experiência fluida tanto para tutores quanto para os estabelecimentos.",
    images: [],
  },
  {
    slug: "snapmenu",
    name: "SnapMenu",
    shortDescription: "Cardápio digital e gestão de pedidos para restaurantes",
    category: "Web App / Mobile",
    description: `SnapMenu é uma solução completa para restaurantes e lanchonetes gerenciarem seus cardápios de forma digital e receberem pedidos diretamente pela plataforma.
Clientes acessam o cardápio via QR Code, fazem pedidos e acompanham o status em tempo real. O estabelecimento gerencia tudo por um painel administrativo intuitivo.`,
    tags: ["Restaurante", "QR Code", "Pedidos", "Web", "Mobile"],
    techs: ["React", "React Native", "Node.js", "WebSocket", "PostgreSQL"],
    challenge: "Sincronizar pedidos em tempo real entre o cliente, o caixa e a cozinha, reduzindo erros e o tempo de atendimento sem necessidade de impressoras ou sistemas legados.",
    images: [],
  },
  {
    slug: "nutriplus",
    name: "Nutri+",
    shortDescription: "Plataforma para nutricionistas gerenciarem pacientes e planos alimentares",
    category: "Web App",
    description: `Nutri+ é uma plataforma web desenvolvida para nutricionistas que precisam gerenciar consultas, pacientes e planos alimentares de forma centralizada.
Inclui montagem de dietas personalizadas, acompanhamento de evolução, relatórios nutricionais e comunicação direta com o paciente via chat integrado.`,
    tags: ["Saúde", "Nutrição", "Gestão", "Web"],
    techs: ["React", "Node.js", "PostgreSQL"],
    challenge: "Digitalizar o fluxo de trabalho de nutricionistas independentes, que antes dependiam de planilhas e documentos avulsos, centralizando tudo em um ambiente seguro e fácil de usar.",
    images: [],
  },
  {
    slug: "trackfit",
    name: "TrackFit",
    shortDescription: "App de acompanhamento de treinos e evolução física",
    category: "Mobile App",
    description: `TrackFit é um aplicativo mobile para quem pratica atividades físicas e quer acompanhar sua evolução de forma detalhada.
O app permite criar planos de treino, registrar séries e repetições, monitorar medidas corporais e visualizar gráficos de progresso ao longo do tempo.`,
    tags: ["Saúde", "Fitness", "Treino", "Mobile", "iOS", "Android"],
    techs: ["React Native", "Node.js", "SQLite"],
    challenge: "Criar uma experiência mobile rápida e offline-first, permitindo que o usuário registre treinos mesmo sem conexão com a internet, sincronizando os dados quando a rede estiver disponível.",
    images: [],
  },
  {
    slug: "valore",
    name: "Valore",
    shortDescription: "Marketplace de compra e venda de imóveis com tour virtual",
    category: "Plataforma Web",
    description: `Valore é um marketplace imobiliário que conecta compradores, vendedores e corretores em uma plataforma moderna e transparente.
Diferencial: suporte a tour virtual 360°, filtros avançados de busca, comparativo de imóveis e sistema de proposta integrado.`,
    tags: ["Imóveis", "Marketplace", "Tour Virtual", "Web"],
    techs: ["React", "Node.js", "PostgreSQL", "AWS S3"],
    challenge: "Desenvolver um marketplace com múltiplos perfis de usuário — comprador, vendedor e corretor — cada um com fluxos distintos, mantendo a experiência simples e a navegação intuitiva.",
    images: [],
  },
]
