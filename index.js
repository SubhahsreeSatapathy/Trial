const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("constants");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.get("/", (req, res) => {
  const userData = 45;
  return userData;
});

app.listen(port, () => {
  console.log(`blog app listening at http://localhost:${port}`);
});
