import states from "./states.js";

class LaunchLeft {
    constructor(cake) {
        this.cake = cake;
    }

    dispatch() {
        this.cake.vy = -20;
        this.cake.vx = -5;
    }

    transition(input) {
        setTimeout(() => {
            if(this.cake.isOnGroundOrOnTop()) {
                this.cake.stateMachine.setState(states.idle);
            }
        }, 300);
    }
}

export default LaunchLeft;