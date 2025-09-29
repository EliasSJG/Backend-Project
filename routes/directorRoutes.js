import { Router } from "express";
import {
  getAllDirectors,
  getDirectorById,
  getTopDirectorsByMovies,
  getTopDirectorsByAwards,
} from "../services/directorService.js";
import { asyncHandler } from "../utils/dry-helper.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const directors = await getAllDirectors();
    res.json(directors);
  })
);

router.get(
  "/topmovies/:count",
  asyncHandler(async (req, res) => {
    const directors = await getTopDirectorsByMovies(req.params.count);
    res.json(directors);
  })
);

router.get(
  "/awards/top/:count",
  asyncHandler(async (req, res) => {
    const directors = await getTopDirectorsByAwards(req.params.count);
    res.json(directors);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const director = await getDirectorById(req.params.id);
    if (!director) return res.status(404).json({ error: "Director not found" });
    res.json(director);
  })
);

export default router;
