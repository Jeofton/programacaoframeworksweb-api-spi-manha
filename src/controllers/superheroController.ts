import { Request, Response } from 'express';
import { SuperheroService } from '../services/superheroService';
import { validationResult } from 'express-validator';

const service = new SuperheroService();

export class SuperheroController {
  async getAll(req: Request, res: Response): Promise<Response> {
    const superheroes = await service.getAllSuperheroes();
    return res.json(superheroes);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const superhero = await service.getSuperheroByName(id);
    if (!superhero) {
      return res.status(404).json({ message: 'Superhero not found' });
    }
    return res.json(superhero);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const superhero = await service.createSuperhero(req.body);
    return res.status(201).json(superhero);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const updatedSuperhero = await service.updateSuperhero(id, req.body);
    if (!updatedSuperhero) {
      return res.status(404).json({ message: 'Superhero not found' });
    }
    return res.json(updatedSuperhero);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deletedSuperhero = await service.deleteSuperhero(id);
    if (!deletedSuperhero) {
      return res.status(404).json({ message: 'Superhero not found' });
    }
    return res.json({ message: 'Superhero deleted successfully' });
  }
}
