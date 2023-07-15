//added required libraries for app
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const {exec} = require("child_process");
const {Shape, Circle, Triangle, Square} = require("./libraries/shape.js")

//added questions using inquirer 
const questions = [
    {
        type:"input",
        name:"characters",
        message:"What 3 characters would you like in your logo?",
        validate: (input) => {
            if(input.length !== 3){
                return "Please enter exactly 3 characters.";
            }
            return true;
        }
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


//function to create SVG file 
async function createSVGFile(svg){
    let folderPath = "examples";
    let timeStamp = Date.now(); //Generate a new time stamp
    let fileName = `logo_${timeStamp}.svg`; //creates a unique SVG file
    const filePath = path.join(folderPath, fileName);

    if(!fs.existsSync(folderPath)) {
        fs.mkdir(folderPath, { recursive: true});

        }
        //function to open explorer with image once choices are made
    function openFileInExplorer(filePath) {
        const command = process.platform === "win32" ? "start": "open";
        exec(`${command} ${filePath}`, (error, stdout, stderr) => {
            if(error){
                console.error(`Error opening file: ${error}`);
            }
        })
    }
   //function to write info to svg file 
fs.writeFile(filePath, svg.render(), (err) => {
        err ? console.log(err) : console.log(`Generated ${fileName}`);
        openFileInExplorer(filePath);
    });
}
//function to run app
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