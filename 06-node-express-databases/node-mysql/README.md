# Node - MySQL

A Node.js app connected to a MySQL database. 

## Getting Started

These instructions will help to run the app on your local machine for development and testing purposes.

### Prerequisites

What things you need installed on your local machine.

```
Text editor (I use VSCode)
NPM
Git
MySQL Workbench or client (for the database)
```

### How To:

To use the app:


1. Modify the values in the '.env.default' file to match your database configurations. This ensures that the dotenv package can read the correct environment variables.

```env
PORT = ** YOUR PORT IN PLAIN TEXT HERE **
DB_HOST = ** YOUR DB_HOST IN PLAIN TEXT HERE **
DB_USER = ** YOUR DB_USER IN PLAIN TEXT HERE **
DB_PASSWORD = ** YOUR DB_PASSWORD IN PLAIN TEXT HERE **
DB_NAME = ** YOUR DB_NAME IN PLAIN TEXT HERE **
```
2. Change the '.env.default' extension to become just '.env'.
3. The application should be good to run after this.


If you are unsure of how .env and environment variables work, then check out the documentation for the dotenv package here: [dotenv](https://www.npmjs.com/package/dotenv)
