import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// for deployment
app.set('trust proxy', 1);


const data = [
    {
        name : 'Ajay',
        age : 25,
        gender : 'Male'
    },
    {
        name : 'Parul',
        age : 22,
        gender : 'Male'
    }
]


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});