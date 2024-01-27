import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./middlewares/dbConnect";

dotenv.config();
const app = express();
dbConnect(`${process.env.db_URL}`);

const PORT = 4040;
//Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce");
});

const startServer = (): void => {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
};

startServer();
