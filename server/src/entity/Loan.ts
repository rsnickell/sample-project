import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Loan {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    amount: number

    @Column({type: "decimal", precision: 5, scale: 2})
    interest_rate: number

    @Column()
    loan_length_months: number

    @Column({type: "decimal", precision: 5, scale: 2})
    monthly_payment: number

}
