CREATE DATABASE IF NOT EXISTS movies_db;
USE movies_db;

-- Ta bort gamla tabeller i rätt ordning (movies först pga foreign key)
DROP TABLE IF EXISTS movies;
DROP TABLE IF EXISTS directors;

-- Tabell för directors
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

-- Tabell för movies
CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  release_year INT,
  genre VARCHAR(100),
  box_office BIGINT,
  rating DECIMAL(3,1),
  director_id INT,
  FOREIGN KEY (director_id) REFERENCES directors(id) ON DELETE CASCADE
);

INSERT INTO directors (name, birth_year, nationality, debut_year, total_movies, awards_won, active) VALUES
  ('Steven Spielberg', 1946, 'USA', 1971, 33, 50, TRUE),
  ('Christopher Nolan', 1970, 'UK', 1998, 11, 25, TRUE),
  ('Quentin Tarantino', 1963, 'USA', 1992, 10, 20, TRUE),
  ('Martin Scorsese', 1942, 'USA', 1967, 25, 70, TRUE);

INSERT INTO movies (title, release_year, genre, box_office, rating, director_id) VALUES
  ('Jurassic Park', 1993, 'Adventure', 1040000000, 8.1, 1),
  ('E.T. the Extra-Terrestrial', 1982, 'Sci-Fi', 792000000, 7.9, 1),
  ('Inception', 2010, 'Sci-Fi', 836000000, 8.8, 2),
  ('The Dark Knight', 2008, 'Action', 1005000000, 9.0, 2),
  ('Pulp Fiction', 1994, 'Crime', 213000000, 8.9, 3),
  ('The Irishman', 2019, 'Crime', 8000000, 7.8, 4);