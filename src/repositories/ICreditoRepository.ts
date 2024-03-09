import { Credito } from "../entities/Credito"

export interface ICreditoRepository {
  findByCpf(cpf: string): Promise<Credito>
  save(credito: Credito): Promise<void>
}
