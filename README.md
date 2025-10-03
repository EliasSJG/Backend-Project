# 🎬 DirectorsWorld

A backend application that lets you explore directors and their movies.

---

## ✨ Features
- Fetch information about directors  
- Fetch information about movies  
- Get specific metadata (e.g., top movies, average rating)  

---

## 🛠️ Tech Stack
- Node.js
- Express
- MySQL2


~~~
## 📁 Project Folder Structure
│──📂config/
│   ├── 📄database.js
│──📂data/
│   ├── 📄directorsData.js
│   ├── 📄movieData.js
│──📂routes/
│   ├── 📄directorsRoutes.js
│   ├── 📄movieRoutes.js
│──📂services/
│   ├── 📄directorsService.js
│   ├── 📄movieService.js
│──📂utils/
│   ├── 📄dry-helper.js
│──📄directors.sql
│──📄server.js

~~~

## ⚙️ Installation

1. **Clone the repository**  
`git clone <repo-url>`  
`cd project`

2. **Install dependencies**  
`npm install`

3. **Create a `.env` file in the root with your database credentials**  
DB_HOST=localhost  
DB_PORT=3306  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=movies_db  
PORT=3000  

4. **Import the database**  
Run the SQL script `directors.sql` to create the necessary tables (`movies` and `directors`).

---

## 🎬 API Endpoints

### Directors (/api/directors)
- `GET /api/directors/`  Fetch all directors  
- `GET /api/directors/:id`  Fetch a specific director by ID  
- `GET /api/directors/awards/top/:count`  Fetch directors with the most awards  

### Movies (/api/movies)
- `GET /api/movies/`  Fetch all movies  
- `GET /api/movies/:id`  Fetch a specific movie by ID  
- `GET /api/movies/director/:id`  Fetch all movies by a specific director  
- `GET /api/movies/genre/:genre` Fetch all movies of a specific genre  
- `GET /api/movies/year/:year`  Fetch all movies from a specific year  
- `GET /api/movies/top/:count`  Fetch the top-rated movies  
- `GET /api/movies/average-rating`  Fetch the average rating for all movies  

---

## 📄 License
This project is licensed under the MIT License.
