import { MySQLClienteRepository } from "../../../repositories/implementation/MySQLClienteRepository"
import { MySQLCreditoRepository } from "../../../repositories/implementation/MySQLCreditoRepository"
import { CreateClienteController } from "./CreateClienteController"
import { CreateClienteUseCase } from "./CreateClienteUseCase"

const mysqlClienteRepository = new MySQLClienteRepository()
const mysqlCreditoRepository = new MySQLCreditoRepository()

const createClienteUseCase = new CreateClienteUseCase(
  mysqlClienteRepository,
  mysqlCreditoRepository
)

const createClienteController = new CreateClienteController(
  createClienteUseCase
)

export { createClienteUseCase, createClienteController }
