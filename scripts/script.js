document.addEventListener("DOMContentLoaded", function() {
    const btnTop = document.querySelector(".btn-top");
    const sobreSection = document.querySelector("#sobre");

    window.addEventListener("scroll", function() {
        const sobrePosition = sobreSection.getBoundingClientRect().top;

        if (window.scrollY + window.innerHeight > sobrePosition) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });

    btnTop.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// Carousel
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 7, // Quantidade de slides a serem exibidos inicialmente
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true, // Habilita o modo loop
        autoplay: {
            delay: 2000, // 3 segundos entre as transições
            disableOnInteraction: false, // Continue o autoplay após interação
        },
        breakpoints: {
            // Quando a largura da tela for 1025 pixels ou mais
            1025: {
                slidesPerView: 7,
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
});