const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const imageController = require("../controller/imageController");

router.post("/upload", upload.single("image"), imageController.uploadImage);
router.get("/", imageController.getAllImages);
router.get("/:id", imageController.getImage);
router.delete("/:id", imageController.deleteImage);

module.exports = router;