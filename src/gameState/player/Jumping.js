import states from "./states.js";

class Jumping {
    constructor(player, cake) {
        this.player = player;
        this.cake = cake;
    }

    dispatch() {
        this.player.vy -= 25;
       // console.log("JUMP");
    }

    transition(input) {
        if(this.player.isOnGroundOrOnTop()) {
            this.player.stateMachine.setState(states.idle);
            //console.log(`players full height: ${this.player.y + this.player.height} cakes full height:  ${this.cake.y + this.cake.height}`)
        }
        if(input.keys.includes("s") && 
           this.player.isOnGroundOrOnTop() && 
           this.cake.isOnGroundOrOnTop() && 
           //this.player.y + this.player.height === this.cake.y + this.cake.height &&
           Math.abs(this.player.getHorizontalDistance(this.cake)) <= 200
          ) {
            this.player.stateMachine.setState(states.smashing);
        } 
    }
}

export default Jumping;