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

        const rectangle1 = Object.create(Rectangle);
        console.log(rectangle1.getArea());
        `;
        break;
      case '4.02':
        code = `
        var name = "Sasanka Udana";
        var age = 23;
        var gender = "Male"
        console.log("Name: ",name,"<br>Age: ",age,"<br>Gender: ",gender,"<br>");
        `;
        break;
      case '4.03':
        code = `
        var length = 4;
        var breadth = 2;
        var area = length*breadth;   
        console.log("Area of the rectangle is ",area);
        `;
        break;
      case '4.04':
        code = `
        var a = 10;
        var b = 20;
        console.log("a) ",a+=b)
        console.log("b) ",a-=b)
        console.log("c) ",a+=b)
        console.log("d) ",a*=b)
        console.log("e) ",a/=b)
        console.log("f) ",a%=b)
        `;
        break;
      case '4.05':
        code = `
        var x = 5;
        var y = 4;
        var text1 = "A";
        var text2 = "B";
        if(x>=y){
            console.log("x>=y");
        }
        if(x!=y){
            console.log("x != y");
        }
        if(text1 < text2){
            console.log("text1 < text2");
        }
        `;
        break;
      case '4.06':
        code = `
        var statement1 = "what a very";
        var statement2 = " nice day.";
    
        console.log(statement1+statement2);
        `;
        break;
      case '4.07':
        code = `
        var x = 5+5;
        var y = "5" + 5;
        var z = "Hello" + 5;
        
        console.log("x: ",x,"<br>y: ",y,"<br>z: ",z);
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
