import { ICreditoRepository } from "../../../repositories/ICreditoRepository";

export class GetSaldoByCPFUseCase {
  constructor(private creditoRepository: ICreditoRepository) {}

  async execute(cpf: string) {
    return await this.creditoRepository.getSaldoByCPF(cpf)
  }
}
