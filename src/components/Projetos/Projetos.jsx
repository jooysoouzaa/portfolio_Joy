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
        imagem: '/projetos/Dashboard_de_Vendas.png',
        titulo: 'Dashboard de Vendas',
        tecnologias: ['Excel', 'Power BI'],
        descricao: 'Análise de vendas — total vendido, metas alcançadas, ticket médio, vendas por produto, evolução mensal e desempenho geral. Dados tratados com Power Query e visualizados no Power BI.',
        verProjeto: 'https://app.powerbi.com/view?r=eyJrIjoiMmE1MWNhNTEtN2FlOC00NGU1LTgzMzctM2JhY2VkZjUwMjJiIiwidCI6ImI0NmI1MDViLWNiYzgtNGI1Zi1iMzMzLTZhZTViMjFhZDc4NyJ9',
    },
    {
        id: 2,
        imagem: '/projetos/Dashboard_de_Producao.png',
        titulo: 'Dashboard de Produção',
        tecnologias: ['Excel', 'Power BI (DAX)'],
        descricao: 'Análise de produção – total aprovado, total reprovado, índice de qualidad e produtividade. Dados tratados no Power Query e métricas calculadas com DAX.',
        verProjeto: 'https://app.powerbi.com/view?r=eyJrIjoiZWVlZWExYzctZmZmNi00NDUyLThmMmItZDljYzFmZjZlY2VlIiwidCI6ImI0NmI1MDViLWNiYzgtNGI1Zi1iMzMzLTZhZTViMjFhZDc4NyJ9',
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
                                    {projeto.imagem && (
                                        <img
                                            src={projeto.imagem}
                                            alt={`Imagem do projeto ${projeto.titulo}`}
                                            style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '1rem' }}
                                        />
                                    )}
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
                                                <ProjetosButton>Ver detalhes</ProjetosButton>
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
