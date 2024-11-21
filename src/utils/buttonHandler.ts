const menu = document.getElementById("menu");

const sphereButton = document.getElementById("sphereButton");
sphereButton?.addEventListener("click", () => {
    menu!.style.display = "none";
});

const cubeButton = document.getElementById("cubeButton");
cubeButton?.addEventListener("click", () => {
    menu!.style.display = "none";
});

const torusButton = document.getElementById("torusButton");
torusButton?.addEventListener("click", () => {
    menu!.style.display = "none";
});
