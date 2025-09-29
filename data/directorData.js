import { query } from "../utils/dry-helper.js";

export const findAll = async () => query("SELECT * FROM directors");

export const findById = async (id) =>
  (await query("SELECT * FROM directors WHERE id = ?", [id]))[0];

export const findTopByMovies = async (count) =>
  query("SELECT * FROM directors ORDER BY total_movies DESC LIMIT ?", [count]);

export const findTopByAwards = async (count) =>
  query("SELECT * FROM directors ORDER BY awards_won DESC LIMIT ?", [count]);
