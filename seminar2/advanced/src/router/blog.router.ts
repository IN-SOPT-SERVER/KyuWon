import express, { Request, Response, Router } from "express";
import getBlog from "../api/blog";

const router: Router = express.Router();

router.get("/", getBlog);

export default router