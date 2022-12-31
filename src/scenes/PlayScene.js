import Player from "../gameObjects/Player.js";
import Cake from "../gameObjects/Cake.js";
import FinishLine from "../gameObjects/FinishLine.js";
import Trap from "../gameObjects/Trap.js";
import InputHandler from "../gameState/InputHandler.js";

class PlayScene {
    constructor(sceneManager, width, height) {
        this.sceneManager = sceneManager;
        this.width = width;
        this.height = height;
        this.input = new InputHandler();
        this.trap = new Trap(this, this.width / 2, 0);
        this.cake = new Cake(this, this.width / 4, 0);
        this.player = new Player(this, 0, 0);
        this.finishLine = new FinishLine(this, 0, 0);
        this.allGameObjects = [this.cake, this.finishLine];
    }

    update() {
        this.player.update(this.input, this.cake);
        this.cake.update(this.input);
        this.trap.update(this.input);
        this.finishLine.update(this.input);
        this.player.collisionDisplacement(this.cake);
        this.player.stationaryCollision(this.finishLine);
        this.cake.stationaryCollision(this.finishLine, () => {
            console.log("YOU WON!!!");
            this.sceneManager.switchScenes("winScene");
        });
        this.player.stationaryCollision(this.trap);
    } 

    draw(ctx) {
        this.cake.draw(ctx, false);
        this.finishLine.draw(ctx, false);
        this.player.draw(ctx, false);
        this.trap.draw(ctx, false);
    }
}

export default PlayScene;