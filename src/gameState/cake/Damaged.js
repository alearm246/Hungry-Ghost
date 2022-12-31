import states from "./states.js";

class Damaged {
    constructor(scene, cake) {
        this.scene = scene;
        this.cake = cake;
        console.log("scene: ", this.scene);
        console.log("player: ", this.scene.player)
    }

    dispatch() {
        console.log("DAMAGED");
        this.cake.x = this.scene.player.x + this.scene.player.width;
        this.cake.y = this.scene.height - this.cake.height;
        this.cake.vy = 0;
        this.cake.vx = 0;
        this.cake.health -= 1;
        console.log("cake health: ", this.cake.health);
        if(this.cake.health === 0) {
            this.scene.sceneManager.switchScenes("loseScene");
        }
    }

    transition(input) {
        setTimeout(() => {
            if(this.cake.isOnGroundOrOnTop()) {
                this.cake.stateMachine.setState(states.idle);
            }
        }, 500);
    }
}

export default Damaged;