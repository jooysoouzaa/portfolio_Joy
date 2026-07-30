import {
    Faixa,
    Faixa1,
    Faixa2,
    TextWrapper1,
    TextWrapper2
} from './FaixaAnimadaStyle';

const competencias = [
    'Engenharia de Dados',
    'Análise de Dados',
    'Pipelines de Dados',
    'SQL',
    'Python',
    'PySpark',
    'Databricks',
    'Azure Data Factory',
    'ETL',
    'ELT',
    'Ingestão de Dados',
    'Transformação de Dados',
    'Qualidade de Dados',
    'Modelagem de Dados',
    'Data Lake',
    'Delta Lake',
    'Arquitetura Medalhão',
    'BigQuery',
    'Dataform',
    'Monitoramento de Pipelines',
    'Validação de Dados',
    'Processamento de Dados',
    'Camada Bronze',
    'Camada Silver',
    'Camada Gold',
    'Power BI',
    'Looker',
    'LookML',
    'Data Visualization',
    'Dashboards',
    'Excel',
    'Git',
    'Big Data',
    'Raciocínio Analítico'
];

const renderizarCompetencias = (prefixo) =>
    competencias.map((competencia, index) => (
        <p key={`${prefixo}-${competencia}-${index}`}>
            {competencia}
        </p>
    ));

const FaixaAnimada = () => {
    return (
        <Faixa>
            <Faixa1>
                <TextWrapper1>
                    {renderizarCompetencias('faixa-1')}
                </TextWrapper1>
            </Faixa1>

            <Faixa2>
                <TextWrapper2>
                    {renderizarCompetencias('faixa-2')}
                </TextWrapper2>
            </Faixa2>
        </Faixa>
    );
};

export default FaixaAnimada;