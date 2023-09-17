const button = document.querySelector("button");

function random(number) {
    return Math.floor(Math.random() * (number * 1));
}

button.addEventListener("click", () => {
    let randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});