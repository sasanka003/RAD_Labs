function exercise02() {
    const code = `
01
    console.log("<ol><li>");
    function bool(exp1, exp2){
        if(exp1 === true && exp2 === true){
            return true;
        }
        else{
            return false;
        }
    }
    console.log(bool(5>2, 2<10));

02
    console.log("</li><li>");
    var number = 7;
    function dataType(naturalNumber){
        return(typeof naturalNumber);
    }
    console.log(dataType(number));

03
    console.log("</li><li>");
    const day = new Date();
    console.log(day+"<br>"); 
    console.log("type of the date is: " + typeof day);

04
    console.log("</li><li>");
    var str = "OceanGate";
    var lenght = str.length;
    if(length > 10){
        console.log("Greater than 10 characters.");

    }
    else if(length == 10){
        console.log("Equal to 10 characters");

    }
    else{
        console.log("Less than 10 Characters");

    }
    console.log("</li>");
    `;

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}

