import states from "../cake/states.js";

class Idle {
    constructor(cake, trap) {
        this.trap = trap;
        this.cake = cake;
        this.triggerTransition = false;
        document.addEventListener("cakeLaunchLeft", () => {
            this.cake.stateMachine.setState(states.launchLeft)
        });
        document.addEventListener("cakeLaunchRight", () => {
            this.cake.stateMachine.setState(states.launchRight);
        })
    }

    dispatch() {
        console.log("CAKE IS IDLE");
        this.cake.vx = 0;
        this.cake.vy = 0;
    }

    transition(input) {
        this.cake.stationaryCollision(this.trap, () => {
            this.cake.stateMachine.setState(states.damaged);
        });
    }
}

export default Idle;