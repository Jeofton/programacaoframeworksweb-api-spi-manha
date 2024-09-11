import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import User from "../../models/admin/userModel";


export class AuthController {
    public async register(req: Request, res: Response): Promise<void> {
        const { nome, email, password } = req.body;

        try {

            const criptoPassword = await bcrypt.hash(password, 10);

            const newUser = new User({nome, email, password: criptoPassword});
            newUser.save();

            res.status(201).json({ message: 'Usuário registrado com sucesso!'})
            
        } catch (error) {
            res.status(500).json({ error: (error as Error).message})
        }
    }

    public async login(req: Request, res: Response): Promise<void> {

    }
}