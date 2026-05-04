import lunnaChat        from '../assets/lunna/chat.png'
import lunnaEntry       from '../assets/lunna/entry.png'
import lunnaHome        from '../assets/lunna/home.png'
import lunnaProfile     from '../assets/lunna/profile.png'
import lunnaTransactions from '../assets/lunna/transaction_page.png'

import kizzoBooking from '../assets/kizzo/booking.png'
import kizzoLogin   from '../assets/kizzo/login.png'
import kizzoStart   from '../assets/kizzo/start.png'

import dtecDashboard from '../assets/dtec/dashboard.png'
import dtecWelcome   from '../assets/dtec/welcome.png'

import gcDashboard from '../assets/gc/dashboard.png'
import gcLogin     from '../assets/gc/login.png'

export const projects = [
  {
    slug: "lunna",
    name: "Lunna",
    shortDescription: "Gerenciamento de finanças pessoais com Chat IA integrado",
    category: "Web App",
    description: `Lunna é uma plataforma de gerenciamento financeiro pessoal que integra um assistente de IA conversacional.
O usuário pode adicionar, editar, visualizar e excluir transações financeiras diretamente pelo chat, criar metas financeiras e acompanhar sua evolução.`,
    tags: ["Finanças", "IA", "Chat", "Web"],
    techs: ["React", "Node.js", "IA Generativa"],
    challenge: "Criar uma experiência fluida onde o usuário gerencia suas finanças por linguagem natural, sem precisar navegar por formulários complexos.",
    images: [
      { src: lunnaHome,         label: "Dashboard"    },
      { src: lunnaChat,         label: "Chat IA"      },
      { src: lunnaTransactions, label: "Transações"   },
      { src: lunnaEntry,        label: "Entrada"      },
      { src: lunnaProfile,      label: "Perfil"       },
    ],
  },
  {
    slug: "kizzo",
    name: "Kizzo",
    shortDescription: "Plataforma de aluguel de imóveis dentro do ecossistema Kizzo",
    category: "Plataforma Web",
    description: `Kizzo é uma plataforma completa de aluguel de imóveis, funcionando como um ecossistema próprio.
Conecta proprietários e inquilinos em um ambiente controlado, com fluxos de contratação, visualização de imóveis e gestão de contratos.`,
    tags: ["Imóveis", "Marketplace", "Web"],
    techs: ["React", "Node.js", "PostgreSQL"],
    challenge: "Desenvolver um marketplace de imóveis com múltiplos perfis de usuário e fluxos distintos de contratação.",
    images: [
      { src: kizzoStart,   label: "Início"   },
      { src: kizzoLogin,   label: "Login"    },
      { src: kizzoBooking, label: "Reserva"  },
    ],
  },
  {
    slug: "dtec",
    name: "DTEC",
    shortDescription: "Plataforma de cotação de mercado entre fornecedores e compradores",
    category: "B2B / Web App",
    description: `DTEC é uma plataforma de cotação no modelo leilão reverso, conectando fornecedores e compradores de mercado.
Os compradores publicam demandas e fornecedores competem com propostas, garantindo melhores preços e condições.`,
    tags: ["B2B", "Cotação", "Leilão", "Web"],
    techs: ["React", "Node.js", "WebSocket"],
    challenge: "Implementar o modelo de leilão reverso em tempo real com notificações e atualização dinâmica de propostas.",
    images: [
      { src: dtecWelcome,   label: "Boas-vindas" },
      { src: dtecDashboard, label: "Dashboard"   },
    ],
  },
  {
    slug: "ginastica-do-cerebro",
    name: "Ginástica do Cérebro",
    shortDescription: "Sistema de gestão de franquia e franqueadoras da escola Ginástica do Cérebro",
    category: "Sistema Web",
    description: `Sistema desenvolvido para a rede de franquias Ginástica do Cérebro, permitindo a gestão centralizada de franqueadoras e franqueados.
Inclui controle de unidades, alunos, relatórios e comunicação entre os níveis da rede.`,
    tags: ["Franquia", "Educação", "Gestão", "Web"],
    techs: ["React", "Node.js", "MySQL"],
    challenge: "Criar uma hierarquia de permissões clara entre franqueadora, franqueado e operadores, com dashboards específicos para cada nível.",
    images: [
      { src: gcLogin,     label: "Login"     },
      { src: gcDashboard, label: "Dashboard" },
    ],
  },
]
