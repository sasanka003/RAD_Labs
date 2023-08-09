express = require('express');
const app = express();

const loginCredentials = {
    username: 'sasa',
    password: '1234'
};

app.get('/login', (req,res) => {
    const { username, password } = req.query;

    if(!username || !password) {
        return res.status(404).send('Enter both username and password');
    }

    if(username === loginCredentials.username && password === loginCredentials.password) {
        return res.send(`Welcome, ${username}!`);
    } else {
        return res.status(405).send('Invalid username or password.');
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

//Sample URL : http://localhost:3000/login?username=sasa&password=1234