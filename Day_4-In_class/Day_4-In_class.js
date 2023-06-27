//Exercise 2
function inClass4(subpart) {
    let code = ``;

    // Set code based on selected subpart
    switch (subpart) {
      case '4.01':
        code = `
        class Rectangle {
          width =2;
          height = 4;

          getArea() {
            return this.width*this.height;
          }
        }

        const rectangle1 = new Rectangle();
        console.log("Area = ",rectangle1.getArea());
        `;
        break;
      case '4.02':
        code = `
        class Shape {
          color;
          constructor(color) {
            this.color = color;
          }
          getColor() {
            console.log(\`Color: \${this.color}\`);
          }
        }
        
        class Rectangle extends Shape {
          height;
          width;
          constructor(width = 0, height = 0) {
            super(); // Invoke the constructor of the base class
            this.height = height;
            this.width = width;
          }
          getArea() {
            return this.width * this.height;
          }
        }
        
        class Circle extends Shape {
          radius;
          constructor(radius = 0) {
            super();
            this.radius = radius;
          }
          getArea() {
            return 3.14 * this.radius * this.radius;
          }
        }
        
        const r1 = new Rectangle(10, 4);
        const c1 = new Circle(4);
        console.log("Area of rectangle: ",r1.getArea());
        console.log("Area of circle: ",c1.getArea());
        
        `;
        break;
      case '4.03':
        code = `
        class Vehicle {
          move(){
            console.log("Vehicle moves");
          }
        }

        class Car extends Vehicle {
          move() {
            console.log("Car drives");
          }
        }

        class Ship extends Vehicle {
          move() {
            console.log("Ship sails");
          }
        }

        class Plane extends Vehicle {
          move() {
            console.log("Plane flies");
          }
        }

        const car1 = new Car();
        car1.move();
        `;
        break;
      case '4.04':
        code = `
        
        `;
        break;
      case '4.05':
        code = `
        
        `;
        break;
      case '4.06':
        code = `
        
        `;
        break;
      case '4.07':
        code = `
        
        `;
        break;
      default:
        code = ``;
        break;
    }

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
  }

  // Function to handle subpart change
  function changeSubpart() {
    const selectedSubpart = document.getElementById('subpart-select').value;
    inClass4(selectedSubpart);
    updateConsoleOutput();
    
  }

  inClass4('4.01'); // Set default subpart
  updateConsoleOutput();
