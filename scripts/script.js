document.addEventListener("DOMContentLoaded", function() {
    const btnTop = document.querySelector(".btn-top");
    const projetosSection = document.querySelector("#projetos");

    window.addEventListener("scroll", function() {
        const projetosPosition = projetosSection.getBoundingClientRect().top;

        if (window.scrollY + window.innerHeight > projetosPosition) {
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
