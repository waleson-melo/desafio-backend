import { Credito } from "../entities/Credito"

export interface ICreditoRepository {
  findByCpf(cpf: string): Promise<Credito>
  getSaldo(cliente: string): Promise<string>
  getSaldoByCPF(cpf: string): Promise<string>
  discontSaldo(cliente: string, valor: number): Promise<void>
  save(credito: Credito): Promise<void>
}
