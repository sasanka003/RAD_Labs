express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res) => {
    res.send('Welcome Sasanka!');
});

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/middleware/404.html');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

// Sample URL : http://localhost:3000/nonexistent