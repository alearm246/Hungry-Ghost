import states from "../cake/states.js";

class Idle {
    constructor(cake) {
        this.cake = cake;
        this.triggerTransition = false;
        document.addEventListener("cakeLaunched", () => {
            this.cake.stateMachine.setState(states.launched)
        });
    }

    dispatch() {
        this.cake.vx = 0;
        this.cake.vy = 0;
    }

    transition(input) {
        
    }
}

export default Idle;