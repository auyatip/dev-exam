const express = require("express");
const {
  getItem,
  getItemById,
  insertItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const router = express.Router();

router.get("/get_item", getItem);

router.get("/get_item_by_id/:id", getItemById);

router.post("/insert_item", insertItem);

router.put("/update_item/:id", updateItem);

router.delete("/delete/:id", deleteItem);

module.exports = router;
