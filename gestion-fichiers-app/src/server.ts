import express from 'express';
import { FileRoutes } from './routes/FileRoutes';
import cors from 'cors';


var corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204, // Certains navigateurs (notamment Chrome) envoient une pré-requête OPTIONS

};



const app = express();

app.use(cors(corsOptions));
const port = 5000;

app.use('/files', new FileRoutes().getRouter());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
