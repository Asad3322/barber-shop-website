const Booking = require("../models/booking");

// Create a new booking
const createBooking = async (req, res) => {
  try {
    const { userName, serviceId, serviceName, date } = req.body;

    const newBooking = new Booking({
      userName,
      serviceId,
      serviceName,
      date,
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking successful", booking: newBooking });
  } catch (err) {
    res.status(500).json({ error: "Failed to create booking" });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
};

// ✅ Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) {
      return res.status(404).json({ error: "Booking not found" });
    }
    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
};

module.exports = {
  createBooking,
  getAllBookings,
  deleteBooking, // ✅ Exported
};
