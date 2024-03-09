import { Router } from "express"
import { createClienteController } from "./useCases/Cliente/CreateCliente"
import { listProdutoController } from "./useCases/Produto/ListProduto"

const router = Router()

router.get("/", (request, response) => {
  return response.status(200).send({ message: "Hello World!" })
})

router.post("/clientes", (request, response) => {
  return createClienteController.handle(request, response)
})

router.get("/produtos", (request, response) => {
  return listProdutoController.handle(request, response)
})

export { router }
