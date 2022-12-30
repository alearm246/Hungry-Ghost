class StateMachine {
    constructor(gameObject, states, currentState) {
        this.gameObject = gameObject;
        this.states = states;
        this.currentState = currentState;
    }

    dispatch() {
        this.currentState.dispatch();
    }

    setState(state) {
        this.currentState = this.states[state];
        this.currentState.dispatch();
    }
}

export default StateMachine;