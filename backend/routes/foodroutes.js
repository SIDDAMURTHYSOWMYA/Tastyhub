import express from "express";
import FoodItem from "../models/FoodItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const foods = await FoodItem.find();
  res.json(foods);
});

router.post("/", async (req, res) => {
  const food = new FoodItem(req.body);
  await food.save();
  res.status(201).json(food);
});

export default router;
