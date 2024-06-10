import express from "express";
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser'
import cors from 'cors';


const port = process.env.PORT || 5000

import errorHandler from "./middleware/error.js";


//import all routes 
import authRouter from "./router/authRouter.js"



connectDB() //connection to data base



const app = express()

// Use CORS middleware
app.use(cors());

//Body parser
app.use(express.json())
app.use(cookieParser());

//All routes
app.use('/api/auth',authRouter)

app.use(errorHandler)







app.get('/',(req,res) => {
    res.send("I am server")
})

app.get('/who',(req,res) => {
    res.send("Who we are")
})

app.listen(port, () => {
    console.log(`Server is running port in ${port}`)
})