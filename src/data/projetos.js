export const projetos = [
  {
    id: 1,
    slug: 'analise-financeira',

    titulo: 'Dashboard de Análise Financeira',

    imagemCapa: '/projetos/Dashboard_de_Análise_Financeira.png',

    video: '/projetos/analise-financeira/demonstracao.mp4',

    resumo:
      'Dashboard financeiro desenvolvido para consolidar e analisar receitas, custos, despesas, lucro e margem, permitindo acompanhar a evolução mensal dos resultados e identificar os principais fatores que impactam o desempenho financeiro.',

    problema:
      'A análise financeira dependia de dados pouco organizados, dificultando a comparação entre receitas, custos, despesas e resultados ao longo do tempo.',

    objetivo:
      'Criar uma solução visual que permitisse acompanhar os principais indicadores financeiros e identificar variações mensais.',

    processo: [
      'Importação da base de dados em Excel',
      'Tratamento e padronização no Power Query',
      'Criação do modelo de dados em Star Schema',
      'Desenvolvimento das medidas em DAX',
      'Construção do layout e das visualizações no Power BI',
    ],

    indicadores: [
      'Receita total',
      'Custos',
      'Despesas',
      'Lucro'
    ],

    tecnologias: ['Excel', 'Power Query', 'Power BI', 'DAX', 'Star Schema'],

    aprendizados:
      'O projeto reforçou meus conhecimentos em modelagem dimensional, criação de métricas com DAX e organização visual de indicadores financeiros.',
  },

  {
    id: 2,
    slug: 'dashboard-vendas',

    titulo: 'Dashboard de Vendas',

    imagemCapa: '/projetos/Dashboard_de_Vendas.png',

    resumo:
      'Dashboard criado para acompanhar faturamento, produtos, regiões e desempenho comercial.',

    contexto:
      'O projeto apresenta uma visão consolidada do desempenho de vendas em diferentes períodos e mercados.',

    problema:
      'Os dados de vendas precisavam ser organizados para facilitar a análise de resultados por produto, região e período.',

    objetivo:
      'Permitir o acompanhamento dos principais indicadores comerciais em uma única interface.',

    processo: [
      'Importação dos dados',
      'Tratamento no Power Query',
      'Criação dos indicadores de vendas',
      'Construção das visualizações',
      'Validação dos resultados',
    ],

    indicadores: [
      'Faturamento',
      'Produto mais vendido',
      'Vendas por marca',
      'Vendas por continente',
      'Evolução mensal',
    ],

    tecnologias: ['Excel', 'Power Query', 'Power BI'],

    aprendizados:
      'O projeto permitiu praticar análise comercial e desenvolvimento de visualizações voltadas para acompanhamento de vendas.',

    galeria: ['/projetos/Dashboard_de_Vendas.png'],
  },

  {
    id: 3,
    slug: 'dashboard-producao',

    titulo: 'Dashboard de Produção',

    imagemCapa: '/projetos/Dashboard_de_Producao.png',

    resumo:
      'Dashboard desenvolvido para analisar produtividade, qualidade, aprovação e reprovação.',

    contexto:
      'O projeto foi criado para acompanhar os resultados de um processo produtivo.',

    problema:
      'Os dados de produção precisavam ser transformados em indicadores que facilitassem a identificação de problemas de qualidade e produtividade.',

    objetivo: 'Criar uma visão consolidada do desempenho da produção.',

    processo: [
      'Tratamento dos dados no Power Query',
      'Criação das métricas em DAX',
      'Definição dos indicadores',
      'Desenvolvimento das visualizações',
    ],

    indicadores: [
      'Total produzido',
      'Total aprovado',
      'Total reprovado',
      'Índice de qualidade',
      'Produtividade',
    ],

    tecnologias: ['Excel', 'Power Query', 'Power BI', 'DAX'],

    aprendizados:
      'O projeto ajudou a desenvolver minha capacidade de transformar dados operacionais em indicadores de acompanhamento.',

    galeria: ['/projetos/Dashboard_de_Producao.png'],
  },
];
