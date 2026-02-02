import styled from 'styled-components'

export const CallSection = styled.section`
max-width: 1280px;
    margin: 0 auto;
    padding: 60px 20px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }
`;

export const CallContainer = styled.div`
    display: block;
    padding: 30px 30px 40px 30px;
    background: #121212;
    border: 1px solid #3d3d3d6e;
    border-radius: 10px;
    position: relative;

    @media screen and (max-width: 1023px) {
    padding: 20px 20px 30px 20px;
    }

    &::before {
    content: "";
    display: block;
    width: 4px;
    height: 50px;
    background: linear-gradient(#9b30f9,#84e);
    position: absolute;
    top: 20px;
    left: 0;
};
`;

export const CallTituloPrincipal = styled.h2`
    color: #fef5f5;
    margin-bottom: 20px;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    font-family: "Titillium Web", sans-serif;

    @media screen and (max-width: 767px){
        font-size: 30px;
    }
`;

export const CallParagrafo = styled.p`
    text-align: center;
    font-size: 1.125rem;
    color: #bdbdbd;
    padding-bottom: 30px;
    width: 45%;
    margin: 0 auto;

    @media screen and (max-width: 1023px){
        width: 80%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;


export const ProjetosButton = styled.button`
    font-family: "Titillium Web", sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    font-weight: 600;
    border-radius: 4px;
    background: linear-gradient(#9b30f9,#84e);
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
        background: linear-gradient(-90deg, #9b30f9,#84e);
        transform: scale(1.2);
    }
`;

export const Contatos = styled.div`
    display: flex;
    justify-content: center;
    `;

export const ContatosLista = styled.ul`
    display: flex;
    gap: 20px;

    @media screen and (max-width: 480px){
        gap: 8px;
    }
`;

export const ContatoItem = styled.li`
    width: 50px;
    `;

export const ContatoLink = styled.a``;

export const ContatoImg = styled.img`
    transition: transform 0.5s ease-out;

    &:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 480px) {
        width: 45px;
    }
    `;
