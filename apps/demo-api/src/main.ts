/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const cors = require('cors');

const app = express();

app.use(cors());

app.post('/api/login', (req, res) => {
    res.send({ token: 'abcdefg' });
});

app.get('/api/welcome', (req, res) => {
    res.send({ message: 'Welcome to nx express' });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
