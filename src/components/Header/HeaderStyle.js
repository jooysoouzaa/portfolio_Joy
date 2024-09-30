import styled from 'styled-components';

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
    padding: 60px 20px;

    @media screen and (max-width: 1023px) {
        padding: 20px;
}
`;

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #121212;
    border: 1px solid #3d3d3d6e;
    padding: 12px 40px;
    border-radius: 100px;
    z-index: 4;
    `;

export const Logo = styled.a`
    img{
    width: 45px;
    height: 45px;
    }
    `;

export const Nav = styled.nav``;

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
    }
    `;

export const Menu = styled.ul`
    display: flex;
    gap: 10px;
    justify-content: center;

    @media screen and (max-width: 1023px) {
        display: block;
        position: fixed;
        width: 100vw;
        top: 0;
        left: ${({ isOpen }) => (isOpen ? '0' : '-100vw')};
        background-color: #000000;
        height: 100%;
        z-index: 1000;
        transition: left 0.5s ease;
        overflow-y: auto;
        padding: 20px;
    }
`;
export const MenuLogo = styled.a`
    display: none;

    @media screen and (max-width: 1023px) {
        display: block;
    }
    `;

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

        @media screen and (max-width: 1023px) {
        text-align: left;
}

        @media screen and (max-width: 767px) {
        padding: 10px 15px 10px 5px;
        }
    }
        @media screen and (max-width: 1023px) {
        list-style: none;
        padding: 20px;
        color: #fff;
        background-color: #121212;
        border: 1px solid #3d3d3d6e;
        border-radius: 50px;
        margin: 10px 0;
        text-align: center;
        cursor: pointer;
    }
`;


export const Introducao = styled.div`
    text-align: center;
    `;

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

export const IntroducaoSubtitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 20px;
    color: #bdbdbd;

    @media screen and (max-width: 767px) {
        font-size: 1.4rem;
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