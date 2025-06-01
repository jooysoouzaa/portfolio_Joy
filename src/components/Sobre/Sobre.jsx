import {
    SobreSection, SobreContainer, SobreTexto, SobreTituloPrincipal, SobreParagrafo, ProjetosButton, SobreImg,
} from './SobreStyle';

function Sobre() {
    const anoAtual = new Date().getFullYear(); // Obtem o ano atual
    const anoNascimento = 1996; // Ano de nascimento
    const mesNascimento = 4; // Mês do aniversário
    const diaNascimento = 7; // Dia do aniversário
    const today = new Date(); // Data atual
    let idade = anoAtual - anoNascimento; // Cálculo da idade

    // Verificar se o aniversário já passou este ano
    if (today.getMonth() + 1 < mesNascimento || (today.getMonth() + 1 === mesNascimento && today.getDate() < diaNascimento)) {
        idade -= 1; // Se o aniversário ainda não passou este ano, subtrai 1
    }

    return (
        <SobreSection id='sobre' aria-label="Sobre">
            <SobreContainer>
                <SobreTexto>
                    <SobreTituloPrincipal><strong>Sobre Mim</strong>.</SobreTituloPrincipal>
                    <SobreParagrafo>Sou a Joy Souza, tenho {idade} anos e sou formada em Análise e Desenvolvimento de
                        Sistemas pela FIAP. Iniciei minha carreira atuando como desenvolvedora front-end e, posteriormente, como
                        web designer e designer gráfico. Durante esse período, desenvolvi soluções digitais focadas em
                        usabilidade, performance e experiência do usuário. Com o tempo, percebi que minha curiosidade ia além da interface: eu queria entender o que estava
                        por trás das decisões, como os dados influenciavam os produtos e como análises podiam guiar melhores
                        resultados e essa inquietação me levou a uma nova direção.<br></br><br></br>
                        Hoje, curso Big Data e Inteligência Analítica pela PUCPR e estou direcionando minha carreira para
                        áreas mais analíticas, como Análise de Dados, Business Intelligence e Produto. Tenho estudado
                        ferramentas como Excel, Power BI, SQL e Python, e estou em constante evolução para transformar
                        dados em informações estratégicas que impulsionem decisões reais.
                        Minha missão agora é unir minha base técnica e criativa com uma visão analítica para entregar
                        valor onde mais importa: na estratégia, na tomada de decisão e na experiência das pessoas com os produtos.
                    </SobreParagrafo>
                    <a href="contato/curriculo_joyceDeSouzaAraujo_desenvolvedoraFrontEnd.pdf" target="_blank">
                        <ProjetosButton type="submit">Baixar CV</ProjetosButton>
                    </a>
                </SobreTexto>
                <SobreImg>
                    <img src="/secaoSobre-img.png" width="1080" height="1080" alt="Imagem de perfil Joy Sóuza" />
                </SobreImg>
            </SobreContainer>
        </SobreSection>
    );
}

export default Sobre;
