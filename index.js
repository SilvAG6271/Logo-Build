const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require("./shape.test.js")

const questions = [
    {
        type:"input",
        name:"characters",
        message:"What 3 characters would you like in your logo?",
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

const fileName = "logo.svg";

function createSVGFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg")
    });
}
async function init(){
    await inquirer.prompt(questions).then((answers) => 
    {
      let svg;
      switch(answers.shape){
        case "Circle":
            svg = new Circle(answers)
            break
        case "Triangle":
            svg = new Triangle() 
            break 
        case "Square":
            svg = new Square(answers) 
        break    
      };
      return svg;
    })
    .then((svg) => createSVGFile(svg))
}    

init();


