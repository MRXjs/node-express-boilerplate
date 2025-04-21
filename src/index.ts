import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter';

dotenv.config();

const app = express();

// cors
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    }),
);

// body parser
app.use(express.json({ limit: '50mb' }));

// cookie parser
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('<h1>Hello World...</h1>');
});

// routes
app.use('/api/v1', userRouter);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT} 🚀`);
});
