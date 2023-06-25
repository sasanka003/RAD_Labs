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
    console.log("2. x: ",x,"<br>y: ",y,"<br>z: ",z,"<br>");
    console.log("3. Price1: ",price1,"<br>Price2: ", price2,"<br>Total: ",total);
    `;
    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}


function exercise03(){
    const code = `
    function area(r){
        console.log("The area is ",3.14*r*r)
    }
    
    function perimeter(r){
        console.log("The perimeter is ",2*3.14*r)
    }
    
    function volume(x){
        console.log("Volume of a Cube is ",x*x*x);
    }
    
    function hello(){
        alert("hello , welcome to our paradise");
    }
    `;
    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}
