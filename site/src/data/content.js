export const company = {
  name: 'Química Industrial e Serviços Maruim',
  shortName: 'Química Maruim',
  founded: 2018,
  cnpj: '30.116.770/0001-65',
  address: 'Estrada Municipal de Maruim ao Pov. Mata, s/n',
  city: 'Maruim/SE',
  cep: '49770-000',
  email: 'quimicaindustrialeservico@gmail.com',
  phone: '(79) 99680-4296',
  phoneDigits: '5579996804296',
  logo: '/images/logo/logo.jpeg',
}

export const seo = {
  siteUrl: 'https://quimicaindustrial.vercel.app',
  title: 'Química Industrial e Serviços Maruim | Obras civis e industriais em Sergipe',
  description:
    'Obras civis, industriais, caldeiraria e montagem mecânica em Maruim/SE. Qualidade, confiabilidade e solidez desde 2018. Solicite um orçamento.',
  ogImage: '/images/galeria/planta-industrial.jpg',
}

export const whatsappUrl = (message) => {
  const text = encodeURIComponent(
    message ||
      'Olá! Gostaria de solicitar um orçamento da Química Industrial e Serviços Maruim.',
  )
  return `https://wa.me/${company.phoneDigits}?text=${text}`
}

export const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
]

export const values = [
  {
    title: 'Qualidade',
    text: 'Mão de obra especializada e execução com alto padrão técnico em cada etapa da obra.',
  },
  {
    title: 'Confiabilidade',
    text: 'Compromisso com prazos, segurança e transparência no relacionamento com o cliente.',
  },
  {
    title: 'Solidez',
    text: 'Estrutura financeira e operacional estável para atender obras civis e industriais.',
  },
]

export const services = [
  {
    id: 'civil',
    title: 'Civil',
    lead: 'Obras, reformas e manutenção predial com equipe própria.',
    items: [
      'Construção em geral',
      'Reforma estrutural',
      'Pinturas em geral',
      'Pisos e revestimentos',
      'Drywall e gesso',
      'Elétrica e hidráulica',
      'Impermeabilização',
      'Manutenção e instalação',
      'Limpeza em geral',
    ],
  },
  {
    id: 'industrial',
    title: 'Industrial',
    lead: 'Caldeiraria, montagem mecânica e infraestrutura de planta.',
    items: [
      'Construção em geral e galpão',
      'Reformas em geral',
      'Manutenção de telhados',
      'Impermeabilização industrial',
      'Pintura industrial',
      'Sinalização de linhas',
      'Caldeiraria',
      'Montagem em geral',
      'Isolamento',
    ],
  },
  {
    id: 'outros',
    title: 'Outros',
    lead: 'Apoio técnico para decisão, projeto e regularização.',
    items: [
      'Laudos técnicos',
      'Projetos arquitetônicos',
      'Avaliação de imóveis urbanos',
    ],
  },
]

export const gallery = [
  {
    src: '/images/galeria/esmerilhamento.jpg',
    alt: 'Esmerilhamento em equipamento industrial',
    category: 'industrial',
    label: 'Caldeiraria',
    crop: 'top',
  },
  {
    src: '/images/galeria/vasos-tubulacao.jpg',
    alt: 'Montagem de vasos e tubulação',
    category: 'industrial',
    label: 'Montagem mecânica',
    crop: 'center',
  },
  {
    src: '/images/galeria/redutor-montagem.jpg',
    alt: 'Montagem de redutor industrial',
    category: 'industrial',
    label: 'Montagem mecânica',
    crop: 'center',
  },
  {
    src: '/images/galeria/gearbox-instalacao.jpg',
    alt: 'Instalação de caixa de redução em planta',
    category: 'industrial',
    label: 'Montagem industrial',
    crop: 'center',
  },
  {
    src: '/images/galeria/planta-industrial.jpg',
    alt: 'Planta industrial e forno rotativo',
    category: 'industrial',
    label: 'Infraestrutura industrial',
    crop: 'center',
  },
  {
    src: '/images/galeria/vasos-pressao.jpg',
    alt: 'Vasos de pressão e estrutura metálica',
    category: 'industrial',
    label: 'Caldeiraria',
    crop: 'center',
  },
  {
    src: '/images/galeria/estrutura-metalica.jpg',
    alt: 'Fabricação de estrutura metálica',
    category: 'industrial',
    label: 'Estrutura metálica',
    crop: 'top',
  },
  {
    src: '/images/galeria/pintura-predial.jpg',
    alt: 'Pintura predial com equipe uniformizada',
    category: 'civil',
    label: 'Pintura',
    crop: 'top',
  },
  {
    src: '/images/galeria/recuperacao-estrutural.jpg',
    alt: 'Recuperação estrutural de concreto',
    category: 'civil',
    label: 'Recuperação estrutural',
    crop: 'bottom-hide',
  },
  {
    src: '/images/galeria/equipe-andaime.jpg',
    alt: 'Equipe em andaime em fachada industrial',
    category: 'civil',
    label: 'Manutenção civil',
    crop: 'top',
  },
  {
    src: '/images/galeria/plataforma-elevatoria.jpg',
    alt: 'Manutenção em plataforma elevatória',
    category: 'civil',
    label: 'Manutenção em altura',
    crop: 'top',
  },
  {
    src: '/images/galeria/estrutura-armadura.jpg',
    alt: 'Recuperação de armadura em concreto',
    category: 'civil',
    label: 'Reforma estrutural',
    crop: 'center',
  },
  {
    src: '/images/galeria/equipe-plataforma.jpg',
    alt: 'Equipe em plataforma de trabalho aéreo',
    category: 'civil',
    label: 'Manutenção em altura',
    crop: 'top',
  },
  {
    src: '/images/galeria/manta-aplicacao.jpg',
    alt: 'Aplicação de manta asfáltica',
    category: 'impermeabilizacao',
    label: 'Impermeabilização',
    crop: 'top',
  },
  {
    src: '/images/galeria/manta-arremate.jpg',
    alt: 'Arremate de manta asfáltica',
    category: 'impermeabilizacao',
    label: 'Impermeabilização',
    crop: 'bottom-hide',
  },
  {
    src: '/images/galeria/manta-coluna.jpg',
    alt: 'Impermeabilização na base de coluna',
    category: 'impermeabilizacao',
    label: 'Impermeabilização',
    crop: 'top',
  },
]

export const galleryFilters = [
  { id: 'todos', label: 'Todos' },
  { id: 'civil', label: 'Civil' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'impermeabilizacao', label: 'Impermeabilização' },
]

export const clients = [
  { name: 'Concrejato', src: '/images/clientes/concrejato.jpeg' },
  { name: 'SISA — Sergipe Industrial', src: '/images/clientes/sisa.jpeg' },
  { name: 'Rifertil Fertilizantes', src: '/images/clientes/rifertil.jpeg' },
  { name: 'Usi Fértil Adubos', src: '/images/clientes/usi-fertil.jpeg' },
  { name: 'Mizu Cimentos', src: '/images/clientes/mizu.jpeg' },
  { name: 'BioSafra Brasil', src: '/images/clientes/biosafra.jpeg' },
  { name: 'Indústrias Taquari', src: '/images/clientes/taquari.jpeg' },
  { name: 'Sabe Alimentos', src: '/images/clientes/sabe.jpeg' },
]
