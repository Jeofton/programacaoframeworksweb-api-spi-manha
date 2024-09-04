// src/repositories/SuperHeroRepository.ts
import SuperHero from '../models/superheroModel';
import { ISuperhero } from '../models/interfaces/ISuperhero';

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
  public async findByName(nome: string): Promise<ISuperhero | null> {
    try {
      return await SuperHero.findOne({ nome });
    } catch (error) {
      throw new Error(`Erro ao buscar super-herói: ${(error as Error).message}`);
    }
  }

  // Atualização de super-herói
  public async update(nome: string, updatedData: Partial<ISuperhero>): Promise<ISuperhero | null> {
    try {
      return await SuperHero.findOneAndUpdate({ nome }, updatedData, { new: true });
    } catch (error) {
      throw new Error(`Erro ao atualizar super-herói: ${(error as Error).message}`);
    }
  }

  // Exclusão de super-herói
  public async delete(nome: string): Promise<boolean> {
    try {
      const result = await SuperHero.findOneAndDelete({ nome });
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
