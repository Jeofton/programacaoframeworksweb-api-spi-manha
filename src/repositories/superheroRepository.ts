// src/repositories/SuperHeroRepository.ts
import SuperHero from '../models/superheroModel';
import { ISuperhero } from '../models/interfaces/ISuperhero';
import { ObjectId } from 'mongodb';

class SuperHeroRepository {
  // Criação de um novo super-herói
  public async create(superHeroData: ISuperhero): Promise<ISuperhero> {
    try {
      const newSuperHero = new SuperHero(superHeroData);
      return await newSuperHero.save();
    } catch (error) {
      throw new Error(`Erro ao criar super-herói: ${(error as Error).message}`);
    }
  }

  // Busca de super-herói por nome
  public async findById(id: string): Promise<ISuperhero | null> {
    try {
      return await SuperHero.findOne({ _id : new ObjectId(id) });
    } catch (error) {
      throw new Error(`Erro ao buscar super-herói: ${(error as Error).message}`);
    }
  }

  // Atualização de super-herói
  public async update(id: string, updatedData: Partial<ISuperhero>): Promise<ISuperhero | null> {
    try {
      return await SuperHero.findOneAndUpdate({_id: new ObjectId(id)}, updatedData, { new: true });
    } catch (error) {
      throw new Error(`Erro ao atualizar super-herói: ${(error as Error).message}`);
    }
  }

  // Exclusão de super-herói
  public async delete(id: string): Promise<boolean> {
    try {
      const result = await SuperHero.findOneAndDelete({_id: new ObjectId(id)});
      return result !== null;
    } catch (error) {
      throw new Error(`Erro ao deletar super-herói: ${(error as Error).message}`);
    }
  }

  // Listagem de todos os super-heróis
  public async findAll(): Promise<ISuperhero[]> {
    try {
      return await SuperHero.find();
    } catch (error) {
      throw new Error(`Erro ao listar super-heróis: ${(error as Error).message}`);
    }
  }
}

export default new SuperHeroRepository();
