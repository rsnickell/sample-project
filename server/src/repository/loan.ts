import { Loan } from "../entity/Loan"
import { AppDataSource } from "../data-source"

export interface LoanDTO {
  id: number|undefined;
  amount: number;
  interest_rate: number;
  loan_length_months: number;
  monthly_payment: number;
}
export interface CreateLoanDTO {
  amount: number;
  interest_rate: number;
  loan_length_months: number;
  monthly_payment: number;
}

export default class LoanRepository {
  /**
   * Get the loan by the primary identifier.
   * @param id The identifier of the loan
   * @returns 
   */
  async getById(id: number): Promise< Loan | null > {
    const loan =  await AppDataSource.manager.findOneBy(Loan, {id});
    return loan;
  }

  /**
   * Create the loan.
   * @param loanDto The loan DTO to save
   * @returns The created loan with the generated id
   */
  async create(loanDto: LoanDTO): Promise<Loan> {
    const loan = await AppDataSource.manager.save(Loan, loanDto);
    return loan;
  }

  /**
   * Update the loan.
   * @param loanDto The loan DTO to save
   * @returns The updated loan details
   */
  async update(loanDto: LoanDTO): Promise<Loan> {
    await AppDataSource.manager.save(Loan, loanDto);
    const savedLoan =  await AppDataSource.manager.findOneBy(Loan, {id: loanDto.id});
    return savedLoan;
  }
}