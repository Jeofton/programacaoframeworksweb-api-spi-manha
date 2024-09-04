// src/models/SuperHero.ts
import mongoose, { Document, Schema, model } from 'mongoose';
import { ISuperhero } from './interfaces/ISuperhero';

// Interface para o Mongoose Model
interface ISuperHeroModel extends ISuperhero, Document {}

// Schema do Mongoose
const SuperHeroSchema: Schema = new Schema<ISuperHeroModel>({
  nome: { type: String, required: true },
  poderes: { type: [String], required: true },
  equipe: { type: String },
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' },
  baseOperacional: { type: String },
  nivelPoder: { type: Number, required: true, min: 1, max: 100 }
});

// Criação do modelo
const SuperHero = model<ISuperHeroModel>('SuperHero', SuperHeroSchema);

export default SuperHero;
