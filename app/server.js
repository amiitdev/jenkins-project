import express from 'express';
import connectDB from './db.js';
import productRoutes from './routes/product.routes.js';
import dotenv from 'dotenv';

//
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/products', productRoutes);

app.get('/health', (req, res) => res.send('OK'));

app.listen(5000, () => console.log('Server running on port 5000'));
