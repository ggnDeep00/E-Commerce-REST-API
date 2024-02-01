// routes/productRoutes.js
import express from 'express'
const router = express.Router();
import {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct,searchProducts}  from "../controllers/productController.js"

router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/search/:id', getProductById);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.get('/search', searchProducts);

export const productRoutes = router;
