//Exercise 1
function exercise01() {
    const code = `
    var str1 = "Programmo";
    var str2 = "Phobio";

01    
    console.log("<ol><li>");
    function strConcat(str1, str2){
        var str3 = str1.concat(str2);
        return str3;
    }

    str3 = strConcat(str1, str2);
    console.log(str3);

02.a
    console.log("</li><li><ol><li>");
    function lowercase(str){
        return str.toLowerCase();
    }

    console.log(lowercase(str3));

02.b
    console.log("</li><li>");
    function uppercase(str){
        return str.toUpperCase();
    }
    console.log(uppercase(str3));

02.c
    console.log("</li><li>");
    var str4 = str1 + "," + str2;
    const arr = str4.split(",");

    console.log("[\'" + arr + "\']");

02.d
    console.log("</li><li>");
    function findindex(str){
        return str.indexOf("Phobio");
    }
    console.log(findindex(str3));
    console.log("</li></ol></ol>");
    `;

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}

