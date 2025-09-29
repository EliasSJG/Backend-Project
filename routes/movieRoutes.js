import { Router } from "express";
import {
  getAllMovies,
  getMovieById,
  getMoviesByDirector,
  getMoviesByGenre,
  getMoviesByYear,
  getTopMovies,
} from "../services/movieService.js";
import { asyncHandler } from "../utils/dry-helper.js";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const movies = await getAllMovies();
    res.json(movies);
  })
);

router.get(
  "/director/:id",
  asyncHandler(async (req, res) => {
    const movies = await getMoviesByDirector(req.params.id);
    res.json(movies);
  })
);

router.get(
  "/genre/:genre",
  asyncHandler(async (req, res) => {
    const movies = await getMoviesByGenre(req.params.genre);
    res.json(movies);
  })
);

router.get(
  "/year/:year",
  asyncHandler(async (req, res) => {
    const movies = await getMoviesByYear(req.params.year);
    res.json(movies);
  })
);

router.get(
  "/top/:count",
  asyncHandler(async (req, res) => {
    const movies = await getTopMovies(req.params.count);
    res.json(movies);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const movie = await getMovieById(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  })
);

export default router;
