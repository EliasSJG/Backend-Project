import express from "express";
import directorRouter from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/directors", directorRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Directors API!");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Something went wrong" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
