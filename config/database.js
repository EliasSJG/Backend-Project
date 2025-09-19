import mysql from "mysql2/promise";

let connection;

export const getConnection = async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "abc123",
      database: "animals_db",
    });
  }
  return connection;
};
