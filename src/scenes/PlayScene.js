import Player from "../gameObjects/Player.js";
import Cake from "../gameObjects/Cake.js";
import FinishLine from "../gameObjects/FinishLine.js";
import InputHandler from "../gameState/InputHandler.js";

class PlayScene {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.input = new InputHandler();
        this.cake = new Cake(this);
        this.player = new Player(this);
        this.finishLine = new FinishLine(this, 40);
    }

    update() {
        this.player.update(this.input, this.cake);
        this.cake.update(this.input);
        this.finishLine.update(this.input);
        this.player.collisionDisplacement(this.cake);
        this.player.collisionDisplacement(this.finishLine);
        this.cake.collisionDisplacement(this.finishLine);
        //console.log("distance: ", this.player.getDistance(this.cake));
    } 

    draw(ctx) {
        this.player.draw(ctx, false);
        this.cake.draw(ctx, false);
        this.finishLine.draw(ctx, false);
    }
}

export default PlayScene;