import styled from 'styled-components';

// Container principal com fundo diferente em dispositivos móveis
export const MainContainer = styled.main`
    background-image: url(/bg_quadriculado.png);
    width: 100%;
    height: 720px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    @media screen and (max-width: 767px) {
        background-image: url(/bg_quadriculado_mobile.png);
        height: 520px;
    }
`;


export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 20px 60px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
    }
`;

// Wrapper do cabeçalho com ajustes para telas menores
export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
    border: 1px solid #3d3d3d6e;
    padding: 12px 40px;
    border-radius: 100px;
    z-index: 4;

    @media screen and (max-width: 1023px) {
        padding: 8px 20px;
    }

    img {
        width: 45px;
        height: 45px;
    }

    @media screen and (max-width: 767px) {
        display: flex;
    }
`;

// Logo com borda arredondada
export const Logo = styled.a`
    border-radius: 10px;
`;

// Navegação com comportamento dinâmico para a exibição do menu
export const Nav = styled.nav`
    #nav.active #menu {
        left: 0;
        visibility: visible;
    }

    @media screen and (max-width: 1023px) {
        #nav.active #hamburger {
            border-top-color: transparent;
        }

        #nav.active #hamburger::before {
            transform: rotate(135deg);
        }

        #nav.active #hamburger::after {
            transform: rotate(-135deg);
            top: -7px;
        }
    }
`;

// Botão móvel exibido apenas em telas menores
export const ButtonMobile = styled.button`
    display: none;
    text-transform: uppercase;
    align-items: center;
    padding: 10px;
    font-size: 0.8rem;
    border: none;
    background: none;
    color: #ffffff;
    cursor: pointer;
    gap: 0.5rem;

    @media screen and (max-width: 1023px) {
        display: flex;
    }
`;

// Hambúrguer do menu com transições suaves
export const Hamburger = styled.span`
    display: block;
    border-top: 3px solid;
    width: 20px;

    &::after,
    &::before {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        margin-top: 5px;
        background-color: currentColor;
        transition: 0.3s;
        position: relative;
    }

    @media screen and (max-width: 1023px) {
        display: block;

        &.active {
            border-top-color: transparent;

            &::before {
                transform: rotate(135deg);
            }

            &::after {
                transform: rotate(-135deg);
                top: -7px;
        }
    }
}
`;

// Menu com comportamento de slide para telas menores
export const Menu = styled.ul`
    display: flex;
    gap: 10px;
    justify-content: center;

    @media screen and (max-width: 1023px) {
        display: block;
        position: fixed;
        width: 100vw;
        top: 0;
        left: -100vw;
        background-color: #000000;
        height: 100%;
        z-index: 1000;
        transition: left 0.5s ease;
        overflow-y: auto;
    }

    a {
        padding: 0 20px 20px 20px;
        color: #ffffff;
        text-decoration: none;
        transition: background-color 0.3s;

        &:hover {
            background-color: transparent;
        }
    }

    @media screen and (max-width: 1023px) {
        &.active {
            left: 0;
            visibility: visible;
        }
    }
`;

// Logo do menu, visível apenas em telas menores
export const MenuLogo = styled.a`
    display: none;

    @media screen and (max-width: 1023px) {
        display: block;
        margin-top: 25px;

        img {
            margin-top: 25px;
        }
    }
`;

// Botão para fechar o menu, visível apenas em telas menores
export const CloseMenuButton = styled.button`
    display: none;

    @media screen and (max-width: 1023px) {
        display: block;
        position: absolute;
        padding: 25px;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        color: #ffffff;
        font-size: 1.5rem;
        cursor: pointer;
    }
`;

// Item de menu com estilos para links
export const MenuItem = styled.li`
    a {
        font-size: 1rem;
        line-height: 1.3;
        padding: 10px 20px;
        text-decoration: none;
        color: #bdbdbd;
        font-weight: 700;
        display: block;
        text-transform: uppercase;
        border-radius: 8px;

        &:hover {
            background: #3d3d3d5b;
            color: #fef5f5;
        }

        @media screen and (max-width: 767px) {
            padding: 10px 15px 10px 5px;
        }
    }
`;

// Introdução centralizada
export const Introducao = styled.div`
    text-align: center;
`;

// Imagem da introdução com ajuste de tamanho em telas menores
export const IntroducaoImg = styled.img`
    max-width: 100%;
    width: 150px;
    margin: 60px auto 20px;

    @media screen and (max-width: 767px) {
        padding-top: 40px;
        margin: 0 auto;
        max-width: 100%;
        width: 120px;
    }
`;

// Título da introdução com ajuste de tamanho em telas menores
export const IntroducaoTitle = styled.h1`
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 10px;

    &:before {
        content: '{';
    }

    &:after {
        content: '}';
    }

    @media screen and (max-width: 767px) {
        font-size: 1.89rem;
        margin-top: 20px;
    }
`;

// Subtítulo da introdução com ajuste de tamanho em telas menores
export const IntroducaoSubtitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 20px;
    color: #bdbdbd;

    @media screen and (max-width: 767px) {
        font-size: 1.4rem;
    }
`;

// Contatos centralizados
export const Contatos = styled.div`
    display: flex;
    justify-content: center;
`;

// Lista de contatos com ajuste de espaço em telas menores
export const ContatosLista = styled.ul`
    display: flex;
    gap: 20px;

    @media screen and (max-width: 360px) {
        gap: 8px;
    }
`;

// Item de contato com ajuste de largura
export const ContatoItem = styled.li`
    width: 50px;
`;

// Link de contato (sem estilos adicionais por enquanto)
export const ContatoLink = styled.a``;

// Imagem de contato com efeito de zoom ao passar o mouse
export const ContatoImg = styled.img`
    transition: transform 0.5s ease-out;

    &:hover {
        transform: scale(1.2);
    }

    @media screen and (max-width: 360px) {
        width: 40px;
    }
`;
