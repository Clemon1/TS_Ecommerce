import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnect } from "./middlewares/dbConnect";
import authRouter from "./routes/authRoutes";
import productRouter from "./routes/productRoutes";
dotenv.config();
const app = express();
dbConnect(`${process.env.db_URL}`);

const PORT = 4040;
//Middleware
app.use(express.static("uploads"));

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce");
});

// API Endpoints
app.use("/auth", authRouter);
app.use("/product", productRouter);

const startServer = (): void => {
  app.listen(PORT, () => console.log(`listening on ${PORT}`));
};

startServer();
