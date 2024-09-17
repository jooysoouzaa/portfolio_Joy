import styled from 'styled-components'

export const SobreSection = styled.section`
    margin-top: 100px;
    background-color: #121212;
    overflow: hidden;

    p {
        font-size: 1.125rem;
        line-height: 1.4;
        color: #bdbdbd;

        @media screen and (max-width: 767px){
            font-size: 1rem;
            max-width: initial;
        }
        @media only screen and (max-width: 1023px) {
            max-width: initial;
    }
}

    @media (max-width: 767px) {
        margin-top: 60px;
}
`;

export const SobreContainer = styled.div`
    max-width: 100%;
    padding-left: 60px;
    display: grid;
    grid-template-columns: 2fr 1fr;

    @media (max-width: 767px) {
        padding: 0;
        grid-template-columns: 1fr;
        height: 100%;
    }

    @media only screen and (max-width: 1023px) {
        padding: 0;
        grid-template-columns: 1fr;
    }

    @media only screen and (min-width: 1440px) {
        max-width: 1280px;
        margin: 0 auto;
        display: grid;
        padding: 0 60px;
        grid-template-columns: 2fr 1fr;
    }
`;

export const SobreTexto = styled.div`
    padding: 40px 40px 40px 0px;
    align-self: center;
    justify-self: end;
}

    @media (max-width: 767px) {
        padding: 60px 20px;
        align-self: center;
    }

     @media only screen and (max-width: 1023px) {
        padding: 60px 20px;
        align-self: center;
    }

      @media only screen and (min-width: 1440px) {
        padding: 40px 40px 40px 0px;
    }
`;

export const SobreTituloPrincipal = styled.h2`
    color: #fef5f5;
    margin-bottom: 20px;
    font-size: 40px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px){
        font-size: 30px;
    }
`;

export const SobreParagrafo = styled.p`
    margin-bottom: 40px;
`;


export const SobreTituloSecundario = styled.h3`
    color: #fef5f5;
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px){
        font-size: 18px;
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
    width: 200px;
    margin-top: 40px;
    padding: 16px;

    &:hover {
        background: linear-gradient(-90deg, #FA12E3, #7312FA, #415CA7);
        transform: scale(1.2);
    }
`;


export const SobreImg = styled.div`
    img{
        height: 100%;
        object-fit: cover;

    @media (max-width: 480px) {
        height: 400px;
        object-fit: cover;
        object-position: top;

}

    @media (min-width: 481px) and (max-width: 767px) {
        height: 600px;
        object-fit: cover;
        object-position: top;
}

    @media (min-width: 768px) and (max-width: 991px) {
        height: 690px;
        object-fit: cover;
        object-position: top;

    }
    @media (min-width: 992px) and (max-width: 1023px) {
        height: 710px;
        object-fit: cover;
        object-position: top;
    }
}
`;

