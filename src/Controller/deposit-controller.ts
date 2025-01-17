import { Request, Response } from "express";
import { DepositService } from "../service/deposit-service";

export class DepositController {
    private depositService: DepositService;

    constructor() {
        this.depositService = new DepositService();
    }

    public async createDeposit(req: Request, res: Response): Promise<Response> {
        try {
            const { clientId, depositValue, operationDate } = req.body;
            const deposit = await this.depositService.createDeposit(
                clientId,
                depositValue,
                operationDate
            );
            return res.status(201).json(deposit);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "falha ao criar deposito", error });
        }
    }
}
