import superheroRepository from '../repositories/superheroRepository';  // Corrigido para o nome correto do repositório
import { ISuperhero } from '../models/interfaces/ISuperhero';  // Importar a interface ISuperHero

export class SuperheroService {
  private repository = superheroRepository;  // Acesso direto ao repositório

  // Método para obter todos os super-heróis
  async getAllSuperheroes(): Promise<ISuperhero[]> {
    return this.repository.findAll();
  }

  // Método para obter um super-herói pelo nome
  async getSuperheroByName(nome: string): Promise<ISuperhero | null> {
    return this.repository.findByName(nome);
  }

  // Método para criar um novo super-herói
  async createSuperhero(superhero: ISuperhero): Promise<ISuperhero> {
    return this.repository.create(superhero);
  }

  // Método para atualizar um super-herói existente
  async updateSuperhero(nome: string, superhero: Partial<ISuperhero>): Promise<ISuperhero | null> {
    return this.repository.update(nome, superhero);
  }

  // Método para deletar um super-herói
  async deleteSuperhero(nome: string): Promise<boolean> {
    return this.repository.delete(nome);
  }
}
