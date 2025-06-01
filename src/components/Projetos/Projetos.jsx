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
        titulo: 'Dashboard de Vendas',
        tecnologias: ['Excel', 'Power BI'],
        descricao: 'Após o tratamento de dados no Power Query, foi desenvolvido um dashboard com indicadores de vendas para facilitar a análise de desempenho comercial de forma visual e interativa.',
        verProjeto: '#',
    },
    {
        id: 2,
        titulo: 'Dashboard de Vendas',
        tecnologias: ['Excel', 'Power BI'],
        descricao: 'Após o tratamento de dados no Power Query, foi desenvolvido um dashboard com indicadores de vendas para facilitar a análise de desempenho comercial de forma visual e interativa.',
        verProjeto: '#',
    },
    {
        id: 3,
        titulo: 'Dashboard de Vendas',
        tecnologias: ['Excel', 'Power BI'],
        descricao: 'Após o tratamento de dados no Power Query, foi desenvolvido um dashboard com indicadores de vendas para facilitar a análise de desempenho comercial de forma visual e interativa.',
        verProjeto: '#',
    },
    {
        id: 4,
        titulo: 'Dashboard de Vendas',
        tecnologias: ['Excel', 'Power BI'],
        descricao: 'Após o tratamento de dados no Power Query, foi desenvolvido um dashboard com indicadores de vendas para facilitar a análise de desempenho comercial de forma visual e interativa.',
        verProjeto: '#',
    },
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
                <Subtitulo>Projetos<strong>.</strong></Subtitulo>
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
