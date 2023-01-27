import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find() //since this takes time, we make it async
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message })

    }
}

export const createPost = async (req, res) => {
    const post = req.body
    const newPost = new postMessage(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

//export is used when we have multiple modules/variables to export. We import it with {name}
//export default is used when we just have one module/variable to export. We can name it anything whilst importing