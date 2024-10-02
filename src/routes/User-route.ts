import { Router } from "express";
import UserController from "../Controller/User-controller";

const profileRoutes = Router();
const profileController = new UserController();

profileRoutes.post("/profiles", (req, res) =>
    profileController.createProfile(req, res)
);
profileRoutes.get("/profiles/:id/balance", (req, res) =>
    profileController.getProfileBalance(req, res)
);

export default profileRoutes;
