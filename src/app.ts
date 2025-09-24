import express from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.routes.js";

const app = express();
app.use(cors());
app.use(express.json())


app.use("/api/v1/user", userRouter)

app.get("/", (req, res) => {
  res.send("Api is running");
});

export default app;
