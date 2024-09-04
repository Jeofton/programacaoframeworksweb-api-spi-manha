import { SuperheroRepository } from '../repositories/superheroRepository';
import { ISuperhero } from '../models/superheroModel';

export class SuperheroService {
  private repository: SuperheroRepository;

  constructor() {
    this.repository = new SuperheroRepository();
  }

  async getAllSuperheroes(): Promise<ISuperhero[]> {
    return this.repository.findAll();
  }

  async getSuperheroById(id: string): Promise<ISuperhero | null> {
    return this.repository.findById(id);
  }

  async createSuperhero(superhero: ISuperhero): Promise<ISuperhero> {
    return this.repository.create(superhero);
  }

  async updateSuperhero(id: string, superhero: ISuperhero): Promise<ISuperhero | null> {
    return this.repository.update(id, superhero);
  }

  async deleteSuperhero(id: string): Promise<ISuperhero | null> {
    return this.repository.delete(id);
  }
}
