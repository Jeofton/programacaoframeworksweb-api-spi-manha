import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from "../../models/admin/userModel";


export class AuthController {
    public async register(req: Request, res: Response): Promise<void> {
        const { nome, email, password } = req.body;

        try {

            const criptoPassword = await bcrypt.hash(password, 10);

            const newUser = new User({ nome, email, password: criptoPassword });
            newUser.save();

            res.status(201).json({ message: 'Usuário registrado com sucesso!' });

        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        const {nome, email, password} = req.body;

        try {
            const user = await User.findOne({ email });
            if(!user){
                res.status(404).json({ message: "Usuário não encontrado"});
                return;
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                res.status(400).json({ message : "Usuário e/ou senha incorreta."});
                return;
            }

            const token = jwt.sign({id : user._id}, process.env.JWT_SECRET as string, { expiresIn: '1h'});
            res.status(200).json({token})
        } catch (error) {
            res.status(500).json({ error: (error as Error).message})
        }
    }
}

export default new AuthController();