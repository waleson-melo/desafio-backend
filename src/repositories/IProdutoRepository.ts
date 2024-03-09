import { Produto } from "../entities/Produto"

export interface IProdutoRepository {
  findByName(name: string): Promise<Produto>
  findById(id: string): Promise<Produto>
  list(): Promise<Produto[]>
}
