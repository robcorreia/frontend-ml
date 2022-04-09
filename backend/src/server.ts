import express from "express";
import Routes from "./routes";
require("dotenv").config();
import cors from "cors";
const PORT = 3333;

const app = express();

const options: cors.CorsOptions = {
  origin: "*",
};

app.use(cors(options));

app.use(express.json());

app.use(Routes);

app.listen(PORT, () => `server running on port ${PORT}`);
