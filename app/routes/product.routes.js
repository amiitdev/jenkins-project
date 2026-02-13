import express from 'express';
import Product from '../models/product.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Product.findByIdAndDelete(id);
  res.send('Deleted');
});

export default router;
