# Client to call Loan REST API

The client requires Nodejs and runs as a cli tool. 

The version of Nodejs used was v16.13.2, which can be downloaded from Nodejs.org. If you are using `nvm`, the latest version of v16 can be installed by the command `nvm install 16`.

Steps to run this project:

1. Run `npm i` command
2. Ensure the [server](../server/README.md) is running 
3. Run `node src/index.js --help` to view the help

```
Usage: index.js <command> [options]

Commands:
  index.js get     get a loan from the API
  index.js create  create a loan using the API
  index.js update  update a loan using the API

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  ```

# Example commands

## Create a loan
```node src/index.js create --amount=400 --interest_rate=2.5 --loan_length_months=36 --monthly_payment=225```

## Get a loan
```node src/index.js get --id=<id from the create>```

## Update a loan
```node src/index.js update --id=<id from the create> --amount=400 --interest_rate=2.5 --loan_length_months=36 --monthly_payment=200```

# dotenv

This project uses `dotenv` to provide host and port configuration.
The [.env](.env) is configured with the defaults the server expects.
- `HOST` - `http://localhost`
- `PORT` - `7777`
