import { Router } from "express";
import OrderController from "../controllers/orders";
import Authentication from "../middlewares/auth";
import validator from "../middlewares/validator";
import { validateOrder } from "../validations/orders";

const router = Router();

const {
  createOrder, getOrders, updateOrder, deleteOrder
} = OrderController;
const { verifyToken } = Authentication;

router.post("/create", validator(validateOrder), verifyToken, createOrder);

router.get("/", verifyToken, getOrders);

router.patch("/update/:orderId", verifyToken, updateOrder);

router.delete("/delete/:orderId", verifyToken, deleteOrder);

export default router;
