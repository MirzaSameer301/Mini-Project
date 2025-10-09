import { Request, Response } from "express";
import { List } from "../models/listModel";

// Create new list
export const createList = async (req: any, res: Response) => {
  try {
    const { title, description } = req.body;
    const newList = await List.create({
      title,
      description,
      createdBy: req.user._id
    });
    res.status(201).json(newList);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get all lists for logged-in user
export const getLists = async (req: any, res: Response) => {
  try {
    const lists = await List.find({ createdBy: req.user._id });
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Get single list by ID
export const getListById = async (req: any, res: Response) => {
  try {
    const list = await List.findOne({ _id: req.params.id, createdBy: req.user._id });
    if (!list) return res.status(404).json({ message: "List not found" });
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Update list
export const updateList = async (req: any, res: Response) => {
  try {
    const { title, description } = req.body;
    const list = await List.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      { title, description },
      { new: true }
    );
    if (!list) return res.status(404).json({ message: "List not found" });
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Delete list
export const deleteList = async (req: any, res: Response) => {
  try {
    const list = await List.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user._id
    });
    if (!list) return res.status(404).json({ message: "List not found" });
    res.json({ message: "List deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
