

class InputHandler {
    constructor() {
        this.keys = [];
        this.isMouseDown = false;
        window.addEventListener("keydown", e => {
            if(this.keys.includes(e.key)) return;
            this.keys.push(e.key);
        });
        window.addEventListener("keyup", e => {
            const keyIndex = this.keys.indexOf(e.key);
            this.keys.splice(keyIndex, 1);
        });
        window.addEventListener("mousedown", e => {
            if(this.isMouseDown) return
            this.isMouseDown = true;
        });
        window.addEventListener("mouseup", e => {
            this.isMouseDown = false;
        });
    }
}

export default InputHandler;