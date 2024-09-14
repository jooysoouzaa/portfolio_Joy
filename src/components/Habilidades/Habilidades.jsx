import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import './HabilidadesStyle.css'

function Habilidades() {
    const [slidesPerView, setSlidesPerView] = useState(7);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 480) {
                setSlidesPerView(2);
            } else if (window.innerWidth > 480 && window.innerWidth <= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
                setSlidesPerView(5);
            } else {
                setSlidesPerView(6);
            }
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section className='habilidades container' id='habilidades' aria-label="Habilidades">
            <h2 className='habilidades__subtitulo'>Habilidades</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={slidesPerView}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/react.svg' alt='React' width='80' height='80' />
                    <span>React</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/styled-components.svg' alt='Styled Components' width='80' height='80' />
                    <span>Styled Components</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/html.svg' alt='HTML' width='80' height='80' />
                    <span>HTML</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/javascript.svg' alt='JavaScript' width='80' height='80' />
                    <span>JavaScript</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/css.svg' alt='CSS' width='80' height='80' />
                    <span>CSS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/sass.svg' alt='sass' width='80' height='80' />
                    <span>SASS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/less.svg' alt='less' width='80' height='80' />
                    <span>LESS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/bem.svg' alt='bem' width='80' height='80' />
                    <span>BEM</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/typescript.svg' alt='TypeScript' width='80' height='80' />
                    <span>TypeScript</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/bootstrap.svg' alt='bootstrap' width='80' height='80' />
                    <span>Bootstrap</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/jest.svg' alt='jest' width='80' height='80' />
                    <span>Jest</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/cypress.svg' alt='cypress' width='80' height='80' />
                    <span>Cypress</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/testing-library.svg' alt='React Testing Library' width='80' height='80' />
                    <span>React Testing Library</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/git.svg' alt='git' width='80' height='80' />
                    <span>Git</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/vercel.svg' alt='vercel' width='80' height='80' />
                    <span>Vercel</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/vscode.svg' alt='vscode' width='80' height='80' />
                    <span>VS Code</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/babel.svg' alt='babel' width='80' height='80' />
                    <span>Babel</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/gulp.svg' alt='gulp' width='80' height='80' />
                    <span>Gulp</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/grunt.svg' alt='grunt' width='80' height='80' />
                    <span>Grunt</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/parcel.svg' alt='parcel' width='80' height='80' />
                    <span>Parcel</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/figma.svg' alt='figma' width='80' height='80' />
                    <span>Figma</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades__tech'>
                    <img src='/habilidades/wordpress.svg' alt='wordpress' width='80' height='80' />
                    <span>WordPress</span>
                </SwiperSlide>
            </Swiper>
            <h3 aria-label='Tecnologias em aprimoramento'>Tecnologias em aprimoramento</h3>
            <ul className='habilidades__lista'>
                <li className='habilidades__lista__tech'>React</li>
                <li className='habilidades__lista__tech'>TypeScript</li>
                <li className='habilidades__lista__tech'>Styled Components</li>
                <li className='habilidades__lista__tech'>Redux</li>
                <li className='habilidades__lista__tech'>Jest</li>
                <li className='habilidades__lista__tech'>React Testing Library</li>
            </ul>
        </section>
    );
}

export default Habilidades;
