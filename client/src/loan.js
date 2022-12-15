const getAxiosInstance = require('./axiosHelper');

class Loan {
  
  constructor({id, amount, interest_rate, loan_length_months, monthly_payment}) {
    this.id = id;
    this.data = {
      id,
      amount,
      interest_rate,
      loan_length_months,
      monthly_payment,
    };
    this.instance = getAxiosInstance();
  }

  async get() {
    const { data } = await this.instance.get(`/loan/${this.id}`);
    return data;
  }

  async create() {
    const { data } = await this.instance.post(`/loan/`, this.data);
    return data;
  }
  async update() {
    const { data } = await this.instance.put(`/loan/${this.id}`, this.data);
    return data;
  }
}

module.exports = Loan;