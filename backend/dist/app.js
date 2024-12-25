"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = require("./middlewares/dbConnect");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const categoryRoutes_1 = __importDefault(require("./routes/categoryRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
(0, dbConnect_1.dbConnect)(`${process.env.db_URL}`);
const PORT = 4040;
//Middleware
app.use(express_1.default.static("uploads"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send("Welcome to E-commerce");
});
// API Endpoints
app.use("/auth", authRoutes_1.default);
app.use("/user", userRoutes_1.default);
app.use("/category", categoryRoutes_1.default);
app.use("/product", productRoutes_1.default);
app.use("/cart", cartRoutes_1.default);
app.use("/order", orderRoutes_1.default);
const startServer = () => {
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
};
startServer();
