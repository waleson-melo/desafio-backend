import { Credito } from "../../entities/Credito"
import { IDatabaseProvider } from "../../providers/IDatabaseProvider"
import { MySQLProvider } from "../../providers/implementation/MySQLProvider"
import { ICreditoRepository } from "../ICreditoRepository"

export class MySQLCreditoRepository implements ICreditoRepository {
  private databaseProvider: IDatabaseProvider = new MySQLProvider()

  async findByCpf(cpf: string): Promise<Credito> {
    const [credito] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        credito.id,
        cliente.id AS cliente,
        credito.saldo
      FROM credito
      INNER JOIN cliente ON credito.cliente = cliente.id
      WHERE cliente.cpf = ?`,
      [cpf]
    )

    return credito[0]
  }

  async getSaldo(cliente: string): Promise<string> {
    const [saldo] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        credito.saldo
      FROM credito
      INNER JOIN cliente ON credito.cliente = cliente.id
      WHERE cliente.id = ?`,
      [cliente]
    )

    if (saldo.length === 0) {
      throw new Error('Cliente não encontrado ou saldo não disponível.');
    }

    return saldo[0].saldo
  }

  async discontSaldo(cliente: string, valor: number): Promise<void> {
    const [saldo] = await this.databaseProvider.getConnection().query(
      `
      UPDATE credito
      SET saldo = saldo - ?
      WHERE cliente = ?`,
      [valor, cliente]
    )
  }

  async save(credito: Credito): Promise<void> {
    const [result] = await this.databaseProvider.getConnection().query(
      `
      INSERT INTO credito (
        id,
        cliente,
        saldo
      ) VALUES (
        ?, ?, ?)`,
      [credito.id, credito.cliente, credito.saldo]
    )
  }
}
