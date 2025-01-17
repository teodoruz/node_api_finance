import Deposit from "../models/deposit-model";
import { ProfileService } from "./user-service";

export class DepositService {
    private profileService: ProfileService;

    constructor() {
        this.profileService = new ProfileService();
    }

    async createDeposit(
        clientId: number,
        depositValue: number,
        operationDate: Date
    ) {
        if (depositValue <= 0) throw new Error("Invalid deposit value");

        await this.profileService.updateBalance(clientId, depositValue);
        return await Deposit.create({ clientId, depositValue, operationDate });
    }
}
