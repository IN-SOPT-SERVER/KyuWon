import express, { Request, Response, Router } from 'express';
import memberRouter from '../api/members';
import blogRouter from './blog.router'
import commentRouter from './comment.router'
import movieRouter from './movie.router'
import userRouter from './user.router'


const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
    return res.status(200).send("api router 진입 성공. api/index.ts의 get이 실행안되고 이것이 실행됩니다");
  });

router.use("/user", userRouter);
router.use("/blog", blogRouter);
router.use("/movie", movieRouter);
router.use("/comment", commentRouter)
export default router;