import { query } from "../utils/dry-helper.js";

//director data pratar med min sql database
//använder query funktionen från dry-helper.js för att få kontakt med databasen

//Hämtar alla directors
export const findAll = async () => query("SELECT * FROM directors");

//Hämtar director med specifikt id
export const findById = async (id) =>
  (await query("SELECT * FROM directors WHERE id = ?", [id]))[0];

//Hämtar director med flest rewards(speciferea antal directors)
export const findTopByAwards = async (count) =>
  query("SELECT * FROM directors ORDER BY awards_won DESC LIMIT ?", [count]);
