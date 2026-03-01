import ImageKit from "@imagekit/nodejs/index.js";
import dotenv from "dotenv"
dotenv.config({})
const imageKit = new ImageKit({
    privateKey : process.env.PRIVATEKEY
})


async function uploadFile(buffer){
     const result = await imageKit.files.upload({
        file : buffer.toString("base64"),
        fileName : "Image.jpg"
     })
     
     return result;
}

export default uploadFile;
