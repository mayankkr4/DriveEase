import express from 'express';
import {
  getCars,
  getCar,
  createCar,
  updateCar,
  deleteCar
} from '../controllers/carController';
import { protect, authorize } from '../middleware/authMiddleware';

const router = express.Router();

router.route('/')
  .get(getCars)
  .post(protect, authorize('owner', 'admin'), createCar);

router.route('/:id')
  .get(getCar)
  .put(protect, authorize('owner', 'admin'), updateCar)
  .delete(protect, authorize('owner', 'admin'), deleteCar);

export default router;
