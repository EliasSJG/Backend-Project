// import express from "express";

// const app = express();
// const PORT = 3000;

// const routes = {
//   "/": ["Home", "Home", "This is the home page"],
//   "/about": ["About", "About us", "This is the about page"],
//   "/contact": ["Contact", "Contact us", "This is the contact page"],
// };

// const layout = (title, header, content) => `
//   <!DOCTYPE html>
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>${title}</title>
//     </head>
//     <body>
//       <h1>${header}</h1>
//       <p>${content}</p>
//     </body>
//   </html>
// `;

// app.use((req, res, next) => {
//   console.log("------ Incoming Request ------");
//   console.log("Method:", req.method);
//   console.log("URL:", req.url);
//   console.log("-----------------------------");
//   debugger;
//   next();
// });

// for (const path in routes) {
//   app.get(path, (req, res) => {
//     res.status(200).send(layout(...routes[path]));
//   });
// }

// app.use((req, res) => {
//   res.status(404).send(layout("404", "Error 404", "Page couldn’t be found"));
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });

import express from "express";
import animalsRouter from "./routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/animals", animalsRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the APIjjjjnjjn!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
