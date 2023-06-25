//Exercise 2
function exercise2(subpart) {
    let code = ``;

    // Set code based on selected subpart
    switch (subpart) {
      case '2.01':
        code = `
        var Mark1 = 30;
        var Mark2 = 40;
        var Mark3 = 90;
        var total = Mark1+Mark2+Mark3;
        var average = total/3;
        console.log("Total: ",total,"<br>");
        console.log("Average: ",average,"<br>");
        `;
        break;
      case '2.02':
        code = `
        var name = "Sasanka Udana";
        var age = 23;
        var gender = "Male"
        console.log("2. name: ",name,"<br>age: ",age,"<br>gender: ",gender,"<br>");
        `;
        break;
      case '2.03':
        code = `
        var length = 4;
        var breadth = 2;
        var area = length*breadth;   
        console.log("Area of the rectangle is ",area);
        `;
        break;
      case '2.04':
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
      case '2.05':
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
      case '2.06':
        code = `
        var statement1 = "what a very";
        var statement2 = "nice day";
    
        console.log(statement1+statement2);
        `;
        break;
      case '2.07':
        code = `
        var x = 5+5;
        var y = "5" + 5;
        var z = "Hello" + 5;
        
        console.log("x: ",x," y: ",y," z: ",z);
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
    exercise2(selectedSubpart);
  }

  exercise2('2.01'); // Set default subpart
