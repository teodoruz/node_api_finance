import { Router } from "express";
import { ContractController } from "../Controller/contract-controller";

const contractRoutes = Router();
const contractController = new ContractController();

contractRoutes.post("/contracts", (req, res) =>
    contractController.createContract(req, res)
);
contractRoutes.get("/contracts", (req, res) =>
    contractController.getContracts(req, res)
);

export default contractRoutes;
