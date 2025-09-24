import { Router } from "express";
import {
  getAllDirectors,
  getDirectorById,
} from "../services/directorService.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const directors = await getAllDirectors();
    res.json(directors);
  } catch (err) {
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const director = await getDirectorById(req.params.id);
    if (!director) return res.status(404).json({ error: "Director not found" });
    res.json(director);
  } catch (err) {
    next(err);
  }
});
export default router;
