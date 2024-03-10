import { Request, Response } from "express"
import { GetProdutoUseCase } from "./GetProdutoUseCase"

export class GetProdutoController {
  constructor(private getProdutoUseCase: GetProdutoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    try {
      const produto = await this.getProdutoUseCase.execute(id)
      return response.status(200).json(produto)
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
