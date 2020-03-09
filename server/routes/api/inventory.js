const express = require("express");
const inventoryFile = __dirname + "/../../models/inventory.json";
const inventory = require(inventoryFile);
const helper = require("../../helper/helper");
const router = express.Router();

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
  // console.log("New Product: ", newInventory);
  // if (!newInventory.name || !newInventory.description) {
  //   return res.status(400).json({
  //     errorMessage: "Please provide all the required fields."
  //   });
  // }
  // console.log(inventory, "INVENTORY^^^");
  inventory.push(newInventory);
  helper.writeJSONFile(inventoryFile, inventory);
  res.json(inventory);
});
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
