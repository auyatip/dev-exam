const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
  {
    collection: "item_data",
  }
);
module.exports = mongoose.model("item_data", itemSchema);
