import express from "express"
import multer from "multer"
import postUpload from "../models/post.model.js"
import uploadFile from "../services/storage.service.js"
import cors from "cors"

const app = express()
app.use(express.json())

const upload = multer({
    storage:multer.memoryStorage()
})

app.use(cors({
    "origin" : "http://localhost:5173",
    "credentials" : "true",
}))

app.post("/create",upload.single("image"),async (req,res) => {
        console.log(req.body)
        console.log(req.file)

        const result = await uploadFile(req.file.buffer)
        console.log(result)
        const postFile = await postUpload.create({
            image : result.url,
            caption : req.body.caption
        })

        return res.status(201).json({
            message : "Post Created Successfully ",
            postFile
        })
        
})


app.get("/posts",async (req,res) => {
    const posts = await  postUpload.find()


    return res.status(201).json({
        message:"Showing File",
        posts
    })
})

 export default app