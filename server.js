import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = Number(process.env.PORT || 3000);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`todo-list listening on ${port}`);
});
