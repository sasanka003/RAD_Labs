express = require('express');
const app = express();

app.get("/calculate", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).send("Invalid numbers provided.");
  }

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        return res.status(400).send("Undefined.");
      }
      result = num1 / num2;
      break;
    default:
      return res.status(400).send("Invalid operation!");
  }

  res.send(`Result: ${result}`);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

// Sample URL : http://localhost:3000/calculate?num1=10&num2=20&operation=add
