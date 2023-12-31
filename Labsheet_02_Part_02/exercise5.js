function exercise5(subpart) {
      let code = ``;

      // Set code based on selected subpart
      switch (subpart) {
        case '5.01':
          code = `
          const d = new Date();
          let hour = d.getHours();
          if(hour<10){
              console.log("Good morning")
          }
          else if(hour<20){
              console.log("Good day");
          }
          else{
              console.log("Good evemning");
          }
          `;
          break;
        case '5.02':
          code = `
          let x = "banana";
          switch(x){
              case "banana":
                  alert("Yellow");
                  break;
              case "pineapple":
                  alert("Orange");
                  break;
              case "apple":
                  alert("Green");
                  break;
          }
          `;
          break;
        case '5.03':
          code = `
          var x = 4;
          var y = 2;
          var z = 6;
          if(x>y){
              if(x>z){
                  console.log(x);
              }
              else{
                  console.log(z);
              }
          }
          else{
              if(y>z){
                  console.log(y);
              }
              else{
                  console.log(z);
              }
          }
          `;
          break;
        case '5.04':
          code = `
          var count = 0;
          var x = 27;
          for(let i=2; i<x; i++ ){
              if(x%i==0){
                  count++;
              }
          }
          if(count>1){
              console.log("Not a prime number");
          }
          else{
              console.log("prime number");
          }
          `;
          break;
        case '5.05':
          code = `
          for(let i=1; i<30; i++){
              if(i%2!=0){
                  console.log(i);
              }
          }
          `;
          break;
        case '5.06':
          code = `
          const array = [1,2,3,4,5];
          for(let i=0; i<array.length; i++){
              console.log(array[i]);
          }
          `;
          break;
        case '5.07':
          code = `
          const numbers = [80,30,40,50,23];
          numbers[2]=78;
          console.log("Number at index 2 : ",numbers[2]);
          console.log("Length of the array : ",numbers.length,"<br>");
          
          for(let i=0; i<numbers.length; i++){
              for(let j=0; j<numbers.length-1; j++){
                  if(numbers[j]>numbers[j+1]){
                      var temp = numbers[j];
                      numbers[j]= numbers[j+1];
                      numbers[j+1] = temp;
                  }
              }
          }
          console.log("Sorted array :",numbers);
          `;
          break;
        case '5.08':
          code = `
          const names = ["sadun" ,"kamal","nimal","ruwan"];
          let str = names.toString();
          console.log("Initial array converted to string:  ",str);
          names.splice(3,1);
          console.log("Array after removing last element:  ",names);
          names.push("nuwani");
          str = names.toString();
          console.log("Final array: ",names);
          `;
          break;
        case '5.09':
          code = `
          const myGirls = ["Cecilie", "Lone"];
          const myBoys = ["Emil", "Tobias", "Linus"];
          const array = myGirls.concat(myBoys);
          console.log("Merged array : ", array);
          `;
          break;
        case '5.10':
          code = `
          const numbersArray = [1,13,22,123,49];
          var sum = 0;
          for(let i=0; i<numbersArray.length; i++){
              sum = sum + numbersArray[i]
          }
          console.log("Sum : ",sum);
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
      consoleOutput.splice(0);
      const selectedSubpart = document.getElementById('subpart-select').value;
      exercise5(selectedSubpart);
      updateConsoleOutput();
    }

    exercise5('5.01'); // Set default subpart
    updateConsoleOutput();