CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

DROP TABLE IF EXISTS directors;

CREATE TABLE directors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  birth_year INT,
  nationality VARCHAR(100),
  debut_year INT,
  total_movies INT DEFAULT 0,
  awards_won INT DEFAULT 0,
  active BOOLEAN DEFAULT TRUE
);

INSERT INTO directors (name, birth_year, nationality, debut_year, total_movies, awards_won, active) VALUES
  ('Steven Spielberg', 1946, 'USA', 1971, 33, 50, TRUE),
  ('Christopher Nolan', 1970, 'UK', 1998, 11, 25, TRUE),
  ('Quentin Tarantino', 1963, 'USA', 1992, 10, 20, TRUE),
  ('Martin Scorsese', 1942, 'USA', 1967, 25, 70, TRUE);

