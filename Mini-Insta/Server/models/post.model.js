import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    image:{
        type:String,
    },
    caption:{
        type:String
    }
})



const postUpload = mongoose.model("post",PostSchema)

export default postUpload