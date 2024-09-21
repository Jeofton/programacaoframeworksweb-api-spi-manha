import { NextFunction, Request, Response } from "express";
import jwt, {JwtPayload} from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
    user?: JwtPayload; // Defina aqui o que você espera como payload
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Token inválido.' });
    }
};