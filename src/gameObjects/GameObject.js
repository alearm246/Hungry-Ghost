class GameObject {
    constructor(scene, x, y, width, height, weight, image) {
        this.scene = scene;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.weight = weight;
        this.image = image;
    }

    isCollidingWith(otherGameObject) {
        const leftSide = this.x;
        const rightSide = this.x + this.width;
        const otherGameObjectLeftSide = otherGameObject.x;
        const otherGameObjectRightSide = otherGameObject.x + otherGameObject.width;
        const topSide = this.y;
        const bottomSide = this.y + this.height;
        const otherGameObjectTopSide = otherGameObject.y;
        const otherGameObjectBottomSide = otherGameObject.y + otherGameObject.height;
        return ((rightSide >= otherGameObjectLeftSide) && 
        (leftSide <= otherGameObjectRightSide) &&
        (bottomSide >= otherGameObjectTopSide) &&
        (topSide <= otherGameObjectBottomSide));
    }

    stationaryCollision(otherGameObject, callback=null) {
        let isColliding = false;
        if((this.isCollidingWith(otherGameObject) && this.getDirection(otherGameObject) === "left")) {
            isColliding = true
            this.x = otherGameObject.x - this.width;
        } else if(this.isCollidingWith(otherGameObject) && this.getDirection(otherGameObject) === "right") {
            isColliding = true
            this.x = otherGameObject.x + otherGameObject.width;;
        } else if(this.isCollidingWith(otherGameObject) && this.getDirection(otherGameObject) === "above") {
            isColliding = true
            this.y = otherGameObject.y - this.height;
        }
        if(isColliding && callback) {
            callback();
        }
    }

    collisionDisplacement(otherGameObject, callback=null) {
        let isColliding = false;
        if((this.isCollidingWith(otherGameObject) && this.getDirection(otherGameObject) === "left")) {
            isColliding = true
            let lastGameObjectXPos = otherGameObject.x;
            otherGameObject.x++;
            this.x = lastGameObjectXPos - this.width;
        } else if(this.isCollidingWith(otherGameObject) && this.getDirection(otherGameObject) === "right") {
            isColliding = true
            let lastGameObjectXPos = otherGameObject.x + otherGameObject.width;
            otherGameObject.x--;
            this.x = lastGameObjectXPos;
        } else if(this.isCollidingWith(otherGameObject) && this.getDirection(otherGameObject) === "above") {
            isColliding = true
            this.y = otherGameObject.y - this.height;
        }
        if(isColliding && callback) {
            callback();
        }

    }

    getDirection(otherGameObject) {
        const leftSide = this.x;
        const rightSide = this.x + this.width;
        const otherGameObjectLeftSide = otherGameObject.x;
        const otherGameObjectRightSide = otherGameObject.x + otherGameObject.width;
        const topSide = this.y;
        const bottomSide = this.y + this.height;
        const otherGameObjectTopSide = otherGameObject.y;
        const otherGameObjectBottomSide = otherGameObject.y + otherGameObject.height;

        if(leftSide <= otherGameObjectLeftSide && rightSide <= otherGameObjectLeftSide + 3) {
            return "left";
        } else if(leftSide >= otherGameObjectRightSide - 3 && rightSide >= otherGameObjectRightSide) {
            return "right";
        } else if(bottomSide <= otherGameObjectTopSide && topSide <= otherGameObjectTopSide) {
            return "above";
        } else if(bottomSide >= otherGameObjectBottomSide && topSide >= otherGameObjectBottomSide) {
            return "below";
        } else {
            return "above";
        }
    }

    getDistance(otherGameObject) {
        return Math.sqrt((Math.pow((this.x - otherGameObject.x), 2)) + (Math.pow((this.y - otherGameObject.y), 2)));
    }

    getHorizontalDistance(otherGameObject) {
        return this.x - otherGameObject.x;
    }

    checkHorizontalBoundary() {
        if(this.x >= this.scene.width - this.width) {
            this.x = this.scene.width - this.width;
        } else if(this.x <= -20) {
            this.x = -20;
        }
    }

    checkVerticalBoundary() {
        if(this.y >= this.scene.height - this.height) {
            this.y = this.scene.height - this.height;
        }
    }

    turOnWorldBoarders(turnOn) {
        this.checkHorizontalBoundary();
        this.checkVerticalBoundary();
    }

    isOnGroundOrOnTop() {
        return this.onGround() || this.onTopOfGameObject();
    }

    onGround() {   
        return this.y >= this.scene.height - this.height  
    }

    onTopOfGameObject() {
        return (this.getDirection(this.scene.cake) === "above" && this.isCollidingWith(this.scene.cake)) ||
               (this.getDirection(this.scene.finishLine) === "above" && this.isCollidingWith(this.scene.finishLine)) ||
               (this.getDirection(this.scene.trap) === "above" && this.isCollidingWith(this.scene.trap));
    }
}

export default GameObject;