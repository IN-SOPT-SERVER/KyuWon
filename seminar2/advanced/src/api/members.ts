import express, { Request, Response, Router } from "express";
import members from "../data/member.data";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: members
    
  });
});

export default router;