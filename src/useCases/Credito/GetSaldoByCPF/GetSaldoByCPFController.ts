import { Request, Response } from "express"
import { GetSaldoByCPFUseCase } from "./GetSaldoByCPFUseCase"

export class GetSaldoByCPFController {
  constructor(private getSaldoByCPFUseCase: GetSaldoByCPFUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params

    try {
      const saldo = await this.getSaldoByCPFUseCase.execute(cpf)

      return response.status(200).json(saldo)
    } catch (error) {
      return response.status(402).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
