const express = require("express")
const postController = require("../controllers/post.controllers")
const multer = require("multer");
const authenticate = require("../middlewares/auth.middleware");

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const postRouter = express.Router();

/**
 * @route POST /api/posts
 * @description Create a new post
 * @access Private
 */
postRouter.post("/", authenticate, upload.single("image"), postController.createPostController);

/**
 * @route GET /api/posts
 * @description Get all posts
 * @access Private
 */
postRouter.get("/", authenticate, postController.getPostController);

/**
 * @route GET /api/posts/detail/:postId
 * @description Get the details of a post
 * @access Private
 */
postRouter.get("/details/:postId", authenticate, postController.getPostDetailsController);

/**
 * @route POST /api/posts/like/:postId
 * @description Like a post
 * @access Private
 */
postRouter.post("/like/:postId", authenticate, postController.likePostController)

/**
 * @route GET /api/posts/feed
 * @description Get the feed of posts
 * @access Private
 */
postRouter.get("/feed", authenticate, postController.getFeedController)

module.exports = postRouter