import { Venda } from "../../../entities/Venda"
import { ICreditoRepository } from "../../../repositories/ICreditoRepository"
import { IVendaRepository } from "../../../repositories/IVendaRepository"
import { ICreateVendaRequestDTO } from "./CreateVendaDTO"

export class CreateVendaUseCase {
  constructor(
    private vendaRepository: IVendaRepository,
    private creditoRepository: ICreditoRepository
  ) {}

  async execute(data: ICreateVendaRequestDTO) {
    const credito = parseFloat(
      await this.creditoRepository.getSaldo(data.cliente)
    )

    if (credito < data.valor) {
      throw new Error("Saldo insuficiente.")
    }

    const venda = new Venda(data)
    await this.vendaRepository.save(venda)
    await this.creditoRepository.discontSaldo(data.cliente, data.valor)
  }
}
