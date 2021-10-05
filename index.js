const { SSL_OP_TLS_BLOCK_PADDING_BUG } = require("constants");
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "static")));
app.use("/", require(path.join(__dirname, "routes/blog.js")));

app.get("/", (req, res) => {
  const userData = 45;
  console.log("Hello");
  console.log(userData);
  return userData;
});
app.get("/data",(req,res)=>{
 res.send("Hello");
});
app.listen(port, () => {
  console.log(`blog app listening at http://localhost:${port}`);
});
