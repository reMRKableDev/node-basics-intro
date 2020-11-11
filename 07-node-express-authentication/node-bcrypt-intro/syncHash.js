const bcrypt = require("bcrypt");
const { saltRounds, passwordOne, passwordTwo } = require("./config");

// ****************************************************************************************
// Using bcrypt with synchronous methods
// ****************************************************************************************

// 1. Generate the salt value
const generatedSaltSync = bcrypt.genSaltSync(saltRounds);

// 2. Hash the password
const hashedPassword = bcrypt.hashSync(passwordOne, generatedSaltSync);

// 3. Compare hashed value with string
const verifyPass1 = bcrypt.compareSync(passwordOne, hashedPassword);
const verifyPass2 = bcrypt.compareSync(passwordTwo, hashedPassword);

console.log(`Generated Salt: ${generatedSaltSync}`);
console.log(`Hashed Password: ${hashedPassword}`);
console.log("----------------------------------------");
console.log(`passwordOne corresponds to hashed password: ${verifyPass1}`);
console.log(`passwordTwo corresponds to hashed password: ${verifyPass2}`);
