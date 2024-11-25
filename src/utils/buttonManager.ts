import { ObjectManager } from "./index";

class ButtonHandler {
    private menu = document.getElementById("menu");
    private menuButtons = this.menu!.querySelectorAll<HTMLButtonElement>("button");
    private showMenuButton = document.getElementById("showMenuButton");
    private objectManager: ObjectManager;

    constructor(objectManager: ObjectManager) {
        this.objectManager = objectManager;

        this.menuButtons.forEach(button => {
            button.addEventListener("click", () => {
                const method = this.objectManager[button.dataset.method as keyof ObjectManager];
                method.call(this.objectManager);
                this.menu!.style.display = "none";
                this.showMenuButton!.style.display = "block";
            })
        });

        this.showMenuButton?.addEventListener("click", () => {
            this.menu!.style.display = "flex";
            this.showMenuButton!.style.display = "none";
            this.objectManager.clear();
        });
    }
}

export default ButtonHandler;
