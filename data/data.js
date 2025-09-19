import { getConnection } from "../config/database.js";

// Pure data access - bara SQL queries
export const findAll = async () => {
  const db = await getConnection();
  const [rows] = await db.execute(
    "SELECT id, namn, färg, vikt, kontinent FROM animals"
  );
  return rows;
};

export const findById = async (id) => {
  const db = await getConnection();
  const [rows] = await db.execute(
    "SELECT id, namn, färg, vikt, kontinent FROM animals WHERE id = ?",
    [id]
  );
  return rows[0];
};

export const getStatsByContinent = async () => {
  const db = await getConnection();
  const [rows] = await db.execute(`
    SELECT kontinent, COUNT(*) as antal
    FROM animals
    GROUP BY kontinent
    ORDER BY antal DESC
  `);
  return rows;
};
