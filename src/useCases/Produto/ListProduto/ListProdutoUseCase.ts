import { IProdutoRepository } from "../../../repositories/IProdutoRepository";

export class ListProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute() {
    return await this.produtoRepository.list();
  }
}
