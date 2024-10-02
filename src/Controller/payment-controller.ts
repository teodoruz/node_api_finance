import { Request, Response } from "express";
import { PaymentService } from "../service/payment-service";

export class PaymentController {
    private paymentService: PaymentService;

    constructor() {
        this.paymentService = new PaymentService();
    }

    public async createPayment(req: Request, res: Response): Promise<Response> {
        try {
            const payment = await this.paymentService.createPayment(req.body);
            return res.status(201).json(payment);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Falha ao criar pagamento", error });
        }
    }

    public async getPayments(req: Request, res: Response): Promise<Response> {
        try {
            const payments = await this.paymentService.getPayments();
            return res.status(200).json(payments);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Fail", error });
        }
    }
}
export default PaymentController;
