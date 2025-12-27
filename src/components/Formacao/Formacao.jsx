import {
    FormacaoSection, FormacaoTitulo, FormacaoContainer, FormacaoFaculdade, FormacaoFaculdadeCurso,
    FormacaoFaculdadeTipo, FormacaoFaculdadeConclusao, FormacaoExtra, FormacaoExtraCursos
} from './FormacaoStyle';

function Formacao() {
    return (
        <FormacaoSection id='formacao' aria-label="Formação">
            <FormacaoTitulo>Formação<strong>.</strong></FormacaoTitulo>
            <FormacaoContainer>
                <FormacaoFaculdade>
                    <FormacaoFaculdadeCurso>Big Data e Inteligência Analítica</FormacaoFaculdadeCurso>
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
                    <h3>Cursos e Certificação</h3>
                    <ul>
                        <li>Python para dados: Pandas e PySpark em ação - Soulcode Academy - 12/25</li>
                        <li>Bootcamp FullStack - Blip & Soulcode Academy - Soulcode Academy - 12/25</li>
                        <li>Databricks com Spark & Pysparks - Udemy - 11/25</li>
                        <li>Fundamentos de Engenharia de Dados - Data Science Academy - 07/25</li>
                        <li>Excel para Análise de Dados - Udemy - 06/25</li>
                        {/* <li>BI: Do SQl ao Dashboard - Udemy - 06/2025</li>
                        <li>Banco de Dados SQL - Udemy - 06/2025</li>
                        <li>Formação Analista de Dados I - Udemy - 06/2025</li>
                        <li>Estatística para Análise de Dados - Udemy - 06/2025</li> */}
                        <li>Introdução ao mundo dos dados - Preditiva.ai  - 05/25</li>
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