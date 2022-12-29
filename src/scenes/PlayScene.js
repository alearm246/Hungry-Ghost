import Player from "../gameObjects/Player.js";
import InputHandler from "../gameState/InputHandler.js";

class PlayScene {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.input = new InputHandler();
        this.player = new Player(this, this.input);
        console.log("width: ", this.width);
        console.log("height: ", this.height);
    }

    update() {
        this.player.update(this.input);
    } 

    draw(ctx) {
        this.player.draw(ctx);
    }
}

export default PlayScene;