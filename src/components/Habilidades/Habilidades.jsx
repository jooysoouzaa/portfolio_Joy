import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
// import './HabilidadesStyle.css'
import {
    HabilidadesSection, HabilidadesTitulo, SwiperWrapper, HabilidadesTech,
} from './HabilidadesStyle';

function Habilidades() {
    const [slidesPerView, setSlidesPerView] = useState(9);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 500) {
                setSlidesPerView(3);
            } else if (window.innerWidth > 500 && window.innerWidth <= 767) {
                setSlidesPerView(4);
            } else if (window.innerWidth > 767 && window.innerWidth <= 1024) {
                setSlidesPerView(6);
            } else if (window.innerWidth > 1024 && window.innerWidth <= 1500) {
                setSlidesPerView(8);
            } else {
                setSlidesPerView(12);
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
            <HabilidadesTitulo>Habilidades<strong>.</strong></HabilidadesTitulo>
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
        </HabilidadesSection>
    );
}
export default Habilidades;
