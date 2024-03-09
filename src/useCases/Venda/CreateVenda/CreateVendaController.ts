import { Request, Response } from "express"
import { CreateVendaUseCase } from "./CreateVendaUseCase"

export class CreateVendaController {
  constructor(private createVendaUseCase: CreateVendaUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cliente, produto, quantidade, valor, parcelas } = request.body

    try {
      await this.createVendaUseCase.execute({
        cliente,
        produto,
        quantidade,
        valor,
        parcelas,
      })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
