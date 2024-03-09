import { MySQLProdutoRepository } from "../../../repositories/implementation/MySQLProdutoRepository"
import { ListProdutoController } from "./ListProdutoController"
import { ListProdutoUseCase } from "./ListProdutoUseCase"

const mysqlProdutoRepository = new MySQLProdutoRepository()

const listProdutoUseCase = new ListProdutoUseCase(mysqlProdutoRepository)

const listProdutoController = new ListProdutoController(listProdutoUseCase)

export { listProdutoUseCase, listProdutoController }
