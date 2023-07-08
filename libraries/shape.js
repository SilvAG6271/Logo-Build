


class Shape {
    constructor (args) {
        this.text = args.text ? args.text : ""
        this.textColor = args.textColor ? args.textColor : "#FFFFFF"
        this.shapeColor = args.shapeColorolor ? args.shapeColor : "#000000"
    }
}

class Circle extends Shape {
    constructor(args){
        super(args);
        this.renderShape = `<circle cx="100" cy="100 r="50" fill = "${this.shapeColor}"/>`
    }
}
class Triangle extends Shape {
    constructor(args){ 
    super(args);
    this.renderShape = `<polygon points="10, 10, 100, 190, 190, 10" fill = "${this.shapeColor}"/>`
    }
   
}
class Square extends Shape {
    constructor(args){
        super(args);
        this.renderShape = `rect x="50" y="50" width="150" height="150"/>`
    }
}

module.exports = {Shape, Circle, Triangle, Square}