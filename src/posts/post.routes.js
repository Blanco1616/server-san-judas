import { Router } from "express"
import { createPost, getAllposts, getPostById } from "./post.controller.js"

const router = Router()

router.post("/", createPost)

router.get("/", getAllposts)

router.get("/:id", getPostById)

export default router
