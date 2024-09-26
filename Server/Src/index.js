import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import ConnectDb from './Db/index.js';
const app = express();
app.use(cors());
app.use(express.json());

dotenv.config({
  path: './.env',
});

const port = 3000;
import dataRouter from './Routes/index.js';

app.use('/memories', dataRouter);
ConnectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(` Hello I  am Running on this ${port}`);
    });
  })
  .catch((error) => console.log('Something is  Wrong   in connection', error));
