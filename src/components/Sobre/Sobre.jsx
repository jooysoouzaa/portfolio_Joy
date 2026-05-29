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
                        Hoje direciono minha carreira para Business Intelligence, Análise de Dados e Data Visualization, unindo visão analítica, comunicação visual e contexto de negócio para transformar dados em insights claros e acionáveis. Tenho experiência com ferramentas como SQL, Python para análise e manipulação de dados, Power BI, Looker, Databricks e Excel, além de conhecimentos em modelagem de dados e construção de dashboards orientados à tomada de decisão.
                    </SobreText>
                    <SobreText>
                        Meu objetivo é conectar dados, pessoas e negócio por meio de análises e visualizações que gerem impacto real.
                    </SobreText>
                    <a href="/contato/JOYCE-DE-SOUZA-ARAUJO - CURRICULO.pdf" target="_blank">
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
