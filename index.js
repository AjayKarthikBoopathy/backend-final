import express from "express"
import dotenv from "dotenv"
import { studentsRouter } from "./Routers/students.js";
import { userRouter } from "./Routers/users.js";
import { isAuthenticated } from "./Authentication/auth.js";
import cors from "cors"

//configure the environment
dotenv.config();
const PORT = process.env.PORT

//initiating the server
const app = express();

//middleware
app.use(express.json());

app.use(cors());

//students routers
app.use("/students",isAuthenticated,studentsRouter)     //for CRUD - token & authentication needed
app.use("/users",userRouter )       //for signup & login - token & authentication not needed

//starting the server
app.listen(PORT, ()=>console.log("server running in localhost:9090")) 

//nodemailer - for forget password & resetting