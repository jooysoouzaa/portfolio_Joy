import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    ProjetosSection,
    Container,
    Subtitulo,
    ProjetosItem,
    ProjetosTitulo,
    ProjetosTechLabel,
    ProjetosTechList,
    ProjetosDescricao,
    ProjetosBotoes,
    ProjetosButton,
    SwiperWrapper
} from './ProjetosStyle';



const projetos = [
    {
        id: 1,
        titulo: 'Minhas Tarefas',
        tecnologias: ['React', 'TS', 'Styled C.'],
        descricao: 'Projeto desenvolvido com React, TypeScript e styled-components, que organiza tarefas por categorias, permite verificar status, editar, buscar e adicionar novas tarefas usando React Router.',
        verProjeto: 'https://minhas-tarefas-react-rouge.vercel.app/',
        github: 'https://github.com/jooysoouzaa/minhas-tarefas-react',
    },
    {
        id: 2,
        titulo: 'ToDo List',
        tecnologias: ['Vue', 'CSS', 'Bootstrap'],
        descricao: 'To-Do List desenvolvido através de Vue.js, JavaScript, CSS e Bootstrap. O projeto inclui a componentização no Vue.js, estilização com CSS e layout responsivo com Bootstrap.',
        verProjeto: 'https://todo-list-vue-puce.vercel.app/',
        github: 'https://github.com/jooysoouzaa/todo-list-vue',
    },
    {
        id: 3,
        titulo: 'Galeria de Projetos',
        tecnologias: ['React', 'Styled C.', 'TS'],
        descricao: 'Galeria de projetos em React com TypeScript e Styled C., com troca de tema claro/escuro. Exibe projetos com links para repositórios no GitHub em um layout responsivo.',
        verProjeto: 'https://project-github-joy.vercel.app/',
        github: 'https://github.com/jooysoouzaa/project-styled-components',
    },
    {
        id: 4,
        titulo: 'Calculadora de IMC',
        tecnologias: ['React', 'CSS', 'JS'],
        descricao: 'Calculadora de IMC desenvolvida com React, criada com Vite, que calcula o IMC com base na altura e peso do usuário, exibindo o resultado e a classificação correspondente.',
        verProjeto: 'https://calculo-imc-joy.vercel.app/',
        github: 'https://github.com/jooysoouzaa/calculo_imc',
    },
    {
        id: 5,
        titulo: 'Bikcraft',
        tecnologias: ['HTML', 'CSS', 'JS'],
        descricao: 'Site para uma loja de bicicletas elétricas, o projeto foi realizado através da tecnologias HTML, CSS e JavaScript.',
        verProjeto: 'https://bikcraft-sand.vercel.app/',
        github: 'https://github.com/jooysoouzaa/bikcraft',
    },

    // {
    //     id: 6,
    //     titulo: 'Fortunatus Motors',
    //     tecnologias: ['HTML', 'CSS', 'jQuery', 'API'],
    //     descricao: 'Projeto utilizando HTML, CSS e jQuery com integração da API do Google Maps.',
    //     verProjeto: 'https://fortunatusmotors.vercel.app/',
    //     github: 'https://github.com/jooysoouzaa/jquery_fortunatus_motors',
    // },
    {
        id: 7,
        titulo: 'Repositórios Públicos do GitHub',
        tecnologias: ['React', 'API do Github'],
        descricao: 'Aplicação React de Repositórios Públicos do GitHub, desenvolvida com React e a API do GitHub, permite visualizar repositórios públicos, exibindo nome, linguagem e link direto.',
        verProjeto: 'https://github-perfil-joy.vercel.app/',
        github: 'https://github.com/jooysoouzaa/githubPerfil',
    },
    {
        id: 8,
        titulo: 'Calculadora Aritmética',
        tecnologias: ['Vue', 'CSS'],
        descricao: 'Calculadora aritmética desenvolvida com Vue.js, projetada para realizar operações matemáticas básicas de forma dinâmica.',
        verProjeto: 'https://calculadora-aritmetica-vue-neon.vercel.app/',
        github: 'https://github.com/jooysoouzaa/-calculadoraAritmeticaVue',
    },
    {
        id: 9,
        titulo: 'Sorteador de Números',
        tecnologias: ['HTML', 'LESS', 'JS', 'Grunt'],
        descricao: 'Sorteador de números aleatórios desenvolvido com HTML, LESS, JS, Grunt e Git esse projeto exibe os números de forma interativa.',
        verProjeto: 'https://sorteadorgrunt-joy.vercel.app/',
        github: 'https://github.com/jooysoouzaa/sorteador_grunt',
    }
];

function Projetos() {
    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 700) {
                setSlidesPerView(1);
            } else if (window.innerWidth > 700 && window.innerWidth <= 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ProjetosSection id="projetos" aria-label="Projetos">
            <Container>
                <Subtitulo>Projetos</Subtitulo>
                <SwiperWrapper>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        grabCursor={true}
                    >
                        {projetos.map((projeto) => (
                            <SwiperSlide key={projeto.id}>
                                <ProjetosItem>
                                    <ProjetosTitulo>{projeto.titulo}</ProjetosTitulo>
                                    <ProjetosTechLabel>Tech utilizada:</ProjetosTechLabel>
                                    <ProjetosTechList>
                                        {projeto.tecnologias.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ProjetosTechList>
                                    <ProjetosDescricao>{projeto.descricao}</ProjetosDescricao>
                                    <ProjetosBotoes>
                                        {projeto.verProjeto && (
                                            <a href={projeto.verProjeto} target="_blank" rel="noopener noreferrer">
                                                <ProjetosButton>Ver projeto</ProjetosButton>
                                            </a>
                                        )}
                                        {projeto.github && (
                                            <a href={projeto.github} target="_blank" rel="noopener noreferrer">
                                                <ProjetosButton>Github</ProjetosButton>
                                            </a>
                                        )}
                                    </ProjetosBotoes>
                                </ProjetosItem>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperWrapper>
            </Container>
        </ProjetosSection>
    );
}

export default Projetos;
