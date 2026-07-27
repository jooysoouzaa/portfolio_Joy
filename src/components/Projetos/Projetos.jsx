import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { projetos } from "../../data/projetos";

import {
    ProjetosSection,
    Container,
    Subtitulo,
    ProjetosItem,
    ProjetosTitulo,
    // ProjetosTechLabel,
    // ProjetosTechList,
    // ProjetosDescricao,
    ProjetosBotoes,
    ProjetosButton,
    SwiperWrapper,
} from "./ProjetosStyle";

function Projetos() {
    const [slidesPerView, setSlidesPerView] = useState(2);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 700) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(2);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ProjetosSection id="projetos" aria-label="Projetos">
            <Container>
                <Subtitulo>
                    Projetos<strong>.</strong>
                </Subtitulo>

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

                                    <ProjetosTitulo>
                                        {projeto.titulo}
                                    </ProjetosTitulo>

                                    {projeto.imagemCapa && (
                                        <img
                                            src={projeto.imagemCapa}
                                            alt={`Imagem do projeto ${projeto.titulo}`}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: "10px",
                                                marginBottom: "1rem",
                                            }}
                                        />
                                    )}

                                    {/* <ProjetosTechLabel>
                                        Tech utilizada:
                                    </ProjetosTechLabel>

                                    <ProjetosTechList>
                                        {projeto.tecnologias.map((tech) => (
                                            <li key={tech}>{tech}</li>
                                        ))}
                                    </ProjetosTechList> */}

                                    {/* <ProjetosDescricao>
                                        {projeto.resumo}
                                    </ProjetosDescricao> */}

                                    <ProjetosBotoes>
                                        <Link to={`/projetos/${projeto.slug}`}>
                                            <ProjetosButton>
                                                Ver detalhes
                                            </ProjetosButton>
                                        </Link>
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