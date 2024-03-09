import { Venda } from "../entities/Venda";

export interface IVendaRepository {
  save(venda: Venda): Promise<void>
}
