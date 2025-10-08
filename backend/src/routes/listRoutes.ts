import express from "express";
import {
  createList,
  getLists,
  getListById,
  updateList,
  deleteList
} from "../controllers/listController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/create")
  .post(protect, createList);

router.route("/get")
  .get(protect, getLists);

router.route("/update/:id").put(protect, updateList);

router.route("/getbyid/:id").get(protect, getListById);

router.route("/delete/:id").delete(protect, deleteList);

export default router;
