const express = require("express");
const app = express();
const cors = require("cors");

global.__basedir = __dirname;

async function main() {
  const { PORT } = process.env;

  app.use(cors());
  app.options('*', cors());

  const Auth = require("./routes/auth");
  app.use("/api/auth", Auth);

  const port = PORT || 4000;

  app.listen(port, function () {
    console.log("Server listening on port " + port);
  });
}

main().catch(err => console.log(err));