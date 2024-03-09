import { Cliente } from "../../../entities/Cliente"
import { Credito } from "../../../entities/Credito"
import { IClienteRepository } from "../../../repositories/IClienteRepository"
import { ICreditoRepository } from "../../../repositories/ICreditoRepository"
import { ICreateClienteRequestDTO } from "./CreateClienteDTO"

export class CreateClienteUseCase {
  constructor(
    private clienteRepository: IClienteRepository,
    private creditoRepository: ICreditoRepository
  ) {}

  async execute(data: ICreateClienteRequestDTO) {
    const clienteAlreadyExists = await this.clienteRepository.findByEmail(
      data.email
    )

    if (clienteAlreadyExists) {
      throw new Error("Cliente já existe.")
    }

    const cliente = new Cliente(data)
    const credito = new Credito({ cliente: cliente.id, saldo: 1000.0 })

    await this.clienteRepository.save(cliente)
    await this.creditoRepository.save(credito)
  }
}
