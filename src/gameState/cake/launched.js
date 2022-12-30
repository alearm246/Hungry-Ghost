import states from "../cake/states.js";

class Launched {
    constructor(cake) {
        this.cake = cake;
    }

    dispatch() {
        this.cake.vy = -20;
        this.cake.vx = 5;
        console.log("launched!");
    }

    transition(input) {
        if(this.cake.isOnGroundOrOnTop()) {
            this.cake.stateMachine.setState(states.idle);
        }
    }
}

export default Launched;