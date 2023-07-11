const shapes = require("./shape.js")

describe("Shape", () => {
    it("should generate a whole SVG", () => {
        const shape = new shapes.Shape({
            text:"YourText",
            textColor:"#000000",
            shapeColor:"#808080"
        })
    })
})
describe("Circle", () => {
 it ("should generate a circle SVG", () => {
  const shape = new shapes.Circle
  ({
    text:"JAM",
   shapeColor: "red"
});
  expect(shape.renderShape).toEqual(`<circle cx="100" cy="100" r="50" fill ="red"\>`)
 });   
})
describe("Triangle", () => {
    it ("should generate a triangle SVG", () => {
     const shape = new shapes.Triangle({text:"AGD", shapeColor: "#800080"});
     expect(shape.renderShape).toEqual(`<polygon points="10, 10, 100, 190, 190, 10" fill ="#800080"\>`)
    });   
   })
   describe("Square", () => {
    it ("should generate a square SVG", () => {
     const shape = new shapes.Square({text:"ZOE", shapeColor: "#87ceeb"});
     expect(shape.renderShape).toEqual(`rect x="50" y="50" width="150" height="150" fill ="#87ceeb"\>`)
    });   
   })