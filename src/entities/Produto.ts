import { v4 } from "uuid"

export class Produto {
  public readonly id: string

  public nome: string
  public descricao: string
  public preco: number
  public imagem: string

  constructor(props: Omit<Produto, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      console.log(this.id)
    }
  }
}
