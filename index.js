const inquirer = require("inquirer");
const fs = require("fs");
const {Shape, Circle, Triangle, Square} = require("./libraries/shape.js")

const questions = [
    {
        type:"input",
        name:"characters",
        message:"What 3 characters would you like in your logo?",
        maxLength: 3,
},
    {
        type:"input",
        name:"textColor",
        message:"What color would you like the text?",
},

    {
        type:"list",
        name:"shapes",
        message:"what shape do you want?",
        choices:["circle", "triangle", "square"],
},

    {
        type:"input",
        name:"shapeColor",
        message:"What color would you like the shape?"
},
]



async function createSVGFile(svg){
    let fileName = "logo.svg";
fs.writeFile(fileName, svg.render(), (err) => {
        err ? console.log(err) : console.log(`Generated ${fileName}`);
    });
}
async function init(){
   await inquirer.prompt(questions).then((answers) =>
 
    {
      let svg;
      switch(answers.shapes){
        case "circle":
            console.log("Creating Circle...");
            svg = new Circle(answers)
            break
        case "triangle":
            console.log("Creating Triangle...");
            svg = new Triangle(answers) 
            break 
        case "square":
            console.log("Creating Square...")
            svg = new Square(answers) 
        break;
        default:
            console.log("Invalid shape selection.")    
      };
     return svg
})  
.then((svg) => createSVGFile(svg))
}
init()