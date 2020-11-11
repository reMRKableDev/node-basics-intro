const bcrypt = require("bcrypt");
const { saltRounds, passwordOne, passwordTwo } = require("./config");

// ****************************************************************************************
// Using bcrypt with async ... await
// ****************************************************************************************

const hash = async () => {
  const salt = await bcrypt.genSalt(saltRounds);
  const hashed = await bcrypt.hash(passwordOne, salt);
  return hashed;
};

const compare = async (hashedPasswordToCompare) => {
  const match = await bcrypt.compare(passwordTwo, hashedPasswordToCompare);
  return match;
};

const runHashAndCompare = async () => {
  try {
    const hashedPassword = await hash();
    const verifyPassword = await compare(hashedPassword);

    console.log(`Hashed Password: ${hashedPassword}`);
    console.log("----------------------------------------");
    console.log(
      `passwordOne corresponds to hashed password: ${verifyPassword}`
    );
  } catch (error) {
    console.error(`Error when running hash and compare: ${error}`);
  }
};

runHashAndCompare();
