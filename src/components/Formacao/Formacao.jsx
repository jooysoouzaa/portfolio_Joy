import {
    FormacaoSection, FormacaoTitulo, FormacaoTexto, FormacaoContainer, FormacaoFaculdade, FormacaoFaculdadeCurso,
    FormacaoFaculdadeTipo, FormacaoFaculdadeConclusao, FormacaoExtra, FormacaoExtraCursos, Idiomas
} from './FormacaoStyle';

function Formacao() {
    return (
        <FormacaoSection id='formacao' aria-label="Formação">
            <FormacaoTitulo>Formação<strong>.</strong></FormacaoTitulo>
            <FormacaoTexto>
                Sou formada em Análise e Desenvolvimento de Sistemas pela FIAP. Atualmente estou cursando
                Big Data e Inteligência Análitica pela PUCPR e estou dedicando meus estudos em
                Excel, Power BI, Python e SQL, além de aperfeiçoar meu inglês.</FormacaoTexto>
            <FormacaoContainer>
                <FormacaoFaculdade>
                    <FormacaoFaculdadeCurso>Big Data e Inteligência Análitica</FormacaoFaculdadeCurso>
                    <FormacaoFaculdadeTipo>Ensino Superior</FormacaoFaculdadeTipo>
                    <FormacaoFaculdadeConclusao>
                        <li>Fev/25 - Jul/27</li>
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
            <FormacaoExtra>
                <FormacaoExtraCursos>
                    <h3>Cursos</h3>
                    <ul>
                        <li>Análise de Dados Impressionadora (Excel, Power BI, Python e SQL)<span>Hashtag Treinamentos - Cursando</span></li>
                        <li>Introdução ao mundo dos dados<span> Preditiva.ai  - 2025</span></li>
                        <li>Engenheiro Front-End<span>Ebac - 2024</span></li>
                        <li>Front End & Web Design<span>Origamid - 2023</span></li>
                        <li>UX & Design Thinking: Experiência do Usuário nos negócios<span>Udemy - 2020</span></li>
                    </ul>
                </FormacaoExtraCursos>
            </FormacaoExtra>
            <Idiomas>
                <h3>Idiomas</h3>
                <ul>
                    <li>Inglês<span> - Básico (Cursando)</span></li>
                </ul>
            </Idiomas>
        </FormacaoSection>
    )
}

export default Formacao;