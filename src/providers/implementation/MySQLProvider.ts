import mysql from "mysql2/promise"
import { IDatabaseProvider } from "../IDatabaseProvider"

export class MySQLProvider implements IDatabaseProvider {
  private connection: mysql.Connection

  constructor() {
    this.connect()
  }

  private async connect() {
    this.connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "e_commerce",
    })
  }

  getConnection() {
    return this.connection
  }
}
