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
                        Atuo entre Engenharia de Dados, Business Intelligence e Análise de Dados, com experiência na ingestão, transformação, validação e organização de dados, construção e sustentação de pipelines, estruturação de bases analíticas e desenvolvimento de dashboards e indicadores.
                    </SobreText>
                    <SobreText>
                        Tenho conhecimentos em SQL, Python, PySpark, Databricks, Azure Data Factory, BigQuery, Dataform, Power BI, Looker, LookML, Excel, modelagem de dados, processos ETL/ELT, arquitetura em camadas, qualidade de dados e monitoramento de processamentos.
                    </SobreText>
                    <SobreText>
                        Busco contribuir em projetos que conectem tecnologia, dados e negócio, participando desde a preparação e estruturação dos dados até a geração de análises, visualizações e produtos de dados que apoiem decisões estratégicas.
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
