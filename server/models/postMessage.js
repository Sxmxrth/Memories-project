import mongoose from "mongoose"

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],    //array of strings
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },                 //object
    createdAt: {
        type: Date,
        default: new Date()

    }
})          //this is the schema for the db

const PostMessage = mongoose.model("PostMessage", postSchema)

export default PostMessage                 //exporting mongoose model