// database is always on another continent
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running at port:`, process.env.PORT);
    });
  })
  .catch((err) => console.log("MONGO DB connection failed", err));
