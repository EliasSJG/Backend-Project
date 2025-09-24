import { Router } from "express";
import {
  getAllMovies,
  getMovieById,
  getMoviesByDirector,
} from "../services/movieService.js";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const movie = await getMovieById(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  } catch (err) {
    next(err);
  }
});

router.get("/director/:id", async (req, res, next) => {
  try {
    const movies = await getMoviesByDirector(req.params.id);
    res.json(movies);
  } catch (err) {
    next(err);
  }
});

export default router;
