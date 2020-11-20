const { CLIENT_ID, CLIENT_SECRET } = process.env;
module.exports = {
  mongodb: {
    dbURI: "mongodb://localhost/node-auth-passport-google",
  },
  google: {
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
  },
};
