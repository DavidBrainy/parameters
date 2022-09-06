const router = require("express").Router
const {
    getPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost} = require("../controllers/posts.controllers");

    const postRouter = router();

    postRouter.route("/").get(getPosts).post(createPost);
    postRouter.route("/:postId").get(getPost).patch(updatePost).delete(deletePost);
    
    module.exports = postRouter;