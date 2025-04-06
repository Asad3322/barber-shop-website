const express = require("express");
const router = express.Router();
const {
  createBooking,
  getAllBookings,
  deleteBooking, // ✅ Import delete handler
} = require("../controller/bookingController");

router.post("/", createBooking);
router.get("/", getAllBookings);
router.delete("/:id", deleteBooking); // ✅ Add delete route

module.exports = router;
