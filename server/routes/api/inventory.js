const express = require("express");
const inventoryFile = __dirname + "/../../models/inventory.json";
const inventory = require(inventoryFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(inventory);
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

router.delete("/:id", (req, res) => {
  const found = inventory.some(item => item.id === req.params.id);
  if (found) {
    const itemAfterDelete = inventory.filter(item => item.id !== req.params.id);
    helper.writeJSONFile(inventoryFile, itemAfterDelete);
    res.json({
      msg: `Inventory item with ID: ${req.params.id} has been deleted`,
      inventory: itemAfterDelete
    });
  } else {
    res.status(404).json({
      errorMessage: `Inventory item with ID: ${req.params.id} not found`
    });
  }
});

router.post("/", (req, res) => {
  const newInventory = {
    id: helper.getNewId(),
    name: req.body.name,
    description: req.body.description,
    lastOrder: req.body.lastOrder,
    city: req.body.city,
    country: req.body.country,
    quantity: req.body.quantity,
    status: req.body.status,
    orderedBy: req.body.orderedBy,
    referenceNumber: "JK2020FD7811201",
    categories: req.body.categories
  };
  inventory.push(newInventory);
  helper.writeJSONFile(inventoryFile, inventory);
  res.json(inventory);
});

module.exports = router;
