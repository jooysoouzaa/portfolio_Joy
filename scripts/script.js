document.addEventListener("DOMContentLoaded", function () {
    const btnTop = document.querySelector(".btn-top");
    const projetosSection = document.querySelector("#projeto02");

    window.addEventListener("scroll", function () {
        const projetosPosition = projetosSection.getBoundingClientRect().top;

        if (window.scrollY + window.innerHeight > projetosPosition) {
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


//carousel
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

//menu
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a'); // seleciona todos os links dentro do menu
const closeMenu = document.getElementById('close-menu'); // seleciona o botão de fechar

function toggleMenu() {
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

// Adiciona um event listener para cada link do menu
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu ao clicar em um link
        nav.classList.remove('active');
    });
});

// Adiciona um event listener para o botão de fechar
closeMenu.addEventListener("click", () => {
    // Fecha o menu ao clicar no botão de fechar
    nav.classList.remove('active');
});


