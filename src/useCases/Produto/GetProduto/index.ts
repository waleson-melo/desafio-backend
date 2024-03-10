import { MySQLProdutoRepository } from "../../../repositories/implementation/MySQLProdutoRepository"
import { GetProdutoController } from "./GetProdutoController"
import { GetProdutoUseCase } from "./GetProdutoUseCase"

const mysqProdutoREpository = new MySQLProdutoRepository()

const getProdutoUseCase = new GetProdutoUseCase(mysqProdutoREpository)

const getProdutoController = new GetProdutoController(getProdutoUseCase)

export { getProdutoUseCase, getProdutoController }
