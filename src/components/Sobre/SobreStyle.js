import styled from 'styled-components'

export const SobreSection = styled.section`
max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }
`;

export const SobreContainer = styled.div`
    display: block;
    padding: 30px;
    background: #121212;
    border: 1px solid #3d3d3d6e;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }

    &::before {
    content: "";
    display: block;
    width: 4px;
    height: 50px;
    background: linear-gradient(90deg, #FA12E3, #7312FA, #415CA7);
    position: absolute;
    top: 20px;
    left: 0;
};
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
    color: #bdbdbd;
    margin-bottom: 20px;
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
    margin-top: 20px;
    padding: 16px;

    &:hover {
        background: linear-gradient(-90deg, #FA12E3, #7312FA, #415CA7);
        transform: scale(1.2);
    }
`;


