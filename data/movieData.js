import { query } from "../utils/dry-helper.js";

//movie data pratar med min sql database

//Hämtar alla movies
export const findAll = async () => query("SELECT * FROM movies");

//Hämtar movie med specifikt id
export const findById = async (id) =>
  (await query("SELECT * FROM movies WHERE id = ?", [id]))[0];

//Hämtar movies av specifik director
export const findByDirectorId = async (directorId) =>
  query("SELECT * FROM movies WHERE director_id = ?", [directorId]);

//Hämtar movies av specifik genre
export const findByGenre = async (genre) =>
  query("SELECT * FROM movies WHERE genre = ?", [genre]);

//Hämtar movies från specifikt år
export const findByYear = async (year) =>
  query("SELECT * FROM movies WHERE release_year = ?", [year]);

//Hämtar top movies baserat på rating(speciferea antal movies)
export const findTopMovies = async (count) =>
  query("SELECT * FROM movies ORDER BY rating DESC LIMIT ?", [count]);
