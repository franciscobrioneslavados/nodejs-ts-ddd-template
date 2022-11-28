import * as dotenv from 'dotenv'
import express from "express";
import cors from "express";
import userRoute from "./infrastructure/route/user.route";
import dbInit from "./infrastructure/db/mongo";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001;

app.use(userRoute);
dbInit().then();
app.listen(port, () => console.log(`APP, run on PORT: ${port}`));