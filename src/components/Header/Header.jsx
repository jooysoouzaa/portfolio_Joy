import { useEffect } from 'react';
import './HeaderStyle.css';

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
        <main className='container-bg'>
            <div className='container'>
                <header className='header' id='header'>
                    <a href='#' className='header__logo'>
                        <img src='/logotipo/logotipo.svg' alt="Joy Sóuza" width="70" height="50" />
                    </a>
                    <nav id="nav">
                        <button id="btn-mobile">
                            <span id="hamburger"></span>
                        </button>
                        <ul className="header__menu" id="menu">
                            <a id="header__menu_logo">
                                <img src="/logotipo/logotipo.svg" alt="Joy Sóuza" width="70" height="50" />
                            </a>
                            <button id="close-menu">X</button>
                            <li><a href="#projetos">Projetos</a></li>
                            <li><a href="#habilidades">Habilidades</a></li>
                            <li><a href="#sobre">Sobre Mim</a></li>
                            <li><a href="#formacao">Formação</a></li>
                            <li><a href="#experiencias">Experiências</a></li>
                            <li><a href="#hobby">Hobbies</a></li>
                        </ul>
                    </nav>
                </header>
                <div className='introducao'>
                    <img src='/img_avatar.webp' className='introducao__img' alt="Foto de Perfil - Joy Sóuza" width="140" />
                    <h1 className='introducao__title'>Olá! Sou a <strong>Joy Sóuza</strong></h1>
                    <h2 className='introducao__subtitle'>Desenvolvedora Front-End<strong>.</strong></h2>
                </div>
                <div className='contatos'>
                    <ul className='contatos__lista'>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5511969838280" target="_blank" rel="noopener noreferrer"><img
                                src="/contato/whatsapp.svg" alt="WhatsApp" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:joysouza.contato@gmail.com?subject=Olá%20Joy Sóuza" target="_blank" rel="noopener noreferrer"><img
                                src="/contato/email.svg" alt="E-mail" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/jooysoouzaa" target="_blank" rel="noopener noreferrer"><img src="/contato/github.svg"
                                alt="Github" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jooyaraujo/" target="_blank" rel="noopener noreferrer"><img
                                src="/contato/linkedin.svg" alt="linkedin" width="50" height="50" />
                            </a>
                        </li>
                        <li>
                            <a href="/contato/curriculo_joyceDeSouzaAraujo_desenvolvedoraFrontEnd.pdf" target="_blank" rel="noopener noreferrer"><img
                                src="/contato/curriculo_icon.svg" alt="Currículo" width="50" height="50" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Header;
