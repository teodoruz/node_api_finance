import { ProfileService } from "../service/user-service";
import { Request, Response } from "express";

class UserController {

    private userService: ProfileService;

    constructor() {
        this.userService = new ProfileService();
    }

    public async createProfile(req: Request, res: Response): Promise<Response> {
        try {
            const profile = await this.userService.createProfile(req.body);
            return res.status(201).json(profile);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Failed to create profile", error });
        }
    }

    public async getProfileBalance(req: Request, res: Response): Promise<Response> {
        try {
            const profile = await this.userService.getProfileBalance(
                Number(req.params.id)
            );
            if (!profile) {
                return res.status(404).json({ message: "Profile not found" });
            }
            return res.status(200).json({ balance: profile.balance });
        } catch (error) {
            return res.status(500).json({ message: "Failed to get balance", error });
        }
    }
}
export default UserController;


