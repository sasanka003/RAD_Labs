//Exercise 1
function exercise1() {
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
    eval(code);
    document.getElementById('code').value = code;
}
exercise1();

//Exercise 2
function exercise02_1(){
    const code = `
    var Mark1 = 30;
    var Mark2 = 40;
    var Mark3 = 90;
    var total = Mark1+Mark2+Mark3;
    var average = total/3;
    console.log("Total: ",total,"<br>");
    console.log("Average: ",average,"<br>");
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise02_2(){
    const code = `
    var name = "Sasanka Udana";
    var age = 23;
    var gender = "Male"
    console.log("2. name: ",name,"<br>age: ",age,"<br>gender: ",gender,"<br>");
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise02_3(){
    const code = `
    var length = 4;
    var breadth = 2;
    var area = length*breadth;   
    console.log("Area of the rectangle is ",area);
    `;
    eval(code);
    document.getElementById('code').value = code;
    
}

function exercise02_4(){
    const code = `
    var a = 10;
    var b = 20;
    console.log("a) ",a+=b)
    console.log("b) ",a-=b)
    console.log("c) ",a+=b)
    console.log("d) ",a*=b)
    console.log("e) ",a/=b)
    console.log("f) ",a%=b)
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise02_5(){
    const code = `
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
    eval(code);
    document.getElementById('code').value = code;
}

function exercise02_6(){
    const code = `
    var statement1 = "what a very";
    var statement2 = "nice day";

    console.log(statement1+statement2);
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise02_7(){
    const code = `
    var x = 5+5;
    var y = "5" + 5;
    var z = "Hello" + 5;
    
    console.log("x: ",x," y: ",y," z: ",z);
    `;
    eval(code);
    document.getElementById('code').value = code;
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
    eval(code);
    document.getElementById('code').value = code;
}


function exercise04_1(){
    const code = `
    const mammal = {
        color : orange ,
        type : cat,
        legs:4,
        name:kitty,
        speed :24
    };

    console.log("type: ",mammal.type);
    console.log("name: ",mammal.name);
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise04_2(){
    const code = `
    const person = {
        firstName:"John",
        lastName:"Doe",
        id:5566,
        fullName:function(){
            return this.firstName + " " + this.lastName;
        }
    };
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise04_3(){
    const code = `
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
    eval(code);
    document.getElementById('code').value = code;
}


function exercise05_1(){
    const code = `
    var time = current.getHours();
    if(time<10){
        console.log("Good morning")
    }
    else if(time<20){
        console.log("Good day");
    }
    else{
        console.log("Good evemning");
    }
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_2(x){
    const code = `
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
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_3(x,y,z){
    const code = `
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
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_4(x){
    const code = `
    var count = 0;
    for(let i=1; i<x; i++ ){
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
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_5(){
    const code = `
    for(let i=1; i<30; i++){
        if(i%2==0){
            console.log(i);
        }
    }
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_6(){
    const code = `
    const array = [10,20,30,40,50,60];
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_7(){
    const code = `
    const numbers = [80,30,40,50,23];
    numbers[2]=78;
    console.log("numbers[2] is ",numbers[2]);
    console.log("length of the array is ",numbers.length);
    
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length-1; j++){
            if(numbers[j]>numbers[j+1]){
                var temp = numbers[j];
                numbers[j]= numbers[j+1];
                numbers[j+1] = temp;
            }
        }
    }

    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
    }
    `;
    eval(code);
    document.getElementById('code').value = code;

}

function exercise05_8(){
    const code = `
    const names = ["sadun" ,"kamal","nimal","ruwan"];
    let str = names.toString();
    console.log("The array: ",str);
    delete names[4];
    names.push("nuwani");
    str = names.toString();
    console.log("The array: ",str);
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_9(){
    const code = `
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const array = myGirls.concat(myBoys);
    console.log("The merged array ", array);
    `;
    eval(code);
    document.getElementById('code').value = code;
}

function exercise05_10(){
    const code = `
    const numbersArray = [1,13,22,123,49];
    var sum = 0;
    for(let i=0; i<numbersArray.length; i++){
        sum = sum + numbersArray[i]
    }
    console.log("Sum of the array is ",sum);
    `;
    eval(code);
    document.getElementById('code').value = code;
}