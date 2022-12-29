import InputHandler from "../gameState/InputHandler.js";

class Player {
    constructor(scene) {
        this.scene = scene;
        this.width = 91;
        this.height = 91;
        this.x = 0;
        this.y = this.scene.height - this.height;
        this.vx = 0;
        this.vxMax = 3;
        this.vy = 0;
        this.weight = 1;
        this.image = document.getElementById("baker-2");
    }

    update(input) {
        //check horizontal scene boundaries
        if(this.x >= this.scene.width - this.width) {
            this.x = this.scene.width - this.width;
        } else if(this.x <= -20) {
            this.x = -20;
        }

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
        if(this.y >= this.scene.height - this.height) {
            this.y = this.scene.height - this.height;
        }

        //handle jump
        if(input.keys.includes(" ") && this.onGround()) {
            this.vy -= 20;
        } 
        this.y += this.vy;
        if(!this.onGround() && input.keys.includes("s")) {
            this.vy += 5;
        } else if(!this.onGround()) {
            this.vy += this.weight;
        }
        if(this.onGround()) {
            this.vy = 0;
        }
    } 
    
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }

    onGround() {
        return this.y >= this.scene.height - this.height;
    }
}

export default Player;