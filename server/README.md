# Loan REST API

This project leverages Docker to run the MySQL database, Nodejs, TypeORM, and the Express web framework.

The version of Nodejs used was v16.13.2, which can be downloaded from Nodejs.org. If you are using `nvm`, the latest version of v16 can be installed by the command `nvm install 16`.

Steps to run this project:

1. Run the database using the command `docker compose up db -d`
2. Run `npm i` command
4. Run `npm start` command

The project should be listening on port `7777` by default.

# Routes

There are 3 routes exposed by the project:
- `POST /loan` - Creates a loan
- `PUT /loan/:id` - Updates the loan properties
- `GET /loan/:id` - Gets an existing loan for the id

## Create a loan
A POST request to the `/loan` endpoint will create a loan record.
Here is an example JSON request body payload to create a loan:
```{"amount":100,"interest_rate":7.99,"loan_length_months":48,"monthly_payment":299}```

A sample request using `curl`:

```curl -X POST -H 'Content-Type: application/json' -d '{"amount":100,"interest_rate":7.99,"loan_length_months":48,"monthly_payment":299}' localhost:7777/loan/```

An example response:

```{"amount":100,"interest_rate":7.99,"loan_length_months":48,"monthly_payment":299,"id":14}```

## Get a loan
A GET request to the `/loan/:id` endpoint will retrieve a loan record.

```curl -H 'Content-Type: application/json' "localhost:7777/loan/15"```

## Update a loan
A PUT request to the `/loan/:id` will update a loan record.
An example request body, which must include the id: ```{"id":14, "amount":100,"interest_rate":3.99,"loan_length_months":48,"monthly_payment":299}```

A sample update request using `curl`:

```curl -X PUT -H 'Content-Type: application/json' -d '{"id":14, "amount":100,"interest_rate":3.99,"loan_length_months":48,"monthly_payment":299}' localhost:7777/loan/14```
