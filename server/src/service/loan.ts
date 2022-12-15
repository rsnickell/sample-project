import { Loan } from "../entity/Loan";
import LoanRepository, { LoanDTO } from "../repository/loan";

export default class LoanService {

  private loanRepository: LoanRepository;

  constructor() {
    this.loanRepository = new LoanRepository();
  }

  getById = async (id: number) : Promise<LoanDTO> => {
    const loan = await this.loanRepository.getById(id);
    if (!loan) {
      throw new Error(`loan not found for id: ${id}`);
    }
    return this.mapLoan(loan)
  }

  create = async (loanDto: LoanDTO) : Promise<LoanDTO> => {
    const loan = await this.loanRepository.create(loanDto);
    return this.mapLoan(loan);
  }

  update = async (loanDto: LoanDTO) : Promise<LoanDTO> => {
    const loanExists = await this.loanRepository.getById(loanDto.id);
    if (!loanExists) {
      throw new Error(`loan not found for id: ${loanDto.id}`);
    }
    const loan = await this.loanRepository.update(loanDto);
    return this.mapLoan(loan);
  }

  private mapLoan(loan: Loan) : LoanDTO {
    return {
      ...loan
    };
  }
}