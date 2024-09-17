import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
// import './HabilidadesStyle.css'
import {
    HabilidadesSection, Container, HabilidadesTitulo, SwiperWrapper, HabilidadesTech, HabilidadesSubtitulo, HabilidadesLista,
    HabilidadesListaTech,
} from './HabilidadesStyle';

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
        <HabilidadesSection id='habilidades' aria-label="Habilidades">
            <Container>
                <HabilidadesTitulo>Habilidades</HabilidadesTitulo>
                <SwiperWrapper>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={slidesPerView}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                    >
                        <SwiperSlide>
                            <HabilidadesTech>
                                <img src='/habilidades/react.svg' alt='React' width='80' height='80' />
                                <span>React</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/styled-components.svg' alt='Styled Components' width='80' height='80' />
                                <span>Styled Components</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/html.svg' alt='HTML' width='80' height='80' />
                                <span>HTML</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/javascript.svg' alt='JavaScript' width='80' height='80' />
                                <span>JavaScript</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/css.svg' alt='CSS' width='80' height='80' />
                                <span>CSS</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/sass.svg' alt='sass' width='80' height='80' />
                                <span>SASS</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/less.svg' alt='less' width='80' height='80' />
                                <span>LESS</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/bem.svg' alt='bem' width='80' height='80' />
                                <span>BEM</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/typescript.svg' alt='TypeScript' width='80' height='80' />
                                <span>TypeScript</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/bootstrap.svg' alt='bootstrap' width='80' height='80' />
                                <span>Bootstrap</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/jest.svg' alt='jest' width='80' height='80' />
                                <span>Jest</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/cypress.svg' alt='cypress' width='80' height='80' />
                                <span>Cypress</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/testing-library.svg' alt='React Testing Library' width='80' height='80' />
                                <span>React Testing Library</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/git.svg' alt='git' width='80' height='80' />
                                <span>Git</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/vercel.svg' alt='vercel' width='80' height='80' />
                                <span>Vercel</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/vscode.svg' alt='vscode' width='80' height='80' />
                                <span>VS Code</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/babel.svg' alt='babel' width='80' height='80' />
                                <span>Babel</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/gulp.svg' alt='gulp' width='80' height='80' />
                                <span>Gulp</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/grunt.svg' alt='grunt' width='80' height='80' />
                                <span>Grunt</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/parcel.svg' alt='parcel' width='80' height='80' />
                                <span>Parcel</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/figma.svg' alt='figma' width='80' height='80' />
                                <span>Figma</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                        <SwiperSlide className='habilidades__tech'>
                            <HabilidadesTech>
                                <img src='/habilidades/wordpress.svg' alt='wordpress' width='80' height='80' />
                                <span>WordPress</span>
                            </HabilidadesTech>
                        </SwiperSlide>
                    </Swiper>
                </SwiperWrapper>
                <HabilidadesSubtitulo aria-label='Tecnologias em aprimoramento'>Tecnologias em aprimoramento</HabilidadesSubtitulo>
                <HabilidadesLista>
                    <HabilidadesListaTech>React</HabilidadesListaTech>
                    <HabilidadesListaTech>TypeScript</HabilidadesListaTech>
                    <HabilidadesListaTech>Styled Components</HabilidadesListaTech>
                    <HabilidadesListaTech>Redux</HabilidadesListaTech>
                    <HabilidadesListaTech>Jest</HabilidadesListaTech>
                    <HabilidadesListaTech>React Testing Library</HabilidadesListaTech>
                </HabilidadesLista>
            </Container>
        </HabilidadesSection>
    );
}
export default Habilidades;
