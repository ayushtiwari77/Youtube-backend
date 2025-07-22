// database is always on another continent
import dotenv from "dotenv";
import connectDb from "./db/index.js";

dotenv.config({});

connectDb();
