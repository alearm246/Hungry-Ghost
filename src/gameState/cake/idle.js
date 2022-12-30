import states from "../cake/states.js";

class Idle {
    constructor(cake) {
        this.cake = cake;
        this.triggerTransition = false;
        document.addEventListener("cakeLaunchLeft", () => {
            console.log("LEFT SMASH");
            this.cake.stateMachine.setState(states.launchLeft)
        });
        document.addEventListener("cakeLaunchRight", () => {
            console.log("RIGHT SMASH");
            this.cake.stateMachine.setState(states.launchRight);
        })
    }

    dispatch() {
        this.cake.vx = 0;
        this.cake.vy = 0;
    }

    transition(input) {
        
    }
}

export default Idle;