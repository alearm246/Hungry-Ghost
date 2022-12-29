class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener("keydown", e => {
            if(this.keys.includes(e.key)) return;
            this.keys.push(e.key);
        })
        window.addEventListener("keyup", e => {
            const keyIndex = this.keys.indexOf(e.key);
            this.keys.splice(keyIndex, 1);
        })
    }
}

export default InputHandler;