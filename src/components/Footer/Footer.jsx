import { useEffect, useRef } from 'react';
import './FooterStyle.css';

function Footer() {
    const btnTopRef = useRef(null);
    const projetosSectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const projetosPosition = projetosSectionRef.current.getBoundingClientRect().top;

            if (window.scrollY + window.innerHeight > projetosPosition) {
                btnTopRef.current.classList.add("show");
            } else {
                btnTopRef.current.classList.remove("show");
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <section className='footer'>
            <div className="footer__container">
                <div className="btn-top" ref={btnTopRef}>
                    <a href="#" onClick={scrollToTop} title="voltar ao topo">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="currentColor">
                            <path
                                d="m357-384 123-123 123 123 57-56-180-180-180 180 57 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                        </svg>
                    </a>
                </div>
                <img src='/logotipo/logotipo.svg' className='footer_img' width="50" height="50" />
                <p className="footer__copy"> &copy; 2024 - Desenvolvido por <strong>Joy Sóuza</strong></p>
            </div>
            <div id="projeto02" ref={projetosSectionRef}></div>
        </section>
    );
}

export default Footer;
