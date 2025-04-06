const express = require("express");
const router = express.Router();
const {
  addService,
  getAllServices,
  getServiceById,
  deleteService,
  updateService,
} = require("../controller/serviceController");

const multer = require("multer");
const path = require("path");

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// ✅ Cleaned-up route paths (no "/services")
router.post("/", upload.single("image"), addService);
router.get("/", getAllServices);
router.get("/:id", getServiceById);
router.delete("/:id", deleteService);
router.put("/:id", upload.single("image"), updateService);

module.exports = router;
