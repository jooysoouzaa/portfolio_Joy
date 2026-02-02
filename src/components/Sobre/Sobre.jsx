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
                        Sou formada em Análise e Desenvolvimento de Sistemas pela FIAP e atuo como desenvolvedora front-end com foco na criação de interfaces web, experiência do usuário e performance. Minha trajetória na tecnologia começou em 2019, trabalhando com HTML, CSS, JavaScript, React e metodologias ágeis (Scrum), sempre buscando unir estética, usabilidade e qualidade técnica.
                    </SobreText>
                    <SobreText>
                        Entre 2020 e 2025, atuei de forma empreendedora como Web Designer e Designer Digital, desenvolvendo sites e soluções digitais de ponta a ponta. Nesse período, trabalhei com prototipação no Figma, estruturação de layouts, acessibilidade, performance, SEO e conversão, o que fortaleceu minha visão de negócio, autonomia e capacidade de transformar necessidades em soluções digitais eficientes e centradas no usuário.
                    </SobreText>
                    <SobreText>
                        Em agosto de 2024, concluí a formação em Engenharia Front-End pela EBAC. Atualmente, curso Big Data e Inteligência Analítica pela PUCPR, ampliando minha visão analítica para criar soluções front-end mais estratégicas, orientadas a dados e alinhadas aos objetivos do negócio.
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
                        <FormacaoFaculdadeCurso>Engenheiro Front-End</FormacaoFaculdadeCurso>
                        <FormacaoFaculdadeTipo>Curso Profissionalizante</FormacaoFaculdadeTipo>
                        <FormacaoFaculdadeConclusao>
                            <li>Ago/24</li>
                            <li>EBAC</li>
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
