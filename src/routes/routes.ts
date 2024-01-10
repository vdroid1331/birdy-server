import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import uploadFile from "../controllers/file.controller";

const router = Router();

// router.route("/uploadFile").get(uploadFile);
router.route("/uploadFile").post(upload.single("chirpImage"), uploadFile);

export default router;
