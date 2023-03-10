const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;

require("./config/mongoose.config");

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

require("./routes/authors.routes")(app);

app.listen(port, () => console.log("Connection established to the server"));
