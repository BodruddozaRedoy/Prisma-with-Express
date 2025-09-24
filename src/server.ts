import http, { Server } from "http";
import dotenv from "dotenv";
import { prisma } from "./config/db.js";
import app from "./app.js";

dotenv.config();

let server: Server | null = null;

async function connectToDB() {
  try {
    await prisma.$connect();
    console.log("Db Connection successful!!!");
  } catch (error) {
    console.log("DB Connection failed");
    process.exit(1);
  }
}

async function startServer() {
  try {
    await connectToDB();
    server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`Server is running on port:`, process.env.PORT);
    });
  } catch (error) {
    console.log("Server Error");
    process.exit(1);
  }
}
startServer();
