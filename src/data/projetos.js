export const projetos = [
  {
    id: 1,
    slug: 'logistics-operations-intelligence',

    titulo: 'Logistics Operations Intelligence',

    imagemCapa:
      '/projetos/logistics_operation_intelligence/logistics_operations_intelligence.png',

    resumo:
      'Projeto end-to-end de Engenharia e Analytics de Dados com Databricks, PySpark e Delta Lake, estruturado em arquitetura Medalhão e com práticas de Data Quality e Governança para transformar dados operacionais em informações analíticas confiáveis.',

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

    github: 'https://github.com/jooysoouzaa/logistics-operations-intelligence',

    achados: [
      'Foram identificadas divergências entre o indicador on_time_flag da fonte e o indicador de pontualidade recalculado, afetando 56.866 registros de eventos de entrega.',

      'Foram encontradas 3.880 compras de combustível sem truck_id e 3.988 registros sem driver_id, evidenciando problemas de completude que podem limitar análises por veículo e motorista.',

      'As validações confirmaram a unicidade de trip_id na camada Silver e a preservação da granularidade de uma linha por viagem nas principais tabelas analíticas da camada Gold.',

      'As regras de qualidade também validaram integridade entre entidades e consistência dos custos de combustível dentro das tolerâncias definidas.',

      'Os problemas encontrados foram preservados e registrados como alertas de qualidade, em vez de serem corrigidos arbitrariamente, garantindo rastreabilidade entre o dado de origem e as camadas analíticas.',

      'A camada Gold consolidou indicadores operacionais e financeiros relacionados a viagens, desempenho de entregas e consumo de combustível, preparando os dados para análise e consumo por ferramentas de BI.',
    ],

    galeria: [
      '/projetos/logistics_operation_intelligence/Estrutura do Catalog.png',
      '/projetos/logistics_operation_intelligence/gold_trip_operations.png',
      '/projetos/logistics_operation_intelligence/Unity Catalog Lineage.png',
      '/projetos/logistics_operation_intelligence/Bronze_e_silver.png',
      '/projetos/logistics_operation_intelligence/data_catalog.png',
      '/projetos/logistics_operation_intelligence/data_quality_results.png',
      '/projetos/logistics_operation_intelligence/data_quality_rules.png',
      '/projetos/logistics_operation_intelligence/governance_logistics.png',
      '/projetos/logistics_operation_intelligence/trips_bronze.png',
      '/projetos/logistics_operation_intelligence/trips_silver.png',
    ],
  },

  {
    id: 2,
    slug: 'analise-financeira',

    titulo: 'Dashboard de Análise Financeira',

    imagemCapa: 'projetos/analise-financeira/visao-geral.png',

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

    galeria: [
      '/projetos/analise-financeira/capa.png',
      '/projetos/analise-financeira/visao-geral.png',
      '/projetos/analise-financeira/fluxo-de-caixa.png',
    ],
  },

  {
    id: 3,
    slug: 'dashboard-vendas',

    titulo: 'Dashboard de Vendas',

    imagemCapa: 'projetos/analise-de-vendas/Dashboard_de_Vendas.png',

    video: '/projetos/analise-de-vendas/demonstracao-gestao-de-vendas.mp4',

    resumo:
      'Dashboard desenvolvido para acompanhar o desempenho comercial por meio da análise de faturamento, produtos, marcas, regiões e evolução das vendas ao longo do tempo, facilitando a identificação de tendências e dos principais fatores que impactam os resultados.',

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

    galeria: ['/projetos/analise-de-vendas/Dashboard_de_Vendas.png'],
  },

  {
    id: 4,
    slug: 'dashboard-producao',

    titulo: 'Dashboard de Produção',

    imagemCapa: 'projetos/analise-producao/Dashboard_de_Producao.png',

    video: '/projetos/analise-producao/demonstracao-producao.mp4',

    resumo:
      'Dashboard desenvolvido para acompanhar o desempenho do processo produtivo, analisando volume produzido, produtividade, qualidade, aprovação e reprovação, permitindo identificar variações e pontos de atenção na operação.',

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

    galeria: ['/projetos/analise-producao/Dashboard_de_Producao.png'],
  },
];
