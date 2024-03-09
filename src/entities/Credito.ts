import { v4 } from "uuid"

export class Credito {
  public readonly id: string

  public cliente: string
  public saldo: number

  constructor(props: Omit<Credito, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      console.log(this.id)
    }
  }
}
