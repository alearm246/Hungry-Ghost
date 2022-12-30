import GameObject from "./GameObject.js";
import StateMachine from "../gameState/StateMachine.js";
import LaunchRight from "../gameState/cake/LaunchRight.js";
import LaunchLeft from "../gameState/cake/LaunchLeft.js";
import Moving from "../gameState/cake/moving.js";
import Idle from "../gameState/cake/Idle.js";

class Cake extends GameObject{
    constructor(scene) {
        super(scene, scene.width / 2, 80, 80, 1, document.getElementById("cake"));
        this.vy = 0;
        this.vx = 0;
        this.idle = new Idle(this);
        this.stateMachine = new StateMachine(this, [
            new Idle(this), 
            new Moving(this), 
            new LaunchRight(this), 
            new LaunchLeft(this)
        ], this.idle);
        this.stateMachine.dispatch();
    }

    update(input) {
        super.checkHorizontalBoundary();
        super.checkVerticalBoundary();
        this.stateMachine.currentState.transition(input);
        this.x += this.vx;
        this.y += this.vy;
        if(!super.onGround()) {
            this.vy += this.weight;
        }
    }

    draw(ctx, enableHitBox) {
        if(enableHitBox) {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height); 
    }
}

export default Cake;