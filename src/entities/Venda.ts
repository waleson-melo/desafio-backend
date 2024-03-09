import { v4 } from "uuid"

export class Venda {
  public readonly id: string

  public cliente: string
  public produto: string
  public quantidade: number
  public valor: number
  public parcelas: number

  constructor(props: Omit<Venda, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      console.log(this.id)
    }
  }
}
