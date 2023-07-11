


class Shape {
    constructor (args) {
        this.characters = args.characters ? args.characters : "";
        this.textColor = args.textColor ? args.textColor : "#000000";
        this.shapeColor = args.shapeColor ? args.shapeColor : "#808080";
    }

    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200" style="display:block; margin:250  auto;">
    <style>
        .heavy {
            font: bold 100px sans-serif;
        }
        </style>

        ${this.renderShape}
        <text x="125" y="125" text-anchor="middle" class="heavy" fill="${this.textColor}">${this.characters}</text>
        </svg>`
    }

}

class Circle extends Shape {
    constructor(args){
        const defaultArgs = {
            textColor : "#000000", 
            shapeColor : "#808080" 
        }
        super(args);
    this.renderShape =  `<circle cx="100" cy="100" r="50" fill ="${this.shapeColor}"/>`;
    }
}
class Triangle extends Shape {
    constructor(args){ 
        const defaultArgs = {
            textColor : "#000000", 
            shapeColor : "#808080" 
        }
    super(args);
    this.renderShape = `<polygon points="10, 10, 100, 190, 190, 10" fill ="${this.shapeColor}"/>`;
    }
   
}
class Square extends Shape {
    constructor(args){
        const defaultArgs = {
            textColor : "#000000", 
            shapeColor : "#808080" 
        }
        super(args);
        this.renderShape = `<rect x="50" y="50" width="150" height="150" fill ="${this.shapeColor}"/>`;
    }
}

module.exports = {Shape, Circle, Triangle, Square}