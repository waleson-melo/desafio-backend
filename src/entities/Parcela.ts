import { v4 } from "uuid"

export class Parcela {
  public readonly id: string

  public venda: string
  public valor: number
  public dataVencimento: Date
  public dataPagamento: Date

  constructor(props: Omit<Parcela, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      console.log(this.id)
    }
  }
}
