// BAD EXAMPLE (violates OCP)

function calculateArea(shape) {
  if (shape.type === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.type === "rectangle") {
    return shape.width * shape.height;
  }
}

const shapes = [
  { type: "circle", radius: 5 },
  { type: "rectangle", width: 4, height: 6 },
];

// shapes.forEach(s => console.log(calculateArea(s)));
// Every time we add a new shape (like a triangle), we must 
// modify calculateArea() to handle it. That’s not OCP.


class Shape {
  area() {
    throw new Error("area() must be implemented by subclass");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

function totalArea(shapes) {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

// Old behavior
const shape = [new Circle(5), new Rectangle(4, 6)];
console.log("Old total area:", totalArea(shapes).toFixed(2));

// New behavior (extend, not modify)
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}

const moreShapes = [new Circle(5), new Rectangle(4, 6), new Triangle(4, 3)];
console.log("New total area (with triangle):", totalArea(moreShapes).toFixed(2));
