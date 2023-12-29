import express from 'express';
import cors from 'cors';
import routes from '../src/routes.js';
import '../src/config/dbConfig.js';

const app = express();
const port = 3333;

app.use(express.json());


app.use(cors({
  origin: "*",
  credentials: true,
  methods: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
  allowedHeaders: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
}));

app.use(routes);

app.listen(port, () => {
  console.log(`Backend listening to port ${port}`);
});
