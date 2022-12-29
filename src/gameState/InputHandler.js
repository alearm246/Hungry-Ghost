class InputHandler {
    constructor() {
        console.log("initialized input handler");
        this.keys = [];
        window.addEventListener("keydown", e => {
            if(this.keys.includes(e.key)) return;
            this.keys.push(e.key);
            console.log("keys: ", this.keys);
        })
        window.addEventListener("keyup", e => {
            const keyIndex = this.keys.indexOf(e.key);
            this.keys.splice(keyIndex, 1);
            console.log("keys: ", this.keys);
        })
    }
}

export default InputHandler;