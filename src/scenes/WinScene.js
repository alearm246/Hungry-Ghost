import InputHandler from "../gameState/InputHandler.js";
import PlayScene from "./PlayScene.js";

class WinScene {
    constructor(sceneManager, width, height) {
        this.sceneManager = sceneManager;
        this.width = width;
        this.height = height;
        this.image = document.getElementById("win-scene");
        this.input = new InputHandler();
    }

    update() {
        if(this.input.isMouseDown) {
            this.sceneManager.scenes.playScene = new PlayScene(this.sceneManager, this.width, this.height);
            this.sceneManager.switchScenes("playScene");
        }
    }

    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height);
    }
}

export default WinScene;