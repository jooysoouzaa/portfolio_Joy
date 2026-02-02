import styled, { keyframes } from 'styled-components';

// Define a animação keyframes
const animafaixa = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
    `;

// Faixa principal
export const Faixa = styled.section`
    height: 92px;
    `;

// Faixa1 com gradiente e rotação
export const Faixa1 = styled.div`
    background: linear-gradient(#9b30f9,#84e);
    transform: rotate(3deg);
    width: 110%;
    margin-top: -30px;
    margin-bottom: -6px;
    z-index: 2;
    position: relative;
    opacity: 0.6;
    filter: blur(1.6px);

    @media only screen and (max-width: 767px) {
        margin-top: 30px;
        margin-bottom: 14px;
    }
    `;

// Faixa2 com gradiente, opacidade e blur
export const Faixa2 = styled.div`
    background: linear-gradient(90deg, #9b30f9,#84e);
    transform: rotate(-3deg) translateY(-110px);
    z-index: 1;
    width: 110%;
    opacity: 0.4;
    filter: blur(3px);
    `;

// TextWrapper geral
export const TextWrapper = styled.div`
    display: flex;
    padding: 15px;
    text-align: right;

    p {
        font-family: "Titillium Web", sans-serif;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 0.1em;
        font-size: 1em;
        color: #fff;
        white-space: nowrap;

        &::before {
        content: '•';
        margin: 0 16px;
        }
    }
    `;

// Aplica a animação no primeiro wrapper
export const TextWrapper1 = styled(TextWrapper)`
    animation: ${animafaixa} 20s infinite linear;

    @media screen and (max-width: 767px){
        animation: ${animafaixa} 8s infinite linear;
    }
    `;

// Aplica a animação no segundo wrapper com animação reversa
export const TextWrapper2 = styled(TextWrapper)`
    animation: ${animafaixa} 20s infinite linear reverse;

    @media screen and (max-width: 767px){
        animation: ${animafaixa} 8s infinite linear reverse;
    }
    `;
