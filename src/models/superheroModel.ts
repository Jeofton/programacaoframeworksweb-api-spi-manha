import mongoose, { Document, Schema } from 'mongoose';

export interface ISuperhero extends Document {
  nome: string;
  equipe?: string;
  poderes: string[];
  status: 'Active' | 'Inactive';
}

const SuperheroSchema: Schema = new Schema({
  nome: { type: String, required: true },
  equipe: { type: String },
  poderes: { type: [String], required: true },
  status: { type: String, enum: ['Active', 'Inactive'], required: true }
});

export default mongoose.model<ISuperhero>('Superhero', SuperheroSchema);
