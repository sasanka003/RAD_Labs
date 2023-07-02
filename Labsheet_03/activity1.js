//Exercise 1
function exercise01() {
    const code = `
    var str1 = "Programmo";
    var str2 = "Phobio";

//01    

    function strConcat(str1, str2){
        var str3 = str1.concat(str2);
        return str3;
    }

    str3 = strConcat(str1, str2);
    console.log('01');
    console.log('   '+str3);

//02 (a)

    function lowercase(str){
        return str.toLowerCase();
    }

    console.log('02');
    console.log('  (a)'+lowercase(str3));

//02 (b)

    function uppercase(str){
        return str.toUpperCase();
    }
    console.log('  (b)'+uppercase(str3));

//02 (c)

    var str4 = str1 + "," + str2;
    const arr = str4.split(",");

    console.log('  (c)'+"[\'" + arr + "\']");

//02 (d)

    function findindex(str){
        return str.indexOf("Phobio");
    }
    console.log('  (d)'+findindex(str3));
    `;

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}

