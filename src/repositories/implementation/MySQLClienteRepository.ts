import { Cliente } from "../../entities/Cliente"
import { IDatabaseProvider } from "../../providers/IDatabaseProvider"
import { MySQLProvider } from "../../providers/implementation/MySQLProvider"
import { IClienteRepository } from "../IClienteRepository"

export class MySQLClienteRepository implements IClienteRepository {
  private databaseProvider: IDatabaseProvider = new MySQLProvider()

  async findByEmail(email: string): Promise<Cliente> {
    const [cliente] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        id,
        nome,
        email,
        cpf
      FROM cliente
      WHERE email = ?`,
      [email]
    )

    return cliente[0]
  }

  async findByCPF(cpf: string): Promise<Cliente> {
    const [cliente] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        id,
        nome,
        email,
        cpf
      FROM cliente
      WHERE cpf = ?`,
      [cpf]
    )
    return cliente[0]
  }

  async save(cliente: Cliente): Promise<void> {
    const [result] = await this.databaseProvider.getConnection().query(
      `
      INSERT INTO cliente (
        id,
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
        cep)
      VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
      )
    `,
      [
        cliente.id,
        cliente.nome,
        cliente.email,
        cliente.cpf,
        cliente.senha,
        cliente.logradouro,
        cliente.numero,
        cliente.complemento,
        cliente.bairro,
        cliente.cidade,
        cliente.estado,
        cliente.cep,
      ]
    )
  }
}
