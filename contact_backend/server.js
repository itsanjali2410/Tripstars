// server.js or index.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./Sendmail");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/contact", sendMail);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
