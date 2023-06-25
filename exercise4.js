function exercise4(subpart) {
    let code = ``;

    // Set code based on selected subpart
    switch (subpart) {
      case '4.01':
        code = `
        const mammal = {
            color : 'orange' ,
            type : 'cat',
            legs:4,
            name:'kitty',
            speed :24
        };
    
        console.log("type: ",mammal.type);
        console.log("name: ",mammal.name);
        `;
        break;
      case '4.02':
        code = `
        const person = {
            firstName:"John",
            lastName:"Doe",
            id:5566,
            fullName:function(){
                return this.firstName + " " + this.lastName;
            }
        };
        `;
        break;
      case '4.03':
        code = `
        const triangle = {
            height: 25,
            base: 24,
            color:"red",
            area:function(){
                return (this.height*this.base)/2;
            }
        };
        console.log("height:",triangle.height);
        console.log("base:",triangle.base);
        console.log("color:",triangle.color);
        console.log("area:",triangle.area);
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
    exercise4(selectedSubpart);
  }

  exercise4('4.01'); // Set default subpart
