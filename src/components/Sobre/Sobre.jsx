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
                        Me chamo Joy, sou formada em Análise e Desenvolvimento de
                        Sistemas pela FIAP. Iniciei minha carreira atuando como desenvolvedora front-end e, posteriormente, como
                        web designer e designer gráfico. Durante esse período, desenvolvi soluções digitais focadas em
                        usabilidade, performance e experiência do usuário. Com o tempo, percebi que minha curiosidade ia além da interface: eu queria entender o que estava
                        por trás das decisões, como os dados influenciavam os produtos e como análises podiam guiar melhores
                        resultados e essa inquietação me levou a uma nova direção.
                    </SobreText>
                    <SobreText>
                        Atualmente, curso Big Data e Inteligência Analítica pela PUCPR e estou direcionando minha carreira para
                        áreas mais analíticas. Tenho estudado ferramentas como Excel, Power BI, Looker, SQL, Databricks, PySpark e Python, e estou em constante evolução para transformar
                        dados em informações estratégicas que impulsionem decisões reais.
                        Minha missão agora é unir minha base técnica e criativa com uma visão analítica para entregar
                        valor onde mais importa: na tomada de decisão.
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
                            <li>PUCPR</li>
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
