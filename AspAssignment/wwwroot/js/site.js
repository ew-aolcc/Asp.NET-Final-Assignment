// title animation
document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("pageTitle");
    if (!title) return;

    let hue = 0;

    function animate() {
        hue = (hue + 1) % 360;
        title.style.color = `hsl(${hue}, 80%, 65%)`;
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});