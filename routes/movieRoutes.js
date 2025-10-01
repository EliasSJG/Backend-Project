import { Router } from "express";
import {
  getAllMovies,
  getAverageRating,
  getMovieById,
  getMoviesByDirector,
  getMoviesByGenre,
  getMoviesByYear,
  getTopMovies,
} from "../services/movieService.js";
import { asyncHandler } from "../utils/dry-helper.js";
//Routes/url for movies

const router = Router();

//varje route har en asyncHandler som hanterar asynkrona anrop och fångar upp eventuella fel
//sedan skickar den svaret från anropet som json så att vi kan se det på webbläsarern
//avnänder funktierna från services filen

// Get all movies
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const movies = await getAllMovies();
    res.json(movies);
  })
);

// Get movies by director ID
router.get(
  "/director/:id",
  asyncHandler(async (req, res) => {
    const movies = await getMoviesByDirector(req.params.id);
    res.json(movies);
  })
);

// Get movies by genre

router.get(
  "/genre/:genre",
  asyncHandler(async (req, res) => {
    const movies = await getMoviesByGenre(req.params.genre);
    res.json(movies);
  })
);
// Get movies by year
router.get(
  "/year/:year",
  asyncHandler(async (req, res) => {
    const movies = await getMoviesByYear(req.params.year);
    res.json(movies);
  })
);
// Get top movies
router.get(
  "/top/:count",
  asyncHandler(async (req, res) => {
    const movies = await getTopMovies(req.params.count);
    res.json(movies);
  })
);
//get average rating for all movies
router.get(
  "/average-rating",
  asyncHandler(async (req, res) => {
    const movies = await getAverageRating(req.params.count);
    res.json(movies);
  })
);
// Get movie by ID
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const movie = await getMovieById(req.params.id);
    if (!movie) return res.status(404).json({ error: "Movie not found" });
    res.json(movie);
  })
);

export default router;
