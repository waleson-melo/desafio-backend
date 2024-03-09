import { v4 } from "uuid"

export class Cliente {
  public readonly id: string

  public nome: string
  public email: string
  public cpf: string
  public senha: string

  public logradouro: string
  public numero: string
  public complemento: string
  public bairro: string
  public cidade: string
  public estado: string
  public cep: string

  constructor(props: Omit<Cliente, "id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
      console.log(this.id)
    }
  }
}
