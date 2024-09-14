import './ExperienciasStyle.css'


function Experiencias() {
    return (
        <section className='experiencias' id='experiencias' aria-label="Experiência">
            <div className='container'>
                <h2 className="subtitulo">Experiências</h2>
                <div className="experiencias__container ">
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Código Certo Coders - Dev. Front-End | Voluntária</h3>
                        <ul className="experiencias__habilidades">
                            <li>Ago/24 - Atualmente</li>
                        </ul>
                        <p className="experiencias__paragrafo ">Atuação como desenvolvedora front-end, utilizando React, CSS e Figma
                            para criar interfaces responsivas e intuitivas. Participação em reuniões semanais para
                            alinhamento das tarefas e acompanhamento do progresso dos projetos.
                        </p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Avioriz - Web Designer | Autonôma</h3>
                        <ul className="experiencias__habilidades">
                            <li>Jun/23 - Atualmente</li>
                        </ul>
                        <p className="experiencias__paragrafo ">Construção e manutenção de sites e sistemas low code no WordPress e
                            Elementor, sempre enfatizando a experiência do usuário, alto desempenho, design moderno, facilidade de uso
                            e carregamento rápido.
                        </p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Realizzart - Designer Gráfico | Autonôma</h3>
                        <ul className="experiencias__habilidades">
                            <li>Maio/21 - Mar/23</li>
                        </ul>
                        <p className="experiencias__paragrafo">Desenvolvimento de projetos de identidade visual, arte digital e
                            monogramas através das ferramentas Adobe Illustrator e Photoshop para empreendedores de diversas
                            áreas.</p>
                    </div>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">T-Systems - Dev. front-end | Estágio</h3>
                        <ul className="experiencias__habilidades">
                            <li>Out/19 - Jan/20</li>
                        </ul>
                        <p className="experiencias__paragrafo ">Desenvolvimento e manutenção de projetos Web para a Daimler
                            (Mercedes-Benz) utilizando HTML5, CSS3, Bootstrap3 e JavaScript.</p>
                    </div>
                </div>
                {/* <div className="voluntario">
                    <h3 className="voluntario__titulo">Trabalho Voluntário</h3>
                    <div className="experiencias__empresa">
                        <h3 className="experiencias__titulo">Código Certo Coders - Dev. Front-End</h3>
                        <ul className="experiencias__habilidades">
                            <li>Ago/24 - Atualmente</li>
                        </ul>
                        <p className="experiencias__habilidades">Atuação como desenvolvedora front-end, utilizando React, CSS e Figma
                            para criar interfaces responsivas e intuitivas. Participação em reuniões semanais para
                            alinhamento das tarefas e acompanhamento do progresso dos projetos.
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Experiencias;