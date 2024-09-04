import { body } from 'express-validator';

export const superheroValidators = [
  body('nome').isString().withMessage('Name is required'),
  body('poderes').isArray().withMessage('Powers must be an array'),
  body('status').isIn(['Active', 'Inactive']).withMessage('Status must be Active or Inactive'),
];
