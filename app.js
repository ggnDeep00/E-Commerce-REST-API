// app.js
import express from 'express'
import {connectDB} from './db.js';
import {productRoutes} from './routes/productRoutes.js'

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
