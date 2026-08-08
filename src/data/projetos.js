export const projetos = [
{
    id: 1,
    slug: 'logistics-operations-intelligence',

    titulo: 'Logistics Operations Intelligence',

    imagemCapa: '/projetos/logistics_operations_intelligence.png',

    resumo:
      'Projeto end-to-end de Engenharia e Analytics de Dados com Databricks, PySpark, Delta Lake, arquitetura Medalhão e Governança de Dados. Veja mais em: https://github.com/jooysoouzaa/logistics-operations-intelligence ',

    contexto:
      'O projeto foi desenvolvido a partir de dados de operações logísticas com o objetivo de estruturar um pipeline completo, desde a ingestão dos dados brutos até a criação de tabelas analíticas para consumo e tomada de decisão.',

    problema:
      'Os dados estavam distribuídos em diferentes entidades operacionais, como viagens, cargas, rotas, motoristas, caminhões, eventos de entrega e abastecimentos. Era necessário organizar, validar e integrar essas informações, garantindo qualidade, rastreabilidade e uma estrutura preparada para análises de negócio.',

    objetivo:
      'Construir uma arquitetura de dados em camadas Bronze, Silver e Gold, aplicando transformações, regras de qualidade, modelagem analítica e práticas de Governança de Dados.',

    processo: [
      'Ingestão e persistência dos dados na camada Bronze',
      'Padronização, validação e enriquecimento dos dados na camada Silver',
      'Validação de unicidade, completude, integridade e consistência',
      'Criação de métricas operacionais e financeiras com PySpark',
      'Modelagem de tabelas analíticas na camada Gold',
      'Implementação de catálogo, dicionário, regras e resultados de qualidade',
      'Criação de linhagem de dados e uso do Unity Catalog',
      'Versionamento dos notebooks com Git e GitHub',
    ],

    indicadores: [
      'Distância e duração das viagens',
      'Eficiência de combustível (MPG)',
      'Tempo ocioso',
      'Receita por viagem e por milha',
      'Margem operacional estimada',
      'Atrasos e antecipações',
      'Tempo de detenção',
      'Custo de combustível por milha',
      'Completude e consistência dos dados',
    ],

    tecnologias: [
      'Databricks',
      'PySpark',
      'Delta Lake',
      'Unity Catalog',
      'Arquitetura Medalhão',
      'Data Quality',
      'Data Governance',
      'Git/GitHub',
    ],

    aprendizados:
      'O projeto aprofundou minha prática em Engenharia de Dados, desde ingestão e transformação até modelagem analítica e governança. Também reforçou a importância de não corrigir inconsistências de forma arbitrária, preservando os dados originais e criando regras, flags e controles de qualidade para garantir rastreabilidade.',

   galeria: ['/projetos/logistics_operations_intelligence.png'],
  },


  {
    id: 2,
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

    indicadores: ['Receita total', 'Custos', 'Despesas', 'Lucro'],

    tecnologias: ['Excel', 'Power Query', 'Power BI', 'DAX', 'Star Schema'],

    aprendizados:
      'O projeto reforçou meus conhecimentos em modelagem dimensional, criação de métricas com DAX e organização visual de indicadores financeiros.',
  },

  {
    id: 3,
    slug: 'dashboard-vendas',

    titulo: 'Dashboard de Vendas',

    imagemCapa: '/projetos/Dashboard_de_Vendas.png',

    video: '/projetos/demonstracao-gestao-de-vendas.mp4',

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
    id: 4,
    slug: 'dashboard-producao',

    titulo: 'Dashboard de Produção',

    imagemCapa: '/projetos/Dashboard_de_Producao.png',

    video: '/projetos/demonstracao-producao.mp4',

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
