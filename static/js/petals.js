function createPetal() {
    const petal = document.createElement("img");

    petal.src = "/static/images/petal.png";
    petal.classList.add("petal");

    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.width = Math.random() * 20 + 20 + "px";
    petal.style.animationDuration = Math.random() * 5 + 5 + "s";

    document.body.appendChild(petal);

    setTimeout(function () {
        petal.remove();
    }, 10000);
}

setInterval(createPetal, 300);