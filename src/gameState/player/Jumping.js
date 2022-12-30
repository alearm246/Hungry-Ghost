import states from "./states.js";

class Jumping {
    constructor(player) {
        this.player = player;
    }

    dispatch() {
        this.player.vy -= 25;
    }

    transition(input) {
        if(this.player.isOnGroundOrOnTop()) {
            this.player.stateMachine.setState(states.idle);
        }
        if(input.keys.includes("s") && 
           this.player.isOnGroundOrOnTop() && 
           this.cake.isOnGroundOrOnTop() && 
           this.player.y + this.player.height === this.cake.y + this.cake.height
          ) {
            this.player.stateMachine.setState(states.smashing);
        } 
    }
}

export default Jumping;