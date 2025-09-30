import { getConnection } from "../config/database.js";

//används för att få kontakt med databasen, skapar upp en fråga som kommer från data filerna och sedan får tillbaka resultatet
export const query = async (sql, params = []) => {
  const db = await getConnection();
  const [rows] = await db.execute(sql, params);
  return rows;
};
//används för att lägga till displayName till i service filerna
export const withDisplayName = (item, label, value) => ({
  ...item,
  displayName: `${item[label]} (${value})`,
});

//används för att hantera asynkroona anrop och fånga upp eventuella fel
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
