
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
                    <ExperienciasSubtitulo>Knightec Group | Analista de BI </ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>jun/26 - Atualmente</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Atuação em Business Intelligence para operações logísticas da Volkswagen, desenvolvendo dashboards em Power BI, monitorando KPIs, apoiando análises para tomada de decisão, identificando oportunidades de melhoria e participando da padronização e automação de processos.
                    </ExperienciasParagrafo>
                </ExperienciasEmpresa>
                <ExperienciasEmpresa>
                    <ExperienciasSubtitulo>Blip - Data & Analytics | Estágio</ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Set/25 - Jun/2026</li>
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