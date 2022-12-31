import states from "./states.js";

class LaunchRight {
    constructor(cake, trap) {
        this.cake = cake;
        this.trap = trap;
    }

    dispatch() {
        this.cake.vy = -20;
        this.cake.vx = 5;
    }

    transition(input) {
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

export default LaunchRight;