const express = require("express");
const inventoryFile = __dirname + "/../../models/inventory.json";
const inventory = require(inventoryFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const inventoryList = inventory.map(item => {
    return {
      id: helper.getNewId(),
      name: item.name,
      description: item.description,
      lastOrder: item.lastOrder,
      city: item.city,
      country: item.country,
      quantity: item.quantity,
      status: item.status,
      orderedBy: item.orderedBy,
      referenceNumber: item.referenceNumber,
      categories: item.categories
    };
  });
  res.json(inventoryList);
});

router.get("/:id", (req, res) => {
  const found = inventory.some(item => item.id === req.params.id);
  if (found) {
    res.json(inventory.filter(item => item.id === req.params.id));
  } else {
    res.status(404).json({
      errorMessage: `Item with ID: ${req.params.id} not found`
    });
  }
});

module.exports = router;
