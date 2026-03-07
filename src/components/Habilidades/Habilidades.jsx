import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
// import './HabilidadesStyle.css'
import {
    HabilidadesSection, SwiperWrapper, HabilidadesTech,
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
                            <img src='/habilidades/PowerBI.svg' alt='Power BI' width='80' height='80' />
                            <span>Power BI</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                    <SwiperSlide className='habilidades__tech'>
                        <HabilidadesTech>
                            <img src='/habilidades/Looker.svg' alt='Looker' width='80' height='80' />
                            <span>Looker</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                    <SwiperSlide className='habilidades__tech'>
                        <HabilidadesTech>
                            <img src='/habilidades/SQL.svg' alt='SQL' width='80' height='80' />
                            <span>SQL</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                    <SwiperSlide className='habilidades__tech'>
                        <HabilidadesTech>
                            <img src='/habilidades\Pyspark.svg' alt='PySpark' width='80' height='80' />
                            <span>PySpark</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                    <SwiperSlide className='habilidades__tech'>
                        <HabilidadesTech>
                            <img src='\habilidades\Databricks.svg' alt='Databricks' width='80' height='80' />
                            <span>Databricks</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                    <SwiperSlide className='habilidades__tech'>
                        <HabilidadesTech>
                            <img src='public\habilidades\ADF.svg' alt='Azure Data Factory' width='80' height='80' />
                            <span>Azure Data Factory</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                    <SwiperSlide className='habilidades__tech'>
                        <HabilidadesTech>
                            <img src='public\habilidades\Python.svg' alt='Python' width='80' height='80' />
                            <span>Python</span>
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
                            <img src='/habilidades/vscode.svg' alt='vscode' width='80' height='80' />
                            <span>VS Code</span>
                        </HabilidadesTech>
                    </SwiperSlide>
                </Swiper>
            </SwiperWrapper>
        </HabilidadesSection>
    );
}
export default Habilidades;
