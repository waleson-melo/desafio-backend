import { Request, Response } from "express"
import { ListProdutoUseCase } from "./ListProdutoUseCase"

export class ListProdutoController {
  constructor(private listProdutoUseCase: ListProdutoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const produtos = await this.listProdutoUseCase.execute()

      return response.status(200).json(produtos)
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
