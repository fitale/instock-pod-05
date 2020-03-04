const express = require("express");
const warehousesFile = __dirname + "/../../models/warehouses.json";
const warehouses = warehousesFile;
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const warehousesList = warehouses.map(item => {
    return {
      id: helper.getNewId(),
      name: item.name,
      address: item.address,
      contact: item.contact,
      contact_title: item.contact_title,
      phone: item.phone,
      email: item.email,
      categories: item.categories
    };
  });
  res.json(warehousesList);
  console.log(warehousesList);
});

router.get("/:id", (req, res) => {
  const found = warehouses.some(warehouse => warehouse.id === req.params.id);
  if (found) {
    res.json(warehouses.filter(warehouse => warehouse.id === req.params.id));
  } else {
    res
      .status(404)
      .json({ errorMessage: `Warehouse with ID: ${req.params.id} not found` });
  }
});

module.exports = router;
