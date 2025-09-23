import { getConnection } from "../config/database.js";

export const findAll = async () => {
  const db = await getConnection();
  const [rows] = await db.execute("SELECT * FROM directors");
  return rows;
};

export const findById = async (id) => {
  const db = await getConnection();
  const [rows] = await db.execute("SELECT * FROM directors WHERE id = ?", [id]);
  return rows[0];
};
