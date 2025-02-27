document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".images img");
    images.forEach(img => {
        img.addEventListener("click", function () {
            img.classList.toggle("zoom");
        });
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for your message! I'll get back to you soon.");
        form.reset();
    });
});
