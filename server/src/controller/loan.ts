import {Request, Response} from 'express';
import LoanService from '../service/loan';
import { createLogger } from "../helper/logger";
import { LoanDTO } from '../repository/loan';

class ValidationError extends Error {}

export default class LoanController {
  private loanService: LoanService;
  private logger: any;

  constructor() {
    this.loanService = new LoanService();
    this.logger = createLogger('LoanController');
  }

  /**
   * Return the id as an integer or throw that it is invalid.
   * @param id 
   * @returns 
   */
  static getId(id: string) : number {
    if(isNaN(+id)) {
      throw new ValidationError(`invalid loan id ${id}`);
    }
    return +id;
  }

  /**
   * Gets a loan record for the specified id.
   * @param req 
   * @param resp 
   */
  getById = async (req: Request, resp: Response) : Promise<void> => {
    try {
      const id: number = LoanController.getId(req.params.id);
      const loan:LoanDTO = await this.loanService.getById(id);
      resp.send(loan).json();
    } catch(err) {
      this.logger.error(err);
      resp.status(500).send(err.message);
    }
  }

  /**
   * Creates a new loan record with an autogenerated id.
   * @param req 
   * @param resp 
   */
  create = async (req: Request, resp: Response) : Promise<void> => {
    try {
      const { 
        amount,
        interest_rate,
        loan_length_months,
        monthly_payment,
      } = req.body;

      const createLoan:LoanDTO = {
        amount,
        interest_rate,
        loan_length_months,
        monthly_payment,
        id: 0 // do we need this for TypeORM
      }

      const loan:LoanDTO = await this.loanService.create(createLoan);
      resp.send(loan).json();
    } catch(err) {
      this.logger.error(err);
      resp.status(500).send(err.message);
    }
  }

  /**
   * Updates the loan record and will reject if the id's do not match.
   * @param req 
   * @param resp 
   */
  update = async (req: Request, resp: Response) : Promise<void> => {
    try {
      const pathId: number = LoanController.getId(req.params.id);
      const { 
        id,
        amount,
        interest_rate,
        loan_length_months,
        monthly_payment,
      } = req.body;

      if (id !== pathId) {
        throw new ValidationError("id's do not match");
      }

      const loanDto:LoanDTO = {
        amount,
        interest_rate,
        loan_length_months,
        monthly_payment,
        id: pathId, // Uses the id from the path
      }

      const loan:LoanDTO = await this.loanService.update(loanDto);
      resp.send(loan).json();
    } catch(err) {
      this.logger.error(err);
      resp.status(500).send(err.message);
    }
  }
}