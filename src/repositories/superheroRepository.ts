import Superhero, { ISuperhero } from '../models/superheroModel';

export class SuperheroRepository {
  async findAll(): Promise<ISuperhero[]> {
    return Superhero.find();
  }

  async findById(id: string): Promise<ISuperhero | null> {
    return Superhero.findById(id);
  }

  async create(superhero: ISuperhero): Promise<ISuperhero> {
    return Superhero.create(superhero);
  }

  async update(id: string, superhero: ISuperhero): Promise<ISuperhero | null> {
    return Superhero.findByIdAndUpdate(id, superhero, { new: true });
  }

  async delete(id: string): Promise<ISuperhero | null> {
    return Superhero.findByIdAndDelete(id);
  }
}
