import { NextFunction, Request, Response } from 'express';
import { db } from '../utils/db';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const q = 'INSERT INTO users SET ?';
        const { name, phone, email, password, country } = req.body;
        console.log(name, phone, email, password, country);

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Please enter all fields.' });
        }

        const [result] = await db.query(q, { name, phone, email, password, country });

        return res.status(201).json({ success: true, message: 'User created successfully!', result });
    } catch (err: any) {
        console.error(err);
        return res.status(500).json({ success: false, message: err.message || 'Database error' });
    }
};
