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
