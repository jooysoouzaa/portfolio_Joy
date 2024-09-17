
import {
    ExperienciasSection, ExperienciasTitulo, ExperienciasContainer, ExperienciasEmpresa,
    ExperienciasSubtitulo, ExperienciasHabilidades, ExperienciasParagrafo
} from './ExperienciasStyle';

function Experiencias() {
    return (
        <ExperienciasSection id='experiencias' aria-label="Experiência">
            <ExperienciasTitulo>Experiências</ExperienciasTitulo>
            <ExperienciasContainer>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Código Certo Coders - Dev. Front-End | Voluntária</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Ago/24 - Atualmente</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>Atuação como desenvolvedora front-end, utilizando React, CSS e Figma
                        para criar interfaces responsivas e intuitivas. Participação em reuniões semanais para
                        alinhamento das tarefas e acompanhamento do progresso dos projetos.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Avioriz - Web Designer | Autonôma</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Jun/23 - Atualmente</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>Construção e manutenção de sites e sistemas low code no WordPress e
                        Elementor, sempre enfatizando a experiência do usuário, alto desempenho, design moderno, facilidade de uso
                        e carregamento rápido.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Realizzart - Designer Gráfico | Autonôma</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Maio/21 - Mar/23</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>Desenvolvimento de projetos de identidade visual, arte digital e
                        monogramas através das ferramentas Adobe Illustrator e Photoshop para empreendedores de diversas
                        áreas.</ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>T-Systems - Dev. front-end | Estágio</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Out/19 - Jan/20</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>Desenvolvimento e manutenção de projetos Web para a Daimler
                        (Mercedes-Benz) utilizando HTML5, CSS3, Bootstrap3 e JavaScript.</ExperienciasParagrafo>
                </ExperienciasEmpresa>
            </ExperienciasContainer>
            {/* <Voluntario>
                <VoluntarioTitulo>Trabalho Voluntário</VoluntarioTitulo>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Código Certo Coders - Dev. Front-End</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Ago/24 - Atualmente</li>
                    </ExperienciasHabilidades>
                    <ExperienciasHabilidades>Atuação como desenvolvedora front-end, utilizando React, CSS e Figma
                        para criar interfaces responsivas e intuitivas. Participação em reuniões semanais para
                        alinhamento das tarefas e acompanhamento do progresso dos projetos.
                    </ExperienciasHabilidades>
                </ExperienciasEmpresa>
            </Voluntario> */}
        </ExperienciasSection>
    )
}

export default Experiencias;