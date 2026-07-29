
import {
    ExperienciasSection, ExperienciasTitulo, ExperienciasContainer, ExperienciasEmpresa,
    ExperienciasSubtitulo, ExperienciasHabilidades, ExperienciasParagrafo
} from './ExperienciasStyle';

function Experiencias() {
    return (
        <ExperienciasSection id='experiencias' aria-label="Experiência">
            <ExperienciasTitulo>Experiências<strong>.</strong></ExperienciasTitulo>
            <ExperienciasContainer>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Blip - Data & Analytics | Estágio</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Set/25 - Jul/2026</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Atuação em Dados & Analytics, desenvolvendo dashboards em Looker (LookML), monitorando pipelines no Databricks e Azure Data Factory, implementando transformações no Dataform e BigQuery e apoiando iniciativas de FinOps, Governança de Dados e arquitetura analítica.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Avioriz - Web Designer & Designer Gráfico</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Maio/20 - Ago/25</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Atuação na criação e manutenção de sites, landing pages e lojas virtuais, com foco em usabilidade,
                        performance e experiência do usuário. Desenvolvimento de identidades visuais e materiais digitais
                        a partir de briefings e levantamento de requisitos, sempre com comunicação estratégica.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Código Certo - Front-End Developer & User Interface | Voluntária</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Ago/24 - Dez/24</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Atuação voluntária como Dev Front-End na estruturação de página institucional. Criação de interfaces responsivas e focadas no usuário com React.js, JS, CSS e Figma, além de colaboração ativa e alinhamento de tarefas em equipe em reuniões semanais.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>T-Systems - Front-End Developer & User Interface | Estágio</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Out/19 - Jan/20</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Atuação no desenvolvimento de interfaces web para a Daimler (Mercedes-Benz), com foco em implementação visual e experiência de interface. Prototipação de layouts no Adobe XD e desenvolvimento em HTML e CSS, com participação em rituais ágeis (Scrum) e introdução ao uso do framework Angular.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
            </ExperienciasContainer>
        </ExperienciasSection>
    )
}

export default Experiencias;