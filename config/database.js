import mysql from "mysql2/promise";
import dotenv from "dotenv";

//laddar env
dotenv.config();

let connection;

//skapar upp en connection till databasen
export const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
  }
  return connection;
};
