import { MySQLCreditoRepository } from "../../../repositories/implementation/MySQLCreditoRepository"
import { MySQLVendaRepository } from "../../../repositories/implementation/MySQLVendaRepository"
import { CreateVendaController } from "./CreateVendaController"
import { CreateVendaUseCase } from "./CreateVendaUseCase"

const mysqlVendaRepository = new MySQLVendaRepository()
const mysqlCreditoRepository = new MySQLCreditoRepository()

const createVendaUseCase = new CreateVendaUseCase(
  mysqlVendaRepository,
  mysqlCreditoRepository
)

const createVendaController = new CreateVendaController(createVendaUseCase)

export { createVendaUseCase, createVendaController }
