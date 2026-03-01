import express from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRouter.js';

const PORT = 3000
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', productsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});