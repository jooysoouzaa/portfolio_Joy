import {
    SobreSection, SobreContainer, SobreTituloPrincipal, SobreParagrafo, SobreText, ProjetosButton, FormacaoContainer, FormacaoFaculdade, FormacaoFaculdadeCurso,
    FormacaoFaculdadeTipo, FormacaoFaculdadeConclusao
} from './SobreStyle';

function Sobre() {
    return (
        <SobreSection id='sobre' aria-label="Sobre">
            <SobreContainer>
                <SobreParagrafo>
                    <SobreTituloPrincipal><strong>Sobre Mim</strong>.</SobreTituloPrincipal>
                    <SobreText>
                        Sou formada em Análise e Desenvolvimento de Sistemas pela FIAP e atualmente curso Big Data e Inteligência Analítica na FMU.
                    </SobreText>
                    <SobreText>
                        Minha trajetória começou no desenvolvimento Front-End e no Web Design, onde desenvolvi um forte olhar para experiência do usuário, usabilidade e comunicação visual. Essa base me permitiu compreender a importância de transformar informações complexas em experiências claras e intuitivas, habilidade que hoje aplico diretamente na área de dados.
                    </SobreText>
                    <SobreText>
                        Atualmente, direciono minha carreira para Análise de Dados e Engenharia de Dados, com interesse especial em processos de ingestão, transformação, validação e organização de dados, além da construção e sustentação de pipelines e bases analíticas. Também atuo na criação de dashboards e visualizações que facilitam o acompanhamento de indicadores e apoiam a tomada de decisão.
                    </SobreText>
                    <SobreText>
                        Tenho experiência com SQL, Python, PySpark, Databricks, Azure Data Factory, BigQuery, Dataform, Power BI, Looker, LookML e Excel, além de conhecimentos em modelagem de dados, monitoramento de processamentos, identificação de falhas e inconsistências e organização de dados em diferentes camadas.
                    </SobreText>
                    <SobreText>
                        Meu objetivo é atuar na conexão entre análise e engenharia, contribuindo desde a preparação e estruturação dos dados até a geração de análises, indicadores e produtos de dados confiáveis para o negócio.
                    </SobreText>
                    <a href="/contato/CURRICULO-JOYCE-DE-SOUZA-ARAUJO.pdf" target="_blank">
                        <ProjetosButton type="submit">Baixar CV</ProjetosButton>
                    </a>
                </SobreParagrafo>

                <FormacaoContainer>
                    <FormacaoFaculdade>
                        <FormacaoFaculdadeCurso>Big Data e Inteligência Analítica</FormacaoFaculdadeCurso>
                        <FormacaoFaculdadeTipo>Ensino Superior</FormacaoFaculdadeTipo>
                        <FormacaoFaculdadeConclusao>
                            <li>Fev/25 - Cursando</li>
                            <li>FMU</li>
                        </FormacaoFaculdadeConclusao>
                    </FormacaoFaculdade>
                    <FormacaoFaculdade>
                        <FormacaoFaculdadeCurso>Análise e Desenvolvimento de Sistemas</FormacaoFaculdadeCurso>
                        <FormacaoFaculdadeTipo>Ensino Superior</FormacaoFaculdadeTipo>
                        <FormacaoFaculdadeConclusao>
                            <li>Dez/20</li>
                            <li>FIAP</li>
                        </FormacaoFaculdadeConclusao>
                    </FormacaoFaculdade>
                </FormacaoContainer>
            </SobreContainer>
        </SobreSection>
    )
}

export default Sobre;
