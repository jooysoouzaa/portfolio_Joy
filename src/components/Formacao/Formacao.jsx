import {
    FormacaoSection, FormacaoTitulo, FormacaoTexto, FormacaoContainer, FormacaoFaculdade, FormacaoFaculdadeCurso,
    FormacaoFaculdadeTipo, FormacaoFaculdadeConclusao, FormacaoExtra, FormacaoExtraCursos
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
                        <li>Análise de Dados (Excel, Power BI, SQL e Python) - Hashtag Treinamentos - Cursando</li>
                        <li>Excel para Análise de Dados - Udemy - 06/2025</li>
                        <li>BI: Do SQl ao Dashboard - Udemy - 06/2025</li>
                        <li>Banco de Dados SQL - Udemy - 06/2025</li>
                        <li>Formação Analista de Dados I - Udemy - 06/2025</li>
                        <li>Estatística para Análise de Dados - Udemy - 06/2025</li>
                        <li>Introdução ao mundo dos dados - Preditiva.ai  - 05/2025</li>
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