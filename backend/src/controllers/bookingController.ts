import { Request, Response, NextFunction } from 'express';
import Booking from '../models/Booking';
import Car from '../models/Car';
import { AuthRequest } from '../middleware/authMiddleware';

export const createBooking = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { carId, startDate, endDate, totalPrice } = req.body;

    const car = await Car.findById(carId);
    if (!car) {
      res.status(404);
      throw new Error('Car not found');
    }

    const conflictingBookings = await Booking.find({
      car: carId,
      status: { $in: ['pending', 'confirmed'] },
      $or: [
        {
          startDate: { $lte: new Date(endDate) },
          endDate: { $gte: new Date(startDate) },
        },
      ],
    });

    if (conflictingBookings.length > 0) {
      res.status(400);
      throw new Error('Car is not available for the selected dates');
    }

    const booking = await Booking.create({
      user: req.user?._id,
      car: carId,
      owner: car.owner,
      startDate,
      endDate,
      totalPrice,
      status: 'pending',
      paymentStatus: 'pending',
    });

    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

export const getMyBookings = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const bookings = await Booking.find({ user: req.user?._id }).populate(
      'car',
      'make model year images'
    );

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const getOwnerBookings = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const bookings = await Booking.find({ owner: req.user?._id })
      .populate('car', 'make model year')
      .populate('user', 'firstName lastName email');

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBookingStatus = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const { status } = req.body;

    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      res.status(404);
      throw new Error('Booking not found');
    }

    if (
      booking.owner.toString() !== req.user?._id.toString() &&
      req.user?.role !== 'admin'
    ) {
      res.status(403);
      throw new Error('User not authorized to update this booking');
    }

    booking.status = status;
    await booking.save();

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};