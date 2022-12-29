import Player from "../gameObjects/Player.js";
import Cake from "../gameObjects/Cake.js";
import InputHandler from "../gameState/InputHandler.js";

class PlayScene {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.input = new InputHandler();
        this.player = new Player(this);
        this.cake = new Cake(this);
    }

    update() {
        this.player.update(this.input, this.cake);
        this.cake.update(this.input);
        this.player.collisionDisplacement(this.cake);
    } 

    draw(ctx) {
        this.player.draw(ctx, false);
        this.cake.draw(ctx, false);
    }
}

export default PlayScene;