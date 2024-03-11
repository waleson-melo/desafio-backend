export interface IAuthRepository {
  loginCpfSenha(cpf: string, senha: string): Promise<string>
}
