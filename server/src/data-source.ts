import "reflect-metadata"
import { DataSource } from "typeorm"
import { Loan } from "./entity/Loan"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "INJECTED_FROM_K8S",
    database: "sample_project",
    synchronize: true,
    logging: false,
    entities: [Loan],
    migrations: [],
    subscribers: [],
})