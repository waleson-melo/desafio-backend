import e from "express"
import { MySQLCreditoRepository } from "../../../repositories/implementation/MySQLCreditoRepository"
import { GetSaldoByCPFController } from "./GetSaldoByCPFController"
import { GetSaldoByCPFUseCase } from "./GetSaldoByCPFUseCase"

const mysqlCreditoRepository = new MySQLCreditoRepository()

const getSaldoByCPFUseCase = new GetSaldoByCPFUseCase(mysqlCreditoRepository)

const getSaldoByCPFController = new GetSaldoByCPFController(
  getSaldoByCPFUseCase
)

export { getSaldoByCPFUseCase, getSaldoByCPFController }
