function createStars() {
    const starContainer = document.querySelector(".stars");
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";
        star.style.animationDuration = (Math.random() * 5 + 2) + "s";
        starContainer.appendChild(star);
    }
}
createStars();