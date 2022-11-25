import { Router } from "express";
import { movieController } from "../controller";

const router: Router = Router();

//* movie 생성 POST api/movie
router.post('/', movieController.createMovie);

//* movie 전체 조회 GET api/movie
router.get('/', movieController.getAllMovie);

//* movie id로 조회 GET api/movie/:id
router.get('/:id', movieController.getOneMovie);

//* movie 정보 업데이트 PUT api/movie/:id
router.put('/:id', movieController.updateMovie);

//* movie visibility 업데이트 PATCH api/movie/:id
router.patch('/:id', movieController.updateVisible)

//* movie 삭제 DELETE api/movie/:id
router.delete('/:id', movieController.deleteMovie);

export default router;
