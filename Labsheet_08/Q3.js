express = require('express');
const app = express();

const books = [
    { id: 1, title: 'Book 1' },
    { id: 2, title: 'Book 2' },
    { id: 3, title: 'Book 3' }
];

app.get('/api/books', (req,res) => {
    res.json(books);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

//Access URL : http://localhost:3000/api/books