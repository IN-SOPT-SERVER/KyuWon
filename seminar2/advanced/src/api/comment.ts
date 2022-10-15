import express, { Request, Response, Router } from "express";
import comment from "../data/comment.data";


const getComment = (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "comment 조회 성공",
    data: comment     
    });
  }
export default getComment;