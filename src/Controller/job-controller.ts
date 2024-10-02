import { Request, Response } from "express";
import { JobService } from "../service/job-service";

export class JobController {
    private jobService: JobService;

    constructor() {
        this.jobService = new JobService();
    }

    public async getUnpaidJobsSum(
        req: Request,
        res: Response
    ): Promise<Response> {
        try {
            const sum = await this.jobService.getUnpaidJobsSum();
            return res.status(200).json({ totalUnpaid: sum });
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Failha", error });
        }
    }

    public async getJobsByContract(
        req: Request,
        res: Response
    ): Promise<Response> {
        try {
            const jobs = await this.jobService.getJobsByContract(
                Number(req.params.contractId)
            );
            return res.status(200).json(jobs);
        } catch (error) {
            return res
                .status(500)
                .json({ message: "Failed to fetch jobs by contract", error });
        }
    }
    async createJob(req: Request, res: Response) {
        try {
            // Obtém os dados da requisição
            const data = req.body;

            // Chama o método do serviço para criar o Job
            const newJob = await this.jobService.createJob(data);

            // Retorna uma resposta de sucesso
            return res.status(201).json({
                success: true,
                message: "Job created successfully.",
                job: newJob,
            });
        } catch (error) {
            // Em caso de erro, retorna uma resposta de erro
            return res.status(400).json({
                success: false
            });
        }
    }
}
