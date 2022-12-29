import InputHandler from "../gameState/InputHandler.js";
import GameObject from "./GameObject.js";

class Player extends GameObject{
    constructor(scene) {
        super(scene, 0, 91, 91, 1, document.getElementById("baker"));
        this.vx = 0;
        this.vxMax = 3;
        this.vy = 0;
    }

    update(input, cake) {
        //check horizontal scene boundaries
        super.checkHorizontalBoundary();

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
        if(input.keys.includes(" ") && this.onGround(cake)) {
            this.vy -= 30;
        } 
        this.y += this.vy;
        if(!super.onGround(cake) && input.keys.includes("s")) {
            this.vy += 5;
        } else if(!super.onGround(cake)) {
            this.vy += this.weight;
        }
        if(super.onGround(cake)) {
            this.vy = 0;
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

export default Player;