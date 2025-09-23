CREATE DATABASE IF NOT EXISTS animals_db;
USE animals_db;


DROP TABLE IF EXISTS animals;


CREATE TABLE animals (
  id INT AUTO_INCREMENT PRIMARY KEY,
  namn VARCHAR(255) NOT NULL,
  färg VARCHAR(100) NOT NULL,
  vikt INT NOT NULL COMMENT 'Vikt i kg',
  kontinent VARCHAR(100) NOT NULL
);


INSERT INTO animals (namn, färg, vikt, kontinent) VALUES
  ('Lejon', 'Gul', 190, 'Afrika'),
  ('Afrikansk elefant', 'Grå', 6000, 'Afrika'),
  ('Giraff', 'Gul med bruna fläckar', 1200, 'Afrika'),
  ('Zebra', 'Vit med svarta ränder', 300, 'Afrika'),
  ('Gepard', 'Gul med svarta fläckar', 72, 'Afrika'),
 
  ('Tiger', 'Orange med svarta ränder', 220, 'Asien'),
  ('Jättepanda', 'Vit och svart', 100, 'Asien'),
  ('Orangutang', 'Rödbrun', 75, 'Asien'),
  ('Konung kobra', 'Brun', 6, 'Asien'),
  ('Snöleopard', 'Vit med svarta fläckar', 55, 'Asien'),
 
  ('Brunbjörn', 'Brun', 300, 'Europa'),
  ('Varg', 'Grå', 45, 'Europa'),
  ('Ren', 'Brun', 180, 'Europa'),
 
  ('Grizzlybjörn', 'Brun', 400, 'Nordamerika'),
  ('Bisonoxe', 'Brun', 900, 'Nordamerika'),
  ('Tvättbjörn', 'Grå och svart', 8, 'Nordamerika'),
 
  ('Jaguar', 'Gul med svarta fläckar', 95, 'Sydamerika'),
  ('Llama', 'Vit', 130, 'Sydamerika'),
 
  ('Röd känguru', 'Rödbrun', 85, 'Australien'),
  ('Kejsarpingvin', 'Svart och vit', 23, 'Antarktis');
