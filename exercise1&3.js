//Exercise 1
function exercise01() {
    const code = `
    var flowerName = "Lili"
    var x,y,z;
    x = 5;
    y = 6;
    z = x + y;
    let price1 = 100;
    let price2 = 200;
    let total = price1+price2;
    console.log("1. flower Name: ",flowerName,"<br>");
    console.log("2. <br>x: ",x,"<br>y: ",y,"<br>z: ",z,"<br>");
    console.log("3. <br>Price1: ",price1,"<br>Price2: ", price2,"<br>Total: ",total);
    `;
    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}


function exercise03(){
    const code = `
    function area(radius){
        console.log("The area is ",3.14*radius*radius)
    }
    
    function perimeter(radius){
        console.log("The perimeter is ",2*3.14*radius)
    }
    
    function volume(lengthOfSide){
        console.log("Volume of a Cube is ",lengthOfSide*lengthOfSide*lengthOfSide);
    }
    
    function hello(){
        alert("hello , welcome to our paradise");
    }

    area(5);
    perimeter(5);
    volume(5);
    
    `;
    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}
