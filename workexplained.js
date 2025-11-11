// GOOD EXAMPLE — OCP-Compliant Version

// We’ll use classes and polymorphism.

// Step 1: Create a base Shape class

// This defines a common interface (method) that all shapes will follow.

class Shape {
  area() {
    throw new Error("area() must be implemented by subclass");
  }
}



// Step 2: Create shape classes (Circle, Rectangle)

// Each subclass will provide its own implementation of the area() method.
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





// Step 3: Create a function that uses these classes

// Notice this function doesn’t care what type of shape 
// it gets — it just calls .area() on each one.
function totalArea(shapes) {
  return shapes.reduce((sum, shape) => sum + shape.area(), 0);
}

// Step 4: Demonstrate the base scenario
const shapes = [
  new Circle(5),
  new Rectangle(4, 6),
];

console.log("Old total area:", totalArea(shapes).toFixed(2));


// Step 5: Add a new shape — without touching any old code

// Now we add a Triangle class, but notice we don’t touch totalArea() or any of the old classes.

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


// Step 6: Demonstrate both old and new behavior
const moreShapes = [
  new Circle(5),
  new Rectangle(4, 6),
  new Triangle(4, 3),
];

console.log("New total area (with triangle):", totalArea(moreShapes).toFixed(2));

