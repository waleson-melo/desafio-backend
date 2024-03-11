import { MySQLAuthRepository } from "../../../repositories/implementation/MySQLAuthRepository"
import { LoginController } from "./LoginController"
import { LoginUseCase } from "./LoginUseCase"

const mysqlAuthRepository = new MySQLAuthRepository()

const loginUseCase = new LoginUseCase(mysqlAuthRepository)

const loginController = new LoginController(loginUseCase)

export { loginUseCase, loginController }
