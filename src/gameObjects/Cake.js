import GameObject from "./GameObject.js";

class Cake extends GameObject{
    constructor(scene) {
        super(scene, 500, 80, 80, 1, document.getElementById("cake"))
    }

    update(input) {
        super.checkHorizontalBoundary();
        super.checkVerticalBoundary();
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