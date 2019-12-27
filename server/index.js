import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './routes/index';
require('dotenv').config();
const app = express();

// const PORT = process.env.port || 5000


app.use(cors());

// Normal express config defaults
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// default home route
app.get('/', (req, res) => {
    res.status(200).json({
      status: 200,
      message: "Welcome",
    });
  });

app.use(router);

const server = app.listen(process.env.PORT || 5000, () => {
  console.log(`Server Started`);
});

export default server;

