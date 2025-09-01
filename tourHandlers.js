const Tour = require("./tourLib");

const getAllTours = (req, res) => {
    const tours = Tour.getAll();
    res.json(tours);
};

const createTour = (req, res) => {
    const { name, info, image, price } = req.body;

    const newTour = Tour.addOne(name, info, image, price);
    if (newTour) {
        res.json(newTour);
    } else {
        res.status(500).json({ error: "Failed to create Tour" });
    }
};

const getTourById = (req, res) => {
    const tourId = req.params.tourId;
    const tour = Tour.findById(tourId);
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ error: "Tour not found" });
    }
};

const updateTour = (req, res) => {
    const tourId = req.params.tourId;
    const updatedData = req.body;
    const updatedTour = Tour.updateOneById(tourId, updatedData);
    if (updatedTour) {
        res.json(updatedTour);
    } else {
        res.status(404).json({ error: "Tour not found or update failed" });
    }
};

const deleteTour = (req, res) => {
    const tourId = req.params.tourId;
    const deletedTour = Tour.deleteOneById(tourId);
    if (deletedTour) {
        res.json({message: "Tour deleted successfully"});
    } else {
        res.status(404).json({ error: "Tour not found or delete failed" });
    }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};