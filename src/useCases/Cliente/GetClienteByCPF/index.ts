import { MySQLClienteRepository } from "../../../repositories/implementation/MySQLClienteRepository"
import { GetClienteByCPFController } from "./GetClienteByCPFController"
import { GetClienteByCPFUseCase } from "./GetClienteByCPFUseCase"

const mysqlClienteRepository = new MySQLClienteRepository()

const getClienteUseCase = new GetClienteByCPFUseCase(mysqlClienteRepository)

const getClienteController = new GetClienteByCPFController(getClienteUseCase)

export { getClienteUseCase, getClienteController }
