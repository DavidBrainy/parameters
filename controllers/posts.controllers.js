const getPosts = (request, response) => {
    response.status(200).send(`Get all Posts filtered by "${request.query.title}"`);
};

const getPost = (request, response) => {
    response.status(200).send("Get a single post");
};

const createPost = (request, response) => {
    response.status(200).send("create a post");
};

const updatePost = (request, response) => {
    response.status(201).send(`post with ID ${request.params.postId} has been updated`);
};

const deletePost = (request, response) => {
    response.status(200).send("delate post");
};

module.exports ={
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
};

