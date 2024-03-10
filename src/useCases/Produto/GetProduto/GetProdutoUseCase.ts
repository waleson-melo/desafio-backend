import { IProdutoRepository } from "../../../repositories/IProdutoRepository";

export class GetProdutoUseCase {
  constructor(private produtoRepository: IProdutoRepository) {}

  async execute(id: string) {
    return await this.produtoRepository.findById(id);
  }
}
