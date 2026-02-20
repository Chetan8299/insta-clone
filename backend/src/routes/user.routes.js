const express = require('express');
const userController = require("../controllers/user.controllers");
const authenticate = require("../middlewares/auth.middleware");

const userRouter = express.Router();

/**
 * @route POST /api/users/follow/:username
 * @description Follow a user
 * @access Private
 */
userRouter.post("/follow/:username", authenticate, userController.followUserController)

/**
 * @route POST /api/users/unfollow/:username
 * @description Unfollow a user
 * @access Private
 */
userRouter.delete("/unfollow/:username", authenticate, userController.unfollowUserController);

/**
 * @route GET /api/users/requests
 * @description get all the follow requests for a user
 * @access Private
 */
userRouter.get("/requests", authenticate, userController.getFollowRequestsController)

/**
 * @route PUT /api/users/accept/:requestId
 * @description accept the follow request
 * @access Private
 */
userRouter.put("/accept/:requestId", authenticate, userController.acceptFollowRequestController);

/**
 * @route PUT /api/users/reject/:requestId
 * @description reject the follow request
 * @access Private
 */
userRouter.put("/reject/:requestId", authenticate, userController.rejectFollowRequestController);


module.exports = userRouter;