const express = require("express");
require("dotenv").config();
require("./config/db.config")();

const app = express();

app.use(express.json());

const coffeeRouter = require("./routes/coffee.routes");
app.use("/coffee-inventory", coffeeRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server up and ruining #d&d - port: ${process.env.PORT}`);
});
