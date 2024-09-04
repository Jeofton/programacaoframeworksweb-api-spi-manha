import { Router } from 'express';
import { SuperheroController } from '../controllers/superheroController';
import { superheroValidators } from '../utils/validators';

const router = Router();
const controller = new SuperheroController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', superheroValidators, controller.create);
router.put('/:id', superheroValidators, controller.update);
router.delete('/:id', controller.delete);

export default router;
