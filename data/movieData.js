import { query } from "../utils/dry-helper.js";

export const findAll = async () => query("SELECT * FROM movies");

export const findById = async (id) =>
  (await query("SELECT * FROM movies WHERE id = ?", [id]))[0];

export const findByDirectorId = async (directorId) =>
  query("SELECT * FROM movies WHERE director_id = ?", [directorId]);

export const findByGenre = async (genre) =>
  query("SELECT * FROM movies WHERE genre = ?", [genre]);

export const findByYear = async (year) =>
  query("SELECT * FROM movies WHERE release_year = ?", [year]);

export const findTopMovies = async (count) =>
  query("SELECT * FROM movies ORDER BY rating DESC LIMIT ?", [count]);
