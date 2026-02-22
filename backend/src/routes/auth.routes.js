const express = require("express");
const authControllers = require("../controllers/auth.controllers")
const authenticate = require("../middlewares/auth.middleware")


const authRouter = express.Router();

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authControllers.registerController)

/**
 * @route POST /api/auth/login
 * @description Login a user
 * @access Public
 */
authRouter.post("/login",authControllers.loginController)

/**
 * @route GET /api/auth/get-me
 * @description Get the current user
 * @access Private
 */
authRouter.get("/get-me",authenticate,authControllers.getMeController)

module.exports = authRouter