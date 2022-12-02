import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlewares";

const router: Router = Router();

router.post("/", upload.single("file"), imageController.uploadImage);
