import express, { Request, Response, Router } from "express";
import movie from "../data/movie.data";

const getMovie = (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "영화 조회 성공",
    data: movie     
  });
}
export default getMovie;

