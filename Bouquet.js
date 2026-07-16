const petalsContainer = document.querySelector(".petals");

const images = [
    "images/petal1.png",
    "images/petal2.png",
    "images/petal3.png"
];

for(let i = 0; i < 25; i++){

    const petal = document.createElement("img");

    petal.src = images[Math.floor(Math.random() * images.length)];

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.width = (20 + Math.random() * 20) + "px";

    petal.style.animationDuration = (6 + Math.random() * 6) + "s";

    petal.style.animationDelay = Math.random() * 6 + "s";

    petalsContainer.appendChild(petal);

}