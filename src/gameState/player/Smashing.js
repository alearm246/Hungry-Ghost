import states from "../player/states.js";
import cakeStates from "../cake/states.js";

class Smashing {
    constructor(player) {
        this.player = player;
    }

    dispatch() {
        this.player.vy += 15;
        this.cake.stateMachine.setState(cakeStates.launched);
        document.dispatchEvent(new Event("cakeLaunched"));
    }

    transition(input) {
        if(this.player.isOnGroundOrOnTop()) {
            this.player.stateMachine.setState(states.idle);
        }
    }
}

export default Smashing;