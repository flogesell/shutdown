const express = require("express");
const app = express();
const cors = require("cors");

async function main() {
  const { PORT } = process.env;

  app.use(cors());
  app.options('*', cors());

  const Hello = require("./routes/hello");
  app.use("/api/hello", Hello);

  const port = PORT || 4000;

  app.listen(port, function () {
  });
}

main().catch(err => console.log(err));