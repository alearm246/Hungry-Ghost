import states from "../player/states.js";
import cakeStates from "../cake/states.js";

class Smashing {
    constructor(player, cake) {
        this.player = player;
        this.cake = cake;
    }

    dispatch() {
        this.player.vy += 15;
        if(this.player.getDirection(this.cake) === "left") {
            const event = new Event("cakeLaunchRight");
            document.dispatchEvent(event);
        } else if(this.player.getDirection(this.cake) === "right") {
            const event = new Event("cakeLaunchLeft");
            document.dispatchEvent(event);
        }
       
    }

    transition(input) {
        if(this.player.isOnGroundOrOnTop()) {
            this.player.stateMachine.setState(states.idle);
        }
    }
}

export default Smashing;