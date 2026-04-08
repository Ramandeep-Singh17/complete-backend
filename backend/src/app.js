const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./db/models/post.model');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());// middleware to parse JSON request bodies
// data  jo aa rha hai wo form data ke form me aa rha hai isliye hm multer ka use karenge
 
const upload = multer({ storage:multer.memoryStorage()})

// hm multer ke baad upload.single banate hai and usme wahi name dete hai jo postman me diye the
app.post('/create-post',upload.single("image"),async(req,res)=>{
  console.log(req.body);
  console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })
    res.status(201).json({
        message:"Post created successfully",
        post
})


})
app.get("/posts", async (req, res) => {
    const posts = await postModel.find()

     return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })
})
module.exports = app;