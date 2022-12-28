const canvas = document.getElementById("game-container");
const CANVAS_WIDTH = canvas.width = 900;
const CANVAS_HEIGHT = canvas.height = 600;
const ctx = canvas.getContext("2d");

let x = 10;
let accelartion = 1;
let direction = "right";

//draw rectangle
console.log(ctx);   
function animate() {
    console.log("animate!!!");
    if (direction === "right") {
        x = x + accelartion;
        if (x >= CANVAS_WIDTH - 200) {
            direction = "left";
            accelartion++;
        }
    } else {
        x = x - accelartion;
        if (x <= 0) {
            direction = "right";
            accelartion++;
        }
    }
    ctx.clearRect(0, CANVAS_HEIGHT / 2 - 100, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.fillRect(x, CANVAS_HEIGHT / 2 - 100, 200, 200);
    
    requestAnimationFrame(animate);
}

animate();