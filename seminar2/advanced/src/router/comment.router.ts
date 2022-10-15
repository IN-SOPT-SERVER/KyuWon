import express, { Request, Response, Router } from "express";
import getComment from "../api/comment";

const router: Router = express.Router();

router.get("/", getComment);

export default router