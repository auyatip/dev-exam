const mongoose = require("mongoose");
const itemModel = require("../models/itemModel");

//GET ALL
exports.getItem = async (req, res) => {
  try {
    const itemData = await itemModel.find({});
    if (!itemData) {
      return res.status(400).json({
        success: false,
        message: "No Data ",
      });
    }
    return res.status(200).json({
      success: true,
      message: "OK",
      itemData,
    });
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "can't get item",
      error,
    });
  }
};

exports.getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const itemData = await itemModel.findById(id);
    if (!itemData) {
      return res.status(404).json({
        success: false,
        message: "not OK",
      });
    }
    return res.status(200).json({
      success: true,
      message: "OK",
      itemData,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "can't get item by ID",
      error,
    });
  }
};

exports.insertItem = async (req, res) => {
  try {
    const { name, price, quantity, description } = req.body;
    const newItem = new itemModel({
      name,
      price,
      quantity,
      description,
    });
    await newItem.save();
    return res.status(200).json({
      success: true,
      message: "OK",
      newItem,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "error",
      error,
    });
  }
};

exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity, description } = req.body;

    const item = await itemModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "OK",
      item,
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "error",
      error,
    });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await itemModel.findByIdAndDelete(id);
    if (item)
      return res.status(200).json({
        success: true,
        message: "Item has deleted!",
      });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Can not Delete",
      error,
    });
  }
};
