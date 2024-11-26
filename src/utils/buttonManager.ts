import { Mesh, Scene } from "@babylonjs/core";

class ButtonManager {
    private menu = document.getElementById("menu")!;
    private showMenuButton = document.getElementById("showMenuButton")!;

    constructor(scenes: { name: string, data: ((scene: Scene) => Mesh)[]; }[]) {
        this.showMenuButton.addEventListener("click", () => {
            this.menu.style.display = "flex";
            this.showMenuButton!.style.display = "none";
        });

        scenes.forEach(scene => {
            const button = document.createElement("button");
            button.innerText = scene.name;
            button.addEventListener("click", () => console.log(scene.data));
            this.menu.appendChild(button);
        });
    };
};

export default ButtonManager;
