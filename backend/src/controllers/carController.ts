import { Request, Response, NextFunction } from 'express';
import Car from '../models/Car';
import { AuthRequest } from '../middleware/authMiddleware'; // Change this if your file is named differently

// @desc    Get all cars (with filtering/search)
// @route   GET /api/cars
// @access  Public
export const getCars = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { make, type, minPrice, maxPrice, city, transmission, fuelType } = req.query;

    const query: any = {};

    if (make) query.make = { $regex: make, $options: 'i' };
    if (type) query.type = { $regex: type, $options: 'i' };
    if (city) query['location.city'] = { $regex: city, $options: 'i' };
    if (transmission) query.transmission = transmission;
    if (fuelType) query.fuelType = fuelType;

    if (minPrice || maxPrice) {
      query.pricePerDay = {};
      if (minPrice) query.pricePerDay.$gte = Number(minPrice);
      if (maxPrice) query.pricePerDay.$lte = Number(maxPrice);
    }

    const cars = await Car.find(query).populate(
      'owner',
      'firstName lastName email'
    );

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single car
// @route   GET /api/cars/:id
// @access  Public
export const getCar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const car = await Car.findById(req.params.id).populate(
      'owner',
      'firstName lastName email phone'
    );

    if (!car) {
      res.status(404);
      throw new Error('Car not found');
    }

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new car
// @route   POST /api/cars
// @access  Private (Owner/Admin)
export const createCar = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized');
    }

    req.body.owner = req.user._id;

    const car = await Car.create(req.body);

    res.status(201).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update car
// @route   PUT /api/cars/:id
// @access  Private (Owner/Admin)
export const updateCar = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized');
    }

    let car = await Car.findById(req.params.id);

    if (!car) {
      res.status(404);
      throw new Error('Car not found');
    }

    if (
      car.owner.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      res.status(403);
      throw new Error('User not authorized to update this car');
    }

    car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      data: car,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete car
// @route   DELETE /api/cars/:id
// @access  Private (Owner/Admin)
export const deleteCar = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized');
    }

    const car = await Car.findById(req.params.id);

    if (!car) {
      res.status(404);
      throw new Error('Car not found');
    }

    if (
      car.owner.toString() !== req.user._id.toString() &&
      req.user.role !== 'admin'
    ) {
      res.status(403);
      throw new Error('User not authorized to delete this car');
    }

    await car.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    next(error);
  }
};