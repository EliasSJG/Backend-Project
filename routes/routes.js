import express from "express";
import * as animalService from "../services/service.js";

const router = express.Router();

// GET /api/animals - Alla djur
router.get("/", async (req, res) => {
  try {
    const animals = await animalService.getAllAnimals();
    res.json(animals);
  } catch (error) {
    console.error("Error fetching animals:", error.message);
    res.status(500).json({
      error: "Failed to fetch animals",
      details: error.message,
    });
  }
});
router.get("/stats/continent", async (req, res) => {
  try {
    const stats = await animalService.getContinentStats();
    res.json(stats);
  } catch (error) {
    console.error("Error fetching continent stats:", error.message);
    res.status(500).json({
      error: "Failed to fetch continent statistics",
      details: error.message,
    });
  }
});

// GET /api/animals/:id - Ett specifikt djur
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await animalService.getAnimalById(id);

    if (!animal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    res.json(animal);
  } catch (error) {
    console.error("Error fetching animal:", error.message);
    res.status(500).json({
      error: "Failed to fetch animal",
      details: error.message,
    });
  }
});

export default router;
