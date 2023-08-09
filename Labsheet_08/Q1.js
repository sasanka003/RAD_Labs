const express = require('express');
const app = express();

app.get('/greet/:name', (req, res) => {
    const name = req.params.name;
    const greeting = `Hello, ${name}!`;
    res.send(greeting);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

//Sample URL : http://localhost:3000/greet/Sasanka

