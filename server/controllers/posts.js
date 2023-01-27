import PostMessage from "../models/postMessage.js"

export const getPosts = (req, res) => {
    res.send("This works!!")
}

export const createPost = (req, res) => {
    res.send("Post creation")
}

//export is used when we have multiple modules/variables to export. We import it with {name}
//export default is used when we just have one module/variable to export. We can name it anything whilst importing