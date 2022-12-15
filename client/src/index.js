const yargs = require('yargs');
const Loan = require('./loan');

const argv = yargs(process.argv.splice(2))
  .usage('Usage: $0 <command> [options]')
  .command(
    'get',
    'get a loan from the API',
    function (yargs) {
      return yargs.option('id', {
        describe: 'the id of the loan to fetch'
      });
    },
    async function (argv) {
      const data = await new Loan({id: argv.id}).get();
      console.log(data);
    }
  )
  .command(
    'create',
    'create a loan using the API',
    function (yargs) {
      return yargs.option('amount', { describe: 'the total loan amount in USD' })
      .option('interest_rate', { describe: 'the interest rate (example 1.99 for 1.99%)' })
      .option('loan_length_months', { describe: 'the length of the loan in months' })
      .option('monthly_payment',{ describe: 'the monthly payment in USD' });
    },
    async function (argv) {
      const data = await new Loan({
        amount: argv.amount,
        interest_rate: argv.interest_rate,
        loan_length_months: argv.loan_length_months,
        monthly_payment: argv.monthly_payment}).create();
      console.log(data);
    }
  )
  .command(
    'update',
    'update a loan using the API',
    function (yargs) {
      return yargs.option('id', { describe: 'the id of the loan to update' })
      .option('amount', { describe: 'the total loan amount in USD' })
      .option('interest_rate', { describe: 'the interest rate (example 1.99 for 1.99%)' })
      .option('loan_length_months', { describe: 'the length of the loan in months' })
      .option('monthly_payment',{ describe: 'the monthly payment in USD' });
    },
    async function (argv) {
      const data = await new Loan({
        id: argv.id,
        amount: argv.amount,
        interest_rate: argv.interest_rate,
        loan_length_months: argv.loan_length_months,
        monthly_payment: argv.monthly_payment}).update();
      console.log(data);
    }
  )
  .strict()
  .help()
  .argv
