import PlayScene from "./PlayScene.js";
import WinScene from "./WinScene.js";   
import LoseScene from "./LoseScene.js";

class SceneManager {
    constructor(width, height) {
        this.scenes = {
            playScene: new PlayScene(this, width, height),
            winScene: new WinScene(this, width, height),
            loseScene: new LoseScene(this, width, height)
        };
        this.defaultScene = this.scenes.playScene;
        this.currentScene = this.defaultScene;
    }

    switchScenes(scene) {
        this.currentScene = this.scenes[scene];
    }
}

export default SceneManager;