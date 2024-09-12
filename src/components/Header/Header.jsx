import './HeaderStyle.css'

function Header() {
    return (
        <main>
            <header className='header' id='header'>
                <a href='#' className='header__logo'>
                    <img src='src/assets/logotipo/logotipo.svg' alt="Joy Sóuza" width="70" height="50" />
                </a>
                <nav id="nav">
                    <button id="btn-mobile">
                        <span id="hamburger"></span>
                    </button>
                    <ul className="header__menu" id="menu">
                        <a id="header__menu_logo">
                            <img src="src/assets/logotipo/logotipo.svg" alt="Joy Sóuza" width="70" height="50" />
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
                <img src='src/assets/img_avatar.webp' className='introducao__img' alt="Foto de Perfil - Joy Sóuza" width="140" />
                <h1 className='introducao__title'>Olá! Sou a <strong>Joy Sóuza</strong></h1>
                <h2 className='introducao__subtitle'>Desenvolvedora Front-End<strong>.</strong></h2>
            </div>
            <div className='contatos'>
                <ul className='contatos__lista'>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=5511969838280" target="_blank"><img
                            src="src/assets/contato/whatsapp.svg" alt="WhatsApp" width="50" height="50" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:joysouza.contato@gmail.com?subject=Olá%20Joy Sóuza" target="_blank"><img
                            src="src/assets/contato/email.svg" alt="E-mail" width="50" height="50" />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/jooysoouzaa" target="_blank"><img src="src/assets/contato/github.svg"
                            alt="Github" width="50" height="50" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/jooyaraujo/" target="_blank" ><img
                            src="src/assets/contato/linkedin.svg" alt="linkedin" width="50" height="50" />
                        </a>
                    </li>
                    <li>
                        <a href="src/assets/contato/curriculo_joyceDeSouzaAraujo_desenvolvedoraFrontEnd.pdf" target="_blank" ><img
                            src="src/assets/contato/curriculo_icon.svg" alt="linkedin" width="50" height="50" />
                        </a>
                    </li>
                </ul>
            </div>

        </main>
    )
}

export default Header