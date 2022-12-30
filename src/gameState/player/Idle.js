import states from "./states.js";

class Idle {
    constructor(player) {
        this.player = player;
    }

    dispatch() {
        this.player.vx = 0;
        this.player.vy = 0;
    }

    transition(input) {
        if(input.keys.includes(" ") && this.player.isOnGroundOrOnTop()) {
            this.player.stateMachine.setState(states.jumping);
        } 
    }
}

export default Idle;