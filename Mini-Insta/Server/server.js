import app from "./src/app.js"
import connectDB from "./db/db.js"
import dotenv from "dotenv"
dotenv.config()

connectDB()

app.listen(8000,() => {
    console.log("Server started")
})