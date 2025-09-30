import { Router } from "express";
import {
  getAllDirectors,
  getDirectorById,
  getTopDirectorsByAwards,
} from "../services/directorService.js";
import { asyncHandler } from "../utils/dry-helper.js";
//Routes/url for directors

const router = Router();

//varje route har en asyncHandler som hanterar asynkrona anrop och fångar upp eventuella fel
//sedan skickar den svaret från anropet som json så att vi kan se det på webbläsarern
//avnänder funktierna från services filen
// Ge alla directors
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const directors = await getAllDirectors();
    res.json(directors);
  })
);

//ge directors by top awards
router.get(
  "/awards/top/:count",
  asyncHandler(async (req, res) => {
    const directors = await getTopDirectorsByAwards(req.params.count);
    res.json(directors);
  })
);
//ge director by id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const director = await getDirectorById(req.params.id);
    if (!director) return res.status(404).json({ error: "Director not found" });
    res.json(director);
  })
);

export default router;
