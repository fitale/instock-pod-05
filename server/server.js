const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

const inventoryRoute = require("./routes/api/inventory");
app.use("/api/inventory", inventoryRoute);

const warehousesRoute = require('./routes/api/warehouses');
app.use("/api/warehouses", warehousesRoute);

app.listen(5000, function() {
  console.log("server is running on port 5000");
});
