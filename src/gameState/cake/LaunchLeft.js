import states from "./states.js";

class LaunchLeft {
    constructor(cake, trap) {
        this.cake = cake;
        this.trap = trap;
    }

    dispatch() {
        this.cake.vy = -20;
        this.cake.vx = -5;
    }

    transition(input) {
        console.log("CAKE IS LAUNCHED LEFT");
        setTimeout(() => {
            if(this.cake.isOnGroundOrOnTop()) {
                this.cake.stateMachine.setState(states.idle);
            }
        }, 300);
        this.cake.stationaryCollision(this.trap, () => {
            this.cake.stateMachine.setState(states.damaged);
        });
    }
}

export default LaunchLeft;