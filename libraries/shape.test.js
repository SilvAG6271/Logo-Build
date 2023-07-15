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
  expect(shape.renderShape).toEqual(`<circle cx="150" cy="150" r="100" fill ="red"/>`)
 });   
})
describe("Triangle", () => {
    it ("should generate a triangle SVG", () => {
     const shape = new shapes.Triangle({text:"AGD", shapeColor: "#800080"});
     expect(shape.renderShape).toEqual(`<polygon points="110, 80, 70, 200, 500, 100" fill ="#800080"/>`)
    });   
   })
   describe("Square", () => {
    it ("should generate a square SVG", () => {
     const shape = new shapes.Square({text:"ZOE", shapeColor: "#87ceeb"});
     expect(shape.renderShape).toEqual(`<rect x="50" y="45" width="200" height="200" fill ="#87ceeb"/>`)
    });   
   })