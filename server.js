import express from "express";
import directorRouter from "./routes/directorRoutes.js";
import movieRouter from "./routes/movieRoutes.js";

//skapar upp express servern
const app = express();
const PORT = process.env.PORT || 3000;

//kopplar routern och routes
app.use("/api/directors", directorRouter);
app.use("/api/movies", movieRouter);

//root route
app.get("/", (req, res) => {
  res.send("Welcome to the Movies API!");
});

//Global felhantering
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong" });
});

//startar servern, console log
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
