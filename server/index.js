import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import postRoutes from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use("/posts", postRoutes)   //Every route in the postRoute is going to start from localhost:5000/posts

const CONNECTION_URL = "mongodb+srv://samarth:samarth123@memories-project.51tfjmr.mongodb.net/?retryWrites=true&w=majority" //this is to connect to the cluster

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Serve running on port : ${PORT}`); }))
    .catch((error) => { console.log(error.message); });

//mongoose.set("useFindAndModify", false) //this makes sure we dont get any warnings in the console

