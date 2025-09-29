import { getConnection } from "../config/database.js";

export const findAll = async () => {
  const db = await getConnection();
  const [rows] = await db.execute("SELECT * FROM movies");
  return rows;
};

export const findById = async (id) => {
  const db = await getConnection();
  const [rows] = await db.execute("SELECT * FROM movies WHERE id = ?", [id]);
  return rows[0];
};

export const findByDirectorId = async (directorId) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    "SELECT * FROM movies WHERE director_id = ?",
    [directorId]
  );
  return rows;
};

export const findByGenre = async (genre) => {
  const db = await getConnection();
  const [rows] = await db.execute("SELECT * FROM movies WHERE genre = ?", [
    genre,
  ]);
  return rows;
};

export const findByYear = async (year) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    "SELECT * FROM movies WHERE release_year = ?",
    [year]
  );
  return rows;
};

export const findTopMovies = async (count) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    "SELECT * FROM movies ORDER BY rating DESC LIMIT ?",
    [count]
  );
  return rows;
};
