import { Router } from "express";
import { DepositController } from "../Controller/deposit-controller";

const depositRoutes = Router();
const depositController = new DepositController();

depositRoutes.post("/deposits", (req, res) =>
    depositController.createDeposit(req, res)
);

export default depositRoutes;
