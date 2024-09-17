import {
    SobreSection, SobreContainer, SobreTexto, SobreTituloPrincipal, SobreParagrafo,
    SobreTituloSecundario, ProjetosButton, SobreImg,
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
                    <SobreTituloPrincipal><strong>Sobre Mim</strong></SobreTituloPrincipal>
                    <SobreParagrafo>Sou a Joy Sóuza, tenho {idade} anos, moro em São Bernardo do Campo - SP e sou formada em Análise e
                        Desenvolvimento de Sistemas pela FIAP. Apaixonada por tecnologia e em constante busca por
                        aprendizado, sou autodidata, detalhista e focada em resultados. Amo estudar e adquirir novos conhecimentos, pois
                        acredito que o conhecimento é algo que ninguém pode tirar de mim. Busco soluções inovadoras
                        e eficientes para os projetos que me envolvo, com o objetivo de evoluir como desenvolvedora front-end
                        e contribuir significativamente para o sucesso das empresas onde colaboro.</SobreParagrafo>

                    <SobreTituloSecundario>Por que escolhi ser dev front-end?</SobreTituloSecundario>
                    <p>Escolhi ser desenvolvedora front-end porque amo a combinação entre design e tecnologia. É
                        uma oportunidade de criar páginas visualmente atraentes e funcionais, enquanto me mantenho atualizada
                        com as inovações digitais. A tecnologia me desafia a aprender constantemente e superar expectativas.</p>

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
