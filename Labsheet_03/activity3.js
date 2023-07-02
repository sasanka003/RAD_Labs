//Exercise 1
function exercise03() {
    const code = `
1.
    console.log("<ol><li>");
    const games = ["The Last of Us", "Uncharted", "God of War", "Bloodborne"];
    console.log(\`Index of the game "God of War" : \` + games.indexOf("God of War"));

2.
    console.log("</li><li>");
    var key_value_pairs = prompt("Enter Key and value pairs (key and value seperated by space and each pair seperated with a comma): ").split(",");
    //enter : Name Kamal,Age 22,City Kandy

      function createMapFromArray(key_value_pairs) {
        const key_value = new Map();

        for (var i = 0; i < key_value_pairs.length; i++) {
            var pair = key_value_pairs[i].split(" ");
            key_value.set(pair[0], pair[1]);
        }
        return key_value;
      }
      
      const result = createMapFromArray(key_value_pairs);

    console.log(result.get("Name") + "<br>" + result.get("Age") + "<br>" + result.get("City"));

3.
    console.log("</li><li>");
    result.delete("Age");

    console.log(result.get("Name") + "<br>" + result.get("Age") + "<br>" + result.get("City"));

4.
    console.log("</li><li>");
    var fruits = new Map();

    fruits.set("apple" , 5);
    fruits.set("banana" , 3);
    fruits.set("orange" , 2);

    console.log(\`value of the key \'banana\' : \` + fruits.get("banana") + "<br>");

    var fruitsize = fruits.size;
    console.log("Fruit Size: " + fruitsize);
    console.log("</li>");
    `;

    const consoleOutput = eval(code);
    document.getElementById('code').value = code;
    document.getElementById('output').innerHTML = consoleOutput;
}

