import { getConnection } from "../config/database.js";

export const query = async (sql, params = []) => {
  const db = await getConnection();
  const [rows] = await db.execute(sql, params);
  return rows;
};

export const withDisplayName = (item, label, value) => ({
  ...item,
  displayName: `${item[label]} (${value})`,
});

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
