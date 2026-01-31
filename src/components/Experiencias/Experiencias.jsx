
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
                        <li>Set/25 - Atualmente</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Responsável pelo levantamento e documentação de ativos de dados envolvidos na migração entre Data Platform e Data Governance, garantindo rastreabilidade, organização e suporte às práticas de governança e FinOps. Acompanho o processo de migração em conjunto com o time técnico.
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
                    <ExperienciasSubtitulo>Código Certo Coders - Front-End Developer & User Interface </ExperienciasSubtitulo>
                    <ExperienciasHabilidades>
                        <li>Ago/24 - Fev/25</li>
                    </ExperienciasHabilidades>
                    <ExperienciasParagrafo>
                        Atuação voluntária como desenvolvedora front-end na estruturação da página institucional da empresa, com desenvolvimento de interfaces responsivas e centradas no usuário utilizando React.js, JavaScript e CSS. Prototipação das telas no Figma e colaboração ativa com a equipe em reuniões semanais de alinhamento.
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