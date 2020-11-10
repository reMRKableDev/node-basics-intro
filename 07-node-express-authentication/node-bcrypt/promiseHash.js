const bcrypt = require("bcrypt");
const { saltRounds, passwordOne, passwordTwo } = require("./config");

// ****************************************************************************************
// Using bcrypt with promises (Alternative 1)
// ****************************************************************************************

// 1. Generate the salt value
bcrypt
  .genSalt(saltRounds)
  .then((salt) => {
    console.log(`Generated Salt: ${salt}`);

    // 2. Hash the password
    return bcrypt.hash(passwordOne, salt);
  })
  .then((hashedPassword) => {
    console.log(`Hashed Password: ${hashedPassword}`);

    return hashedPassword;
  })
  .then((hashedPasswordToCompare) => {
    // 3. Compare hashed value with string
    return bcrypt.compare(passwordOne, hashedPasswordToCompare);
  })
  .then((verifyPassword) => {
    console.log(
      `passwordOne corresponds to hashed password: ${verifyPassword}`
    );
  })
  .catch((error) => console.error(`Error when hashing: ${error}`));

// ****************************************************************************************
// Using bcrypt with promises (Alternative 2)
// ****************************************************************************************

// 1. Generate the hashedPassword directly
bcrypt
  .hash(passwordTwo, saltRounds)
  .then((hashedPassword) => {
    console.log(`Hashed Password: ${hashedPassword}`);

    return hashedPassword;
  })
  .then((hashedPasswordToCompare) => {
    // 2. Compare hashed value with string
    return bcrypt.compare(passwordTwo, hashedPasswordToCompare);
  })
  .then((verifyPassword) => {
    console.log(
      `passwordTwo corresponds to hashed password: ${verifyPassword}`
    );
  })
  .catch((error) => console.error(`Error when hashing: ${error}`));
