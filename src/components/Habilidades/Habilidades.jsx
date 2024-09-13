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
        <section className='habilidades' id='habilidades' aria-label="Habilidades">
            <h2 className='subtitulo-habilidade'>Habilidades</h2>
            <Swiper
                spaceBetween={16}
                slidesPerView={slidesPerView}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: true,
                }}
                className='habilidade'
            >
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/react.svg' alt='React' width='80' height='80' />
                    <span>React</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/styled-components.svg' alt='Styled Components' width='80' height='80' />
                    <span>Styled Components</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/html.svg' alt='HTML' width='80' height='80' />
                    <span>HTML</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/javascript.svg' alt='JavaScript' width='80' height='80' />
                    <span>JavaScript</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/css.svg' alt='CSS' width='80' height='80' />
                    <span>CSS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/sass.svg' alt='sass' width='80' height='80' />
                    <span>SASS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/less.svg' alt='less' width='80' height='80' />
                    <span>LESS</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/bem.svg' alt='bem' width='80' height='80' />
                    <span>BEM</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/bootstrap.svg' alt='bootstrap' width='80' height='80' />
                    <span>Bootstrap</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/git.svg' alt='git' width='80' height='80' />
                    <span>Git</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/vercel.svg' alt='vercel' width='80' height='80' />
                    <span>Vercel</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/vscode.svg' alt='vscode' width='80' height='80' />
                    <span>VS Code</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/babel.svg' alt='babel' width='80' height='80' />
                    <span>Babel</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/gulp.svg' alt='gulp' width='80' height='80' />
                    <span>Gulp</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/grunt.svg' alt='grunt' width='80' height='80' />
                    <span>Grunt</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/parcel.svg' alt='parcel' width='80' height='80' />
                    <span>Parcel</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/figma.svg' alt='figma' width='80' height='80' />
                    <span>Figma</span>
                </SwiperSlide>
                <SwiperSlide className='habilidades-tipo'>
                    <img src='/habilidades/wordpress.svg' alt='wordpress' width='80' height='80' />
                    <span>WordPress</span>
                </SwiperSlide>

            </Swiper>

            <div className='habilidades'>
                <h3 aria-label='Tecnologias em aprimoramento'>Tecnologias em aprimoramento</h3>
                <ul className='novas-habilidades-container'>
                    <li className='novas-habilidades-tipo'>React</li>
                    <li className='novas-habilidades-tipo'>TypeScript</li>
                    <li className='novas-habilidades-tipo'>Styled Components</li>
                    <li className='novas-habilidades-tipo'>Redux</li>
                    <li className='novas-habilidades-tipo'>Jest</li>
                    <li className='novas-habilidades-tipo'>React Testing Library</li>
                </ul>
            </div>
        </section>
    );
}

export default Habilidades;
