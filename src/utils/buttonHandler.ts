import { ObjectManager } from "./index";

class ButtonHandler {
    private menu = document.getElementById("menu");
    private buttons = document.querySelectorAll<HTMLButtonElement>("button");
    private objectManager: ObjectManager;

    constructor(objectManager: ObjectManager) {
        this.objectManager = objectManager;
        this.buttons.forEach(button => {
            button.addEventListener("click", () => {
                const method = this.objectManager[button.dataset.method as keyof ObjectManager];
                method.call(this.objectManager);
                this.menu!.style.display = "none";
            })
        });
    }
}

export default ButtonHandler;
