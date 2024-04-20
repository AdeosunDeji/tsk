import { Router } from "express";
import userRoutes from "./userRoutes";
import orderRoutes from "./orderRoutes";

const router = Router();

router.use("/users", userRoutes);
router.use("/orders", orderRoutes);

export default router;
