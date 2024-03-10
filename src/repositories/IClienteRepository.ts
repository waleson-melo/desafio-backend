import { Cliente } from "../entities/Cliente"

export interface IClienteRepository {
  findByEmail(email: string): Promise<Cliente>
  findByCPF(cpf: string): Promise<Cliente>
  save(cliente: Cliente): Promise<void>
}
