import GameObject from "./GameObject.js";

class FinishLine extends GameObject {
    constructor(scene, x) {
        super(scene, x, 91, 91, 1, document.getElementById("finish-line"));
        this.x = this.scene.width - this.width;
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
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}

export default FinishLine;