import { Venda } from "../../entities/Venda"
import { IDatabaseProvider } from "../../providers/IDatabaseProvider"
import { MySQLProvider } from "../../providers/implementation/MySQLProvider"
import { IVendaRepository } from "../IVendaRepository"

export class MySQLVendaRepository implements IVendaRepository {
  private databaseProvider: IDatabaseProvider = new MySQLProvider()

  async save(venda: Venda): Promise<void> {
    const [result] = await this.databaseProvider.getConnection().query(
      `
      INSERT INTO venda (
        id,
        cliente,
        produto,
        quantidade,
        valor,
        parcelas
      ) VALUES (
        ?, ?, ?, ?, ?, ?)`,
      [
        venda.id,
        venda.cliente,
        venda.produto,
        venda.quantidade,
        venda.valor,
        venda.parcelas,
      ]
    )
  }
}
