import { Request, Response } from "express"
import { CreateClienteUseCase } from "./CreateClienteUseCase"

export class CreateClienteController {
  constructor(private createClienteUseCase: CreateClienteUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      email,
      cpf,
      senha,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
    } = request.body

    try {
      await this.createClienteUseCase.execute({
        nome,
        email,
        cpf,
        senha,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        cep,
      })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
