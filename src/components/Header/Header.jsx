import { useEffect, useState } from 'react';
import {
    MainContainer, Container, HeaderWrapper, Logo, Nav, ButtonMobile, Hamburger, Menu, MenuLogo, CloseMenuButton,
    MenuItem, Introducao, IntroducaoImg, IntroducaoTitle, IntroducaoSubtitle, Contatos, ContatosLista, ContatoItem,
    ContatoLink, ContatoImg
} from './HeaderStyle';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const btnTop = document.querySelector(".btn-top");
            const projetosSection = document.querySelector("#projeto02");

            if (!projetosSection) return;
            const projetosPosition = projetosSection.getBoundingClientRect().top;

            if (window.scrollY + window.innerHeight > projetosPosition) {
                btnTop.classList.add("show");
            } else {
                btnTop.classList.remove("show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <MainContainer>
            <Container>
                <HeaderWrapper>
                    <Logo>
                        <img src='/logotipo/logotipo.svg' alt="Joy Sóuza" width="70" height="50" />
                    </Logo>
                    <Nav>
                        <ButtonMobile onClick={toggleMenu}>
                            <Hamburger isOpen={isMenuOpen} />
                        </ButtonMobile>
                        <Menu isOpen={isMenuOpen}>
                            <MenuLogo>
                                <img src="/logotipo/logotipo.svg" alt="Joy Sóuza" width="70" height="50" />
                            </MenuLogo>
                            <CloseMenuButton onClick={toggleMenu}>X</CloseMenuButton>
                            <MenuItem><a href="#projetos" onClick={toggleMenu}>Projetos</a></MenuItem>
                            <MenuItem><a href="#sobre" onClick={toggleMenu}>Sobre Mim</a></MenuItem>
                            <MenuItem><a href="#formacao" onClick={toggleMenu}>Formação</a></MenuItem>
                            <MenuItem><a href="#experiencias" onClick={toggleMenu}>Experiências</a></MenuItem>
                        </Menu>
                    </Nav>
                </HeaderWrapper>
                <Introducao>
                    <IntroducaoImg src='/img_avatar.webp' alt="Foto de Perfil - Joy Sóuza" width="140" />
                    <IntroducaoTitle>Olá! Sou a <strong>Joy Sóuza</strong></IntroducaoTitle>
                    <IntroducaoSubtitle>Front-End Developer<strong>.</strong></IntroducaoSubtitle>
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
                            <ContatoLink href="/contato/JOYCE-DE-SOUZA-ARAUJO - CURRICULO.pdf" target="_blank" rel="noopener noreferrer">
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
