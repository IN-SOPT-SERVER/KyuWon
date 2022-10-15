//* src/api/user.ts

import express, { Request, Response, Router } from "express";
import user from "../data/user.data";

const router: Router = express.Router();

const getUser = (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "유저 조회 성공",
    data: user
  });
}
export default getUser;