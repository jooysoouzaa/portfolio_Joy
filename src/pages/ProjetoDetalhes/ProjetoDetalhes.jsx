import { Link, useParams } from "react-router-dom";

import { projetos } from "../../data/projetos";

import Footer from "../../components/Footer/Footer";

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
    SecaoTecnologias
} from "./ProjetoDetalhesStyle";

function ProjetoDetalhes() {
    const { slug } = useParams();

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
            </ProjetoContainer>
            <Footer />
        </PaginaProjeto>
    );
}

export default ProjetoDetalhes;