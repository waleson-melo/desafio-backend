import { Produto } from "../../entities/Produto"
import { IDatabaseProvider } from "../../providers/IDatabaseProvider"
import { MySQLProvider } from "../../providers/implementation/MySQLProvider"
import { IProdutoRepository } from "../IProdutoRepository"

export class MySQLProdutoRepository implements IProdutoRepository {
  private databaseProvider: IDatabaseProvider = new MySQLProvider()

  async findByName(name: string): Promise<Produto> {
    throw new Error("Method not implemented.")
  }

  async findById(id: string): Promise<Produto> {
    const [produto] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        id,
        nome,
        descricao,
        preco,
        imagem
      FROM produto
      WHERE id = ?
      `,
      [id]
    )
    return produto[0]
  }

  async list(): Promise<Produto[]> {
    const [produtos] = await this.databaseProvider.getConnection().query(
      `
      SELECT
        id,
        nome,
        descricao,
        preco,
        imagem
      FROM produto
      `
    )

    return produtos
  }
}
