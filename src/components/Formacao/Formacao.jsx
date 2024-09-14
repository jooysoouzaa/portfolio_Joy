import './FormacaoStyle.css'


function Formacao() {
    return (
        <section className='formacao' id='formacao' aria-label="Formação">
            <div className='container'>
                <h2 className="subtitulo">Formação</h2>
                <p className="formacao__texto">
                    Sou formada em Análise e Desenvolvimento de Sistemas pela FIAP desde dezembro de 2020. Em agosto de
                    2024, concluí a formação como Engenheira Front-End pela EBAC. Atualmente, estou dedicando meus estudos em
                    React, TypeScript e JavaScript, além de aperfeiçoar meu inglês.</p>
                <div className="formacao__container">
                    <div className="formacao__faculdade">
                        <p className="formacao__faculdade-curso">Engenheiro Front-End</p>
                        <h3 className="formacao__faculdade-tipo">Curso profissionalizante</h3>
                        <ul className="formacao__faculdade-conclusao">
                            <li>Ago/24</li>
                            <li>EBAC</li>
                        </ul>
                    </div>
                    <div className="formacao__faculdade">
                        <p className="formacao__faculdade-curso">Análise e Desenvolvimento de Sistemas</p>
                        <h3 className="formacao__faculdade-tipo">Ensino Superior</h3>
                        <ul className="formacao__faculdade-conclusao">
                            <li>Dez/20</li>
                            <li>FIAP</li>
                        </ul>
                    </div>
                </div>
                <div className="formacao__extra">
                    <div className="formacao__extra-cursos">
                        <h3>Cursos</h3>
                        <ul>
                            <li>Formação Front-End (JS, React e TS)<span>Udemy - Cursando</span></li>
                            <li>Jornada Full Stack - Clone do Tiktok<span>Ebac - 2023</span></li>
                            <li>HTML e CSS<span>Origamid 2023</span></li>
                            <li>CSS Grid Layout<span>Origamid - 2020 </span></li>
                            <li>CSS com SASS<span>Origamid - 2020</span></li>
                            <li>Web Design<span>Origamid - 2020</span></li>
                            <li>CSS Flexbox<span>Origamid - 2020</span></li>
                            <li>Figma<span>Udemy - 2020</span></li>
                        </ul>
                    </div>
                </div>
                <div className="idiomas">
                    <h3>Idiomas</h3>
                    <ul>
                        <li>Inglês<span> - Básico (Cursando)</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Formacao;