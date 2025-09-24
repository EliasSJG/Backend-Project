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
