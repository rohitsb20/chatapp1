import { messages } from "../controllers/message.controller.js";
import express from "express";

const router = express.Router();


router.post("/send/:id", protectRoute, messages);

export default router;
