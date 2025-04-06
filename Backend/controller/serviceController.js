const Service = require("../models/service");
const fs = require("fs");
const path = require("path");

// Add Service
const addService = async (req, res) => {
  try {
    const { name, category, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newService = new Service({ name, category, description, price, image });
    await newService.save();

    res.status(201).json({ message: "Service added successfully", service: newService });
  } catch (err) {
    res.status(500).json({ error: "Failed to add service" });
  }
};

// Get All Services
const getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

// Get Service by ID
const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });
    res.status(200).json(service);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch service" });
  }
};

// ✅ Delete Service (with image file check)
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });

    // Delete image from uploads folder if it exists
    if (service.image) {
      const imagePath = path.join(__dirname, "..", service.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete service" });
  }
};

// Update Service
const updateService = async (req, res) => {
  try {
    const { name, category, description, price } = req.body;
    const updates = { name, category, description, price };

    if (req.file) {
      updates.image = `/uploads/${req.file.filename}`;
    }

    const updatedService = await Service.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });

    if (!updatedService) return res.status(404).json({ error: "Service not found" });

    res.status(200).json({ message: "Service updated", service: updatedService });
  } catch (err) {
    res.status(500).json({ error: "Failed to update service" });
  }
};

module.exports = {
  addService,
  getAllServices,
  getServiceById,
  deleteService,
  updateService,
};
