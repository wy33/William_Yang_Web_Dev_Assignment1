const button = document.body.querySelector("#do-not-click");
const rick = document.body.querySelector("#rick");

button.addEventListener("click", () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    rick.textContent = "GET RICK ROLLED!";
})

