import styled from 'styled-components';

export const ProjetosSection = styled.section`

`;

export const Container = styled.section`
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 60px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
`;

export const Subtitulo = styled.h2`
    color: #fef5f5;
    font-size: 40px;
    margin-top: 60px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;
    margin-bottom: -20px;

    @media screen and (max-width: 767px) {
        font-size: 30px !important;
        margin-top: 20px;
    }
`;

export const ProjetosItem = styled.div`
    padding: 30px;
    background: #121212;
    border: 1px solid #3d3d3d6e;
    border-radius: 10px;
    height: 380px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    &::before {
        content: "";
        display: block;
        width: 4px;
        height: 50px;
        background: linear-gradient(180deg, #FA12E3, #7312FA, #415CA7);
        position: absolute;
        top: 20px;
        left: 0;
    }

    @media only screen and (min-width: 320px) and (max-width: 1024px) {
        padding: 20px;
        height: 320px;
    }

    @media only screen and (min-width: 1025px) {
        height: 390px;
    }
`;

export const ProjetosTitulo = styled.h3`
    font-size: 1.125rem;
    letter-spacing: 1px;
    line-height: 1.1;
    font-weight: 600;
    background: linear-gradient(90deg, #FA12E3, #7312FA, #415CA7);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 10px;
`;

export const ProjetosTechLabel = styled.span`
    font-size: 1.125rem;
    letter-spacing: 1px;
    line-height: 1.1;
    font-weight: 500;
    color: #fef5f5;
`;

export const ProjetosTechList = styled.ul`
    display: flex;
    white-space: nowrap;
    gap: 10px;
    align-items: start;
    flex-wrap: wrap;
    margin: 10px 0;

    li {
        font-size: 1.125rem;
        line-height: 1.4;
        font-weight: 500;
        border-radius: 4px;
        background-color: #303030;
        color: #fef5f5;
        padding: 5px 10px;
    }
`;

export const ProjetosDescricao = styled.p`
    font-size: 1.125rem;
    line-height: 1.4;
    color: #bdbdbd;
    flex: 1;
    margin-bottom: 16px;
`;

export const ProjetosBotoes = styled.div`
    display: flex;
    gap: 14px;

    a {
        text-decoration: none;
        max-width: max-content;
    }
`;

export const ProjetosButton = styled.button`
    font-family: "Titillium Web", sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 600;
    border-radius: 4px;
    background: linear-gradient(90deg, #FA12E3, #7312FA, #415CA7);
    color: #000;
    padding: 10px;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.8s ease-out;

    &:hover {
        background: linear-gradient(-90deg, #FA12E3, #7312FA, #415CA7);
        transform: scale(1.2);
    }
`;

export const SwiperWrapper = styled.div`
    .swiper-wrapper {
    margin-top: 90px;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: stretch;
    height: 100%;
}

.swiper-button-next,
.swiper-button-prev {
    background: linear-gradient(90deg, #FA12E3, #7312FA, #415CA7);
    color: #010101;
    width: 35px !important;
    height: 35px !important;
    font-size: 18px;
    border-radius: 50%;
    z-index: 9999 !important;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 16px !important;
    color: #f5f5f5;
    font-weight: bold;
    -webkit-text-stroke: 0.1px #f5f5f5;
}

.swiper-pagination-bullets.swiper-pagination-horizontal {
    margin-top: 32px;
    position: relative;
}

.swiper-pagination-bullet {
    background: #7312FA !important;
}

.swiper-button-prev {
    left: auto !important;
    right: 56px !important;
    top: 56px !important;
}

.swiper-button-next {
    top: 56px !important;
}

`;
