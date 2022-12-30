import Player from "../gameObjects/Player.js";
import Cake from "../gameObjects/Cake.js";
import InputHandler from "../gameState/InputHandler.js";

class PlayScene {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.input = new InputHandler();
        this.cake = new Cake(this);
        this.player = new Player(this);
    }

    update() {
        this.player.update(this.input, this.cake);
        this.cake.update(this.input);
        this.player.collisionDisplacement(this.cake);
        //console.log("distance: ", this.player.getDistance(this.cake));
    } 

    draw(ctx) {
        this.player.draw(ctx, true);
        this.cake.draw(ctx, true);
    }
}

export default PlayScene;