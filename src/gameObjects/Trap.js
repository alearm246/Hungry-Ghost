import GameObject from "./GameObject.js"

class Trap extends GameObject {
    constructor(scene, x, y) {
        super(scene, x, y, 80, 24, 1, document.getElementById("trap"));
        this.y = this.scene.height - this.height;
    }

    update() {

    }

    draw(ctx, enableHitBox) {
        if(enableHitBox) {
            ctx.fillStyle = "red";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export default Trap;