import { initServer } from "./app";
import { config } from "dotenv";
config();

async function init() {
  const app = await initServer();
  app.listen(8000, () => {
    console.log("Server started at PORT:8000");
  });
}

init();
