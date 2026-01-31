import {
    SobreSection, SobreContainer, SobreTituloPrincipal, SobreParagrafo, ProjetosButton
} from './SobreStyle';

function Sobre() {
    // const anoAtual = new Date().getFullYear(); // Obtem o ano atual
    // const anoNascimento = 1996; // Ano de nascimento
    // const mesNascimento = 4; // Mês do aniversário
    // const diaNascimento = 7; // Dia do aniversário
    // const today = new Date(); // Data atual
    // let idade = anoAtual - anoNascimento; // Cálculo da idade

    // // Verificar se o aniversário já passou este ano
    // if (today.getMonth() + 1 < mesNascimento || (today.getMonth() + 1 === mesNascimento && today.getDate() < diaNascimento)) {
    //     idade -= 1; // Se o aniversário ainda não passou este ano, subtrai 1
    //}

    return (
        <SobreSection id='sobre' aria-label="Sobre">
            <SobreContainer>
                <SobreTituloPrincipal><strong>Sobre Mim</strong>.</SobreTituloPrincipal>
                <SobreParagrafo>
                    Sou formada em Análise e Desenvolvimento de Sistemas pela FIAP e atuo como desenvolvedora front-end com foco na criação de interfaces web, experiência do usuário e performance. Minha trajetória na tecnologia começou em 2019, trabalhando com HTML, CSS, JavaScript, React e metodologias ágeis (Scrum), sempre buscando unir estética, usabilidade e qualidade técnica.
                </SobreParagrafo>
                <SobreParagrafo>
                    Entre 2020 e 2025, atuei de forma empreendedora como Web Designer e Designer Digital, desenvolvendo sites e soluções digitais de ponta a ponta. Nesse período, trabalhei com prototipação no Figma, estruturação de layouts, acessibilidade, performance, SEO e conversão, o que fortaleceu minha visão de negócio, autonomia e capacidade de transformar necessidades em soluções digitais eficientes e centradas no usuário.
                </SobreParagrafo>
                <SobreParagrafo>
                Em agosto de 2024, concluí a formação em Engenharia Front-End pela EBAC. Atualmente, curso Big Data e Inteligência Analítica pela PUCPR, ampliando minha visão analítica para criar soluções front-end mais estratégicas, orientadas a dados e alinhadas aos objetivos do negócio.
                </SobreParagrafo>

                <a href="/contato/JOYCE-DE-SOUZA-ARAUJO - CURRICULO.pdf" target="_blank">
                    <ProjetosButton type="submit">Baixar CV</ProjetosButton>
                </a>
            </SobreContainer>
        </SobreSection>
    )
}

export default Sobre;
