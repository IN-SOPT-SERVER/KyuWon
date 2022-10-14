import express, { Request, Response, Router } from "express";
import getMember from "../api/members";

const router: Router = express.Router();

router.get("/", getMember);

export default router