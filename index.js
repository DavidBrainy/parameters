const { response } = require("express");
const express = require("express");
const postRouter = require ("./routes/posts.route");

const app = express();

app.get("/", (request, response) => {
    response.status(200).send("welcome to my server");
});

app.use("/posts", postRouter);

app.listen(4000, () =>{
    console.log("server running on http://localhost:4000");
});

