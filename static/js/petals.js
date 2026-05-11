function createPetal() {
    const petal = document.createElement("img");

    petal.src = "/static/images/petal.png";
    petal.classList.add("petal");

    const side = Math.random() < 0.5;

    if (side) {
        petal.style.left = Math.random() * 150 + "px";
    } else {
        petal.style.left = window.innerWidth - Math.random() * 150 + "px";
    }

    petal.style.width = Math.random() * 20 + 15 + "px";
    petal.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(petal);

    setTimeout(function () {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);