import { useEffect } from 'react';
import './MenuMobile.css'
import {
    MainContainer, Container, HeaderWrapper, Logo, Nav, ButtonMobile, Hamburger, Menu, MenuLogo, CloseMenuButton,
    MenuItem, Introducao, IntroducaoImg, IntroducaoTitle, IntroducaoSubtitle, Contatos, ContatosLista, ContatoItem,
    ContatoLink, ContatoImg
} from './HeaderStyle';

function Header() {
    useEffect(() => {
        const btnTop = document.querySelector(".btn-top");
        const projetosSection = document.querySelector("#projeto02");

        const handleScroll = () => {
            if (!projetosSection) return;
            const projetosPosition = projetosSection.getBoundingClientRect().top;

            if (window.scrollY + window.innerHeight > projetosPosition) {
                btnTop.classList.add("show");
            } else {
                btnTop.classList.remove("show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Menu
        const btnMobile = document.getElementById('btn-mobile');
        const nav = document.getElementById('nav');
        const navLinks = nav ? nav.querySelectorAll('a') : []; // Verifica se 'nav' não é null
        const closeMenu = document.getElementById('close-menu');

        const toggleMenu = () => {
            nav.classList.toggle("active");
        };

        if (btnMobile) {
            btnMobile.addEventListener("click", toggleMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav) {
                    nav.classList.remove('active');
                }
            });
        });

        if (closeMenu) {
            closeMenu.addEventListener("click", () => {
                if (nav) {
                    nav.classList.remove('active');
                }
            });
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (btnMobile) {
                btnMobile.removeEventListener("click", toggleMenu);
            }
            navLinks.forEach(link => {
                link.removeEventListener('click', () => {
                    if (nav) {
                        nav.classList.remove('active');
                    }
                });
            });
            if (closeMenu) {
                closeMenu.removeEventListener("click", () => {
                    if (nav) {
                        nav.classList.remove('active');
                    }
                });
            }
        };
    }, []);
    return (
        <MainContainer>
            <Container>
                <HeaderWrapper id='header'>
                    <Logo>
                        <img src='/logotipo/logotipo.svg' alt="Joy Sóuza" width="70" height="50" />
                    </Logo>
                    <Nav id="nav">
                        <ButtonMobile id="btn-mobile">
                            <Hamburger id="hamburger" />
                        </ButtonMobile>
                        <Menu id="menu">
                            <MenuLogo id="header__menu_logo">
                                <img src="/logotipo/logotipo.svg" alt="Joy Sóuza" width="70" height="50" />
                            </MenuLogo>
                            <CloseMenuButton id="close-menu">X</CloseMenuButton>
                            <MenuItem><a href="#projetos">Projetos</a></MenuItem>
                            <MenuItem><a href="#habilidades">Habilidades</a></MenuItem>
                            <MenuItem><a href="#sobre">Sobre Mim</a></MenuItem>
                            <MenuItem><a href="#formacao">Formação</a></MenuItem>
                            <MenuItem><a href="#experiencias">Experiências</a></MenuItem>
                        </Menu>
                    </Nav>
                </HeaderWrapper>
                <Introducao>
                    <IntroducaoImg src='/img_avatar.webp' alt="Foto de Perfil - Joy Sóuza" width="140" />
                    <IntroducaoTitle>Olá! Sou a <strong>Joy Sóuza</strong></IntroducaoTitle>
                    <IntroducaoSubtitle>Desenvolvedora Front-End<strong>.</strong></IntroducaoSubtitle>
                </Introducao>
                <Contatos>
                    <ContatosLista>
                        <ContatoItem>
                            <ContatoLink href="https://api.whatsapp.com/send?phone=5511969838280" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/whatsapp.svg" alt="WhatsApp" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                        <ContatoItem>
                            <ContatoLink href="mailto:joysouza.contato@gmail.com?subject=Olá%20Joy Sóuza" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/email.svg" alt="E-mail" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                        <ContatoItem>
                            <ContatoLink href="https://github.com/jooysoouzaa" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/github.svg" alt="Github" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                        <ContatoItem>
                            <ContatoLink href="https://www.linkedin.com/in/jooyaraujo/" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/linkedin.svg" alt="Linkedin" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                        <ContatoItem>
                            <ContatoLink href="/contato/curriculo_joyceDeSouzaAraujo_desenvolvedoraFrontEnd.pdf" target="_blank" rel="noopener noreferrer">
                                <ContatoImg src="/contato/curriculo_icon.svg" alt="Currículo" width="50" height="50" />
                            </ContatoLink>
                        </ContatoItem>
                    </ContatosLista>
                </Contatos>
            </Container>
        </MainContainer>
    );
}

export default Header;
