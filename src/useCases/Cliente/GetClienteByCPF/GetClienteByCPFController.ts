import { Request, Response } from "express"
import { GetClienteByCPFUseCase } from "./GetClienteByCPFUseCase"

export class GetClienteByCPFController {
  constructor(private getClienteByCPFUseCase: GetClienteByCPFUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.params
    try {
      const cliente = await this.getClienteByCPFUseCase.execute(cpf)
      return response.status(200).json(cliente)
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
