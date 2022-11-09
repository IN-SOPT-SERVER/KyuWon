import { Request, Response } from "express"
import { movieService } from "../service"

const createMovie = async (req: Request, res: Response) => {
    try {
        const { title, actor, genre, episode, visible } = req.body;
        const data = await movieService.createMovie( title, actor, genre, episode, visible );
        return res.status(200).json({ status : 200, message: "영화 생성 성공", data});
    } catch {
        return res.status(400).json({ status: 400, message: "영화 생성 실패"})
    }
}

const getOneMovie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await movieService.getOneMovie(+id);
        return res.status(200).json({ status : 200, message: "영화 조회 성공", data});
    } catch {
        return res.status(404).json({ status: 404, message: "영화 조회 실패"})
    }
}

const getAllMovie = async (req: Request, res: Response) => {
    try {
        const data = await movieService.getAllMovie();
        return res.status(200).json({ status : 200, message: "영화 조회 성공", data});
    } catch {
        return res.status(404).json({ status: 404, message: "영화 조회 실패"})
    }
}

const updateMovie = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const { id } = req.params;
        const data = await movieService.updateMovie(+id, body);
        return res.status(200).json({ status : 200, message: "영화 업데이트 성공", data});
    } catch {
        return res.status(404).json({ status: 404, message: "영화 업데이트 실패"})
    }
}

const updateVisible = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { visible } = req.body;
        const data = await movieService.updateVisible(+id, Boolean(visible));
        return res.status(200).json({ status : 200, message: "영화 visible 업데이트 성공", data});
    } catch {
        return res.status(404).json({ status: 404, message: "영화 visible 업데이트 실패"})
    }
}

const deleteMovie = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await movieService.deleteMovie(+id);
        return res.status(200).json({ status : 200, message: "영화 삭제 성공", data});
    } catch {
        return res.status(404).json({ status: 404, message: "영화 삭제 실패"})
    }
}

const movieController = {
    createMovie,
    getOneMovie,
    getAllMovie,
    updateMovie,
    updateVisible,
    deleteMovie,
}

export default movieController;