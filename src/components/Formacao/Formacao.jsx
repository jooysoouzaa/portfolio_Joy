import {
    FormacaoSection, FormacaoTitulo, FormacaoTexto, FormacaoContainer, FormacaoFaculdade, FormacaoFaculdadeCurso,
    FormacaoFaculdadeTipo, FormacaoFaculdadeConclusao, FormacaoExtra, FormacaoExtraCursos,
} from './FormacaoStyle';

function Formacao() {
    return (
        <FormacaoSection id='formacao' aria-label="Formação">
            <FormacaoTitulo>Formação<strong>.</strong></FormacaoTitulo>
            <FormacaoTexto>
                Sou formada em Análise e Desenvolvimento de Sistemas pela FIAP desde dezembro de 2020. Em agosto de
                2024, concluí a formação como Engenheira Front-End pela EBAC. Atualmente, estou cursando Big Data e 
                Inteligência Analítica pela PUCPR
            </FormacaoTexto>
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
            <FormacaoExtra>
                <FormacaoExtraCursos>
                    <h3>Cursos</h3>
                    <ul>
                        <li>Front-End (JS, React e TS)<span>Udemy - Cursando</span></li>
                        <li>Engenheiro Front-End <span>EBAC - 2024</span></li>
                        <li>HTML e CSS<span>Origamid - 2023</span></li>
                        <li>CSS Grid Layout<span>Origamid - 2020 </span></li>
                        <li>CSS com SASS<span>Origamid - 2020</span></li>
                        <li>Web Design<span>Origamid - 2020</span></li>
                        <li>CSS Flexbox<span>Origamid - 2020</span></li>
                        <li>Figma<span>Udemy - 2020</span></li>
                    </ul>
                </FormacaoExtraCursos>
            </FormacaoExtra>
            {/* <Idiomas>
                <h3>Idiomas</h3>
                <ul>
                    <li>Inglês<span> - Básico (Cursando)</span></li>
                </ul>
            </Idiomas> */}
        </FormacaoSection>
    )
}
export default Formacao;