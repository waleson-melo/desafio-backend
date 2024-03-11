import { IDatabaseProvider } from "../../providers/IDatabaseProvider"
import { MySQLProvider } from "../../providers/implementation/MySQLProvider"
import { IAuthRepository } from "../IAuthRepository"

export class MySQLAuthRepository implements IAuthRepository {
  private databaseProvider: IDatabaseProvider = new MySQLProvider()

  async loginCpfSenha(cpf: string, senha: string) {
    const [token] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        cpf,
        nome
      FROM cliente
      WHERE cpf = ? AND senha = ?`,
      [cpf, senha]
    )

    return token[0]
  }
}
