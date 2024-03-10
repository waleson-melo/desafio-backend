import { IClienteRepository } from "../../../repositories/IClienteRepository";

export class GetClienteByCPFUseCase {
  constructor(private clienteRepository: IClienteRepository) {}

  async execute(cpf: string) {
    return await this.clienteRepository.findByCPF(cpf);
  }
}
