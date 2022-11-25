import { Router } from "express";
import movieRouter from "./movieRouter";

const router: Router = Router();

router.use("/movie", movieRouter);

export default router;
