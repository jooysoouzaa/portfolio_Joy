import styled from 'styled-components';

export const TituloSobreProjeto = styled.h2`
  grid-column: 1 / -1;
  color: #9333ea;
  font-size: 40px;
  font-weight: 700;
  &::after {
    content: '.';
    color: #fef5f5;
  }

  @media (max-width: 767px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

export const ProjetosBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 20px;
  padding: 30px;
  background: #121212;
  border: 1px solid #3d3d3d6e;
  border-radius: 10px;
  position: relative;
  margin-top: 30px;

  @media screen and (max-width: 1023px) {
    display: block;
    padding: 20px;
  }

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 50px;
    background: linear-gradient(#9b30f9, #84e);
    position: absolute;
    top: 24px;
    left: 0;
  }


  
`;

export const PaginaProjeto = styled.main`
  min-height: 100vh;
  background: #050505;
  color: #fef5f5;
`;

export const ProjetoContainer = styled.div`
  width: min(1100px, 90%);
  margin: 0 auto;
  padding: 48px 0 96px;
`;

export const BotaoVoltar = styled.a`
  display: inline-flex;
  margin-bottom: 48px;
  color: #9b35ff;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CabecalhoProjeto = styled.header`
  max-width: 820px;
  margin-bottom: 40px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const ProjetoTitulo = styled.h1`
  margin-bottom: 16px;
  font-size: clamp(20px, 4vw, 40px);

  
`;

export const ProjetoResumo = styled.p`
  grid-column: 1 / -1;

  color: #b8b8b8;
  font-size: 0.938rem;
  line-height: 1.7;
  margin-bottom: 4x;
`;

export const SecaoTecnologias = styled.section`
  grid-column: 1 / -1;
`;

export const MidiaPrincipal = styled.div`
  width: 100%;
  margin-bottom: 64px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const VideoProjeto = styled.video`
  display: block;
  width: 100%;
  border: 1px solid #3d3d3d6e;
  border-radius: 16px;
  background: #111111;
  object-fit: contain;
`;

export const ImagemPrincipal = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: 1px solid #3d3d3d6e;
  border-radius: 16px;
  object-fit: contain;
`;

export const SecaoProjeto = styled.section`
  max-width: 900px;
  

  p {
    color: #c4c4c4;
    line-height: 1.8;

    @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
  }
`;

export const SecaoTitulo = styled.h2`
  margin-bottom: 4px;
  color: #fef5f5;
  font-size: 1.125rem;

  &::after {
    content: '.';
    color: #9b35ff;
  }
`;

export const ListaProjeto = styled.ul`
  display: grid;
  gap: 12px;
  padding-left: 24px;
  color: #c4c4c4;

  li {
    display: list-item;
    list-style-type: disc;
    list-style-position: outside;
    line-height: 1.6;
    padding-left: 4px;
  }

  li::marker {
    color: #fef5f5;
    font-size: 1rem;
  }

   @media (max-width: 1023px) {
    margin-bottom: 20px;
  }
`;

export const TecnologiasLista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 0;
  list-style: none;
`;

export const TecnologiaItem = styled.li`
  padding: 10px 14px;
  border-radius: 6px;
  background: #252525;
  color: #fef5f5;
  font-size: 0.938rem;
`;

export const GaleriaWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 48px;

  .swiper {
    width: 100%;
    overflow: hidden;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #9333ea;
    color: #fef5f5;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 18px;
    font-weight: 700;
  }

  .swiper-pagination {
    bottom: 8px;
  }

  .swiper-pagination-bullet {
    background: #5b277f;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background: #9333ea;
  }

  @media (max-width: 700px) {
    .swiper-button-prev,
    .swiper-button-next {
      width: 36px;
      height: 36px;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 15px;
    }
  }
`;
