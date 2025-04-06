const express = require('express');
const multer = require('multer');
const path = require('path');
const { addProduct, getProducts, deleteProduct } = require('../controller/productController');  // ✅ Include deleteProduct

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    const fileExt = path.extname(file.originalname);
    cb(null, Date.now() + fileExt);
  },
});

const upload = multer({ storage });
const router = express.Router();

// Route to add a new product
router.post('/', upload.single('image'), addProduct);

// Route to get all products
router.get('/', getProducts);

// ✅ Route to delete a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;
