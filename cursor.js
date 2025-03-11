document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;

        createTrail(e.clientX, e.clientY);
    });

    function createTrail(x, y) {
        const trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.left = `${x + 9}px`;
        trail.style.top = `${y + 10}px`; // Offset to mimic rocket fire
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);
    }
});
