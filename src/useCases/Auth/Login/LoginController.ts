import { Request, Response } from "express"
import { LoginUseCase } from "./LoginUseCase"

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { cpf, senha } = request.body

    try {
      const token = await this.loginUseCase.execute(cpf, senha)

      return response.status(200).json(token)
    } catch (error) {
      return response.status(401).json({
        message: error.message || "Unexpected error.",
      })
    }
  }
}
