import express from "express"
import { singUp,signIn } from "../controllers/authController.js"

const router = express.Router()

router.post('/signup',singUp)
router.post('/signin',signIn)

export default router