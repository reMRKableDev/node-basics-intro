const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = (app) => {
  // required for the app when deployed to Heroku (in production)
  app.set("trust proxy", 1);

  app.use(
    session({
      secret: process.env.SESS_SECRET,
      name: "passportCookie",
      resave: true,
      saveUninitialized: true,
      cookie: {
        // sameSite checks our environment
        // on development = lax  --> meaning cookies are only set when the domain in the URL of the browser matches the domain of the cookie
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60000, // 60 * 1000 ms === 1 min
      },
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
      }),
    })
  );
};
