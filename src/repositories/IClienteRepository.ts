import { Cliente } from "../entities/Cliente"

export interface IClienteRepository {
  findByEmail(email: string): Promise<Cliente>
  save(cliente: Cliente): Promise<void>
}
