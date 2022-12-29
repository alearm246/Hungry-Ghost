import PlayScene from "./scenes/PlayScene.js";

window.addEventListener("load", () => {
    const canvas = document.getElementById("game-container");
    const CANVAS_WIDTH = canvas.width = 900;
    const CANVAS_HEIGHT = canvas.height = 500;
    const ctx = canvas.getContext("2d");
    const playScene = new PlayScene(CANVAS_WIDTH, CANVAS_HEIGHT);
    //draw rectangle
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        playScene.update();
        playScene.draw(ctx);
        requestAnimationFrame(animate);
    }
    animate();
})
