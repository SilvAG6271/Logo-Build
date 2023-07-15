

//Shape class that has basic default settings and style for text as well as svg dimensions
class Shape {
    constructor (args) {
        this.characters = args.characters ? args.characters : "";
        this.textColor = args.textColor ? args.textColor : "#000000";
        this.shapeColor = args.shapeColor ? args.shapeColor : "#808080";
    }

    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500" height="500" style="display:block; margin:250  auto;">
    <style>
        .heavy {
            font: bold 75px sans-serif;
        }
        </style>

        ${this.renderShape}
        <text x="155" y="165" text-anchor="middle" class="heavy" fill="${this.textColor}">${this.characters}</text>
        </svg>`
    }

}
//Info for circle
class Circle extends Shape {
    constructor(args){
        const defaultArgs = {
            textColor : "#000000", 
            shapeColor : "#808080" 
        }
        super(args);
    this.renderShape =  `<circle cx="150" cy="150" r="100" fill ="${this.shapeColor}"/>`;
    }
}
//info for triangle
class Triangle extends Shape {
    constructor(args){ 
        const defaultArgs = {
            textColor : "#000000", 
            shapeColor : "#808080" 
        }
    super(args);
    this.renderShape = `<polygon points="110, 80, 70, 200, 500, 100" fill ="${this.shapeColor}"/>`;
    }
   
}
//info for square
class Square extends Shape {
    constructor(args){
        const defaultArgs = {
            textColor : "#000000", 
            shapeColor : "#808080" 
        }
        super(args);
        this.renderShape = `<rect x="50" y="45" width="200" height="200" fill ="${this.shapeColor}"/>`;
    }
}
//created export that can be imported and used by Index.js
module.exports = {Shape, Circle, Triangle, Square}