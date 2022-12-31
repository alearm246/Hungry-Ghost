import InputHandler from "../gameState/InputHandler.js";
import GameObject from "./GameObject.js";
import StateMachine from "../gameState/StateMachine.js";
import states from "../gameState/player/states.js";
import Walking from "../gameState/player/Walking.js";
import Idle from "../gameState/player/Idle.js";
import Jumping from "../gameState/player/Jumping.js";
import Smashing from "../gameState/player/Smashing.js";

class Player extends GameObject{
    constructor(scene, x, y) {
        super(scene, x, y, 91, 91, 1, document.getElementById("baker"));
        this.y = this.scene.height - this.height;
        this.vx = 0;
        this.vxMax = 3;
        this.vy = 0;
        this.frameCounter = 0;
        this.idle = new Idle(this);
        this.stateMachine = new StateMachine(this, [this.idle, new Jumping(this, this.scene.cake), new Smashing(this, this.scene.cake)], this.idle);
        this.stateMachine.dispatch();
    }

    update(input) {
        this.frameCounter++;
        //check horizontal scene boundaries
        super.checkHorizontalBoundary();
        this.stateMachine.currentState.transition(input);
        //horizontal movement
        this.x += this.vx;
        if(input.keys.includes("d")) {
            this.vx = this.vxMax;
        } else if(input.keys.includes("a")) {
            this.vx = -this.vxMax;
        } else {
            this.vx = 0;
        }

        //handle vertical scene boundaries
        super.checkVerticalBoundary();

        //handle jump
        if(!this.isOnGroundOrOnTop()) {
            this.vy += this.weight;
        }
        this.y += this.vy;
    } 

    setState(state) {
        this.currentState = this.states[state];
    }
    
    draw(ctx, enableHitBox) {
        if(enableHitBox) {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
}

export default Player;