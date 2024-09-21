import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: { nome: string; email: string; password: string } | JwtPayload; // ou defina o tipo que você deseja usar para o payload decodificado
    }
  }
}