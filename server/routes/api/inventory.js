const express = require("express");
const inventoryFile = __dirname + "/../../models/inventory.json";
const inventory = require(inventoryFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const inventoryList = inventory.map(item => {
    return {
      name: item.name,
      description: item.description,
      lastOrder: item.lastOrder,
      city: item.city,
      country: item.country,
      quantity: item.quantity,
      status: item.status
    };
  });
  res.json(inventoryList);
  //   console.log(inventoryList);
});

module.exports = router;
