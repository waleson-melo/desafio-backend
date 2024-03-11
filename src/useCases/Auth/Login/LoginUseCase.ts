import { IAuthRepository } from "../../../repositories/IAuthRepository"

export class LoginUseCase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(cpf: string, senha: string) {
    const token = await this.authRepository.loginCpfSenha(cpf, senha)

    if (!token) {
      throw new Error("Invalid credentials.")
    }

    return token
  }
}
