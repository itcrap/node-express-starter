require("dotenv").config();
const express = require("express");
const {
  log,
  expressLogger,
  expressErrorLogger,
} = require("../winston.logger.js");

const config = process.env;

log.info("Test info message from index.js");

const app = express();
app.set("port", config.API_PORT);
app.set("host", config.API_HOST);

app.use(expressLogger);
// app.use(router)
app.use(expressErrorLogger);

app.get("/", (req, res) => res.send("Hello World"));

app.listen(app.get("port"), app.get("host"), () =>
  log.info(`Example app listening on port ${config.API_PORT}`)
);
