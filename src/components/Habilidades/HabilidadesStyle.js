import styled from 'styled-components'

export const HabilidadesSection = styled.section`
    max-width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
`;


export const HabilidadesTitulo = styled.h2`
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px;

    color: #fef5f5;
    margin-top: 100px;
    margin-bottom: 40px;
    font-size: 40px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px) {
        font-size: 30px !important;
        margin-top: 60px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }
`;

export const SwiperWrapper = styled.div`
    .swiper-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
}

.swiper-slide {
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
`;

export const HabilidadesTech = styled.div`
        padding: 20px;

    &:hover img{
        transform: scale(1.1);
    }

    img{
        max-width: 100%;
        margin: 0 auto;
        display: block;
        transition: transform 0.3s ease;
    }

    &:hover span{
        opacity: 1;
    }

    span{
        opacity: 0;
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #0101019d;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        white-space: nowrap;
        transition: opacity .3s ease;
        z-index: 4 !important;
    }
`;

export const HabilidadesSubtitulo = styled.h3`
    max-width: 1280px;
    margin: 0 auto;
    padding: 8px 20px 0 20px;
    line-height: 1.4;
    color: #fef5f5;
    text-transform: uppercase;
    margin-bottom: 10px;
    position: relative;
    margin-top: 30px;

     @media screen and (max-width: 767px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 1023px) {
        padding: 0 20px;
    }
`;

export const HabilidadesLista = styled.ul`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;

    @media screen and (max-width: 1023px) {
        padding: 8px 20px;
    }
`;

export const HabilidadesListaTech = styled.li`
    font-size: 1.125rem;
    line-height: 1.4;
    font-weight: 500;
    border-radius: 4px;
    background: #121212;
    border: 1px solid #3d3d3d6e;
    color: #fef5f5;
    padding: 12px;

    img {
    max-width: 100%;
}

@media screen and (max-width: 767px) {
    font-size: 1rem;
}
`;