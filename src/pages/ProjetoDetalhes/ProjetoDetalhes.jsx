import { Link, useParams } from "react-router-dom";

import { projetos } from "../../data/projetos";

import Footer from "../../components/Footer/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

import {
    PaginaProjeto,
    ProjetoContainer,
    BotaoVoltar,
    CabecalhoProjeto,
    ProjetoTitulo,
    ProjetoResumo,
    MidiaPrincipal,
    VideoProjeto,
    ImagemPrincipal,
    SecaoProjeto,
    SecaoTitulo,
    ListaProjeto,
    TecnologiasLista,
    TecnologiaItem,
    ProjetosBox,
    TituloSobreProjeto,
    SecaoTecnologias,
    GaleriaSection,
    GaleriaTitulo,
    GaleriaCarousel,
    GaleriaItem,
    GaleriaModal,
    BotaoFechar,
    AchadosBox,
    ListaAchados,
    AchadosIntroducao,
    GithubArea,
    GithubButton,
    ImagemAmpliada
} from "./ProjetoDetalhesStyle";

function ProjetoDetalhes() {
    const { slug } = useParams();

    const [imagemAberta, setImagemAberta] = useState(null);

    const projeto = projetos.find(
        (item) => item.slug === slug
    );

    if (!projeto) {
        return (
            <PaginaProjeto>
                <ProjetoContainer>
                    <h1>Projeto não encontrado</h1>

                    <Link to="/">
                        Voltar ao portfólio
                    </Link>
                </ProjetoContainer>
            </PaginaProjeto>
        );
    }

    return (
        <PaginaProjeto>
            <ProjetoContainer>
                <BotaoVoltar as={Link} to="/#projetos">
                    ← Voltar para projetos
                </BotaoVoltar>

                <CabecalhoProjeto>
                    <ProjetoTitulo>
                        {projeto.titulo}
                        <strong>.</strong>
                    </ProjetoTitulo>


                </CabecalhoProjeto>

                <MidiaPrincipal>
                    {projeto.video ? (
                        <VideoProjeto
                            autoPlay
                            muted
                            loop
                            playsInline
                            poster={projeto.imagemCapa}
                        >
                            <source
                                src={projeto.video}
                                type="video/mp4"
                            />

                            Seu navegador não suporta reprodução de vídeo.
                        </VideoProjeto>
                    ) : (
                        <ImagemPrincipal
                            src={projeto.imagemCapa}
                            alt={`Visão principal do ${projeto.titulo}`}
                        />
                    )}
                </MidiaPrincipal>


                <ProjetosBox>

                    <TituloSobreProjeto>
                        Sobre o projeto
                    </TituloSobreProjeto>

                    <ProjetoResumo>
                        {projeto.resumo}
                    </ProjetoResumo>

                    <SecaoTecnologias>
                        <SecaoTitulo>Tecnologias utilizadas</SecaoTitulo>

                        <TecnologiasLista>
                            {projeto.tecnologias.map((tecnologia) => (
                                <TecnologiaItem key={tecnologia}>
                                    {tecnologia}
                                </TecnologiaItem>
                            ))}
                        </TecnologiasLista>
                    </SecaoTecnologias>

                    <SecaoProjeto>
                        <SecaoTitulo>Problema</SecaoTitulo>
                        <p>{projeto.problema}</p>
                    </SecaoProjeto>

                    <SecaoProjeto>
                        <SecaoTitulo>Objetivo</SecaoTitulo>
                        <p>{projeto.objetivo}</p>
                    </SecaoProjeto>

                    <SecaoProjeto>
                        <SecaoTitulo>
                            Processo de desenvolvimento
                        </SecaoTitulo>

                        <ListaProjeto>
                            {projeto.processo.map((etapa) => (
                                <li key={etapa}>
                                    {etapa}
                                </li>
                            ))}
                        </ListaProjeto>
                    </SecaoProjeto>

                    <SecaoProjeto>
                        <SecaoTitulo>
                            Indicadores analisados
                        </SecaoTitulo>

                        <ListaProjeto>
                            {projeto.indicadores.map((indicador) => (
                                <li key={indicador}>
                                    {indicador}
                                </li>
                            ))}
                        </ListaProjeto>
                    </SecaoProjeto>
                </ProjetosBox>
                {projeto.achados && projeto.achados.length > 0 && (
                    <AchadosBox>
                        <TituloSobreProjeto>
                            Principais achados
                        </TituloSobreProjeto>

                        <AchadosIntroducao>
                            Durante o processo de transformação, validação e análise dos dados,
                            foram identificados pontos relevantes relacionados à qualidade,
                            consistência e estrutura das informações.
                        </AchadosIntroducao>

                        <ListaAchados>
                            {projeto.achados.map((achado, index) => (
                                <li key={index}>
                                    {achado}
                                </li>
                            ))}
                        </ListaAchados>
                    </AchadosBox>
                )}
                {projeto.galeria && projeto.galeria.length > 0 && (
                    <GaleriaSection>
                        <GaleriaTitulo>
                            Galeria do projeto
                            <strong>.</strong>
                        </GaleriaTitulo>

                        <GaleriaCarousel>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={20}
                                slidesPerView={2}
                                navigation
                                pagination={{ clickable: true }}
                                grabCursor={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                }}
                            >
                                {projeto.galeria.map((imagem, index) => (
                                    <SwiperSlide key={index}>
                                        <GaleriaItem
                                            onClick={() => setImagemAberta(imagem)}
                                        >
                                            <img
                                                src={imagem}
                                                alt={`${projeto.titulo} - imagem ${index + 1}`}
                                            />
                                        </GaleriaItem>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </GaleriaCarousel>
                    </GaleriaSection>
                )}
                {imagemAberta && (
                    <GaleriaModal
                        onClick={() => setImagemAberta(null)}
                    >
                        <BotaoFechar
                            onClick={() => setImagemAberta(null)}
                            aria-label="Fechar imagem"
                        >
                            ×
                        </BotaoFechar>

                        <ImagemAmpliada
                            src={imagemAberta}
                            alt={`Imagem ampliada do projeto ${projeto.titulo}`}
                            onClick={(event) => event.stopPropagation()}
                        />
                    </GaleriaModal>
                )}

                {projeto.github && (
                    <GithubArea>
                        <GithubButton
                            href={projeto.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ver projeto no GitHub
                        </GithubButton>
                    </GithubArea>
                )}
            </ProjetoContainer>
            <Footer />
        </PaginaProjeto>
    );
}

export default ProjetoDetalhes;