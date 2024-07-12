document.addEventListener("DOMContentLoaded", function () {
    const btnTop = document.querySelector(".btn-top");
    const sobreSection = document.querySelector("#sobre");

    window.addEventListener("scroll", function () {
        const sobrePosition = sobreSection.getBoundingClientRect().top;

        if (window.scrollY + window.innerHeight > sobrePosition) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });

    btnTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// Carousel
// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//         slidesPerView: 10, // Quantidade de slides a serem exibidos inicialmente
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         loop: true, // Habilita o modo loop
//         autoplay: {
//             delay: 2000, // 3 segundos entre as transições
//             disableOnInteraction: false, // Continue o autoplay após interação
//         },
//         breakpoints: {
//             // Quando a largura da tela for 1300 pixels ou mais
//             1700: {
//                 slidesPerView: 10,
//             },
//             // Quando a largura da tela for 1025 pixels ou mais
//             1025: {
//                 slidesPerView: 6,
//             },
//             // Quando a largura da tela for 769 pixels até 1024 pixels
//             769: {
//                 slidesPerView: 5,
//             },
//             // Quando a largura da tela for 481 pixels até 768 pixels
//             481: {
//                 slidesPerView: 3,
//             },
//             // Quando a largura da tela for 480 pixels ou menos
//             0: {
//                 slidesPerView: 2,
//             }
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    var habilidadesSwiper;
    var hobbySwiper;

    function initSwipers() {
        // Configuração do Swiper para habilidades (todas as telas)
        if (!habilidadesSwiper) {
            habilidadesSwiper = new Swiper('.habilidades-swiper', {
                slidesPerView: 6, // Ajuste conforme necessário
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    // Quando a largura da tela for 1300 pixels ou mais
                    1700: {
                        slidesPerView: 10,
                    },
                    // Quando a largura da tela for 1025 pixels ou mais
                    1025: {
                        slidesPerView: 6,
                    },
                    // Quando a largura da tela for 769 pixels até 1024 pixels
                    769: {
                        slidesPerView: 5,
                    },
                    // Quando a largura da tela for 481 pixels até 768 pixels
                    481: {
                        slidesPerView: 3,
                    },
                    // Quando a largura da tela for 480 pixels ou menos
                    0: {
                        slidesPerView: 2,
                    }
                }
            });
        }

        // Configuração do Swiper para hobby (somente telas menores que 768px)
        if (window.innerWidth <= 767 && !hobbySwiper) {
            hobbySwiper = new Swiper('.hobby-swiper', {
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                breakpoints: {
                    600: {
                        slidesPerView: 3,
                    },
                    320: {
                        slidesPerView: 2,
                    }
                }
            });
        } else if (window.innerWidth > 767 && hobbySwiper) {
            hobbySwiper.destroy(true, true);
            hobbySwiper = undefined;
        }
    }

    initSwipers();
    window.addEventListener('resize', initSwipers);
});