express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send(`
      <form action = "/register" method = "post">
         <label for="name">Name:</label>
         <input type="text" name="name" required><br>

         <label for="email">Email:</label>
         <input type="email" name="email" required><br>

         <label for="password">Password:</label>
         <input type="password" name="password" required><br>

         <button type="submit">Register</button>
      </form>
    `);
});

app.post('/register', (req,res) => {
    const {name, email, password } = req.body;

    res.send(`
        <p>Registration successful:</p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Password: ${password}</p>
    `);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});