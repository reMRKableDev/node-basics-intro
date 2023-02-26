const connection = require("../../database/dbConfig");
const {
  queryFailed,
  querySuccess,
  queryObjectSuccess,
  reqBody,
  reqParams,
} = require("../helpers/routeHelpers");

const {
  selectString,
  insertString,
  updateString,
  deleteString,
} = require("../helpers/queryStringHelpers");

/* CONTROLLERS */
module.exports = {
  createUsers: (req, res) => {
    const userData = reqBody(req);

    connection.query(insertString, userData, (err) =>
      err ? queryFailed(res, err) : querySuccess(res)
    );
  },

  readUsers: (req, res) => {
    connection.query(selectString, (err, results) =>
      err ? queryFailed(res, err) : queryObjectSuccess(res, results)
    );
  },

  updateUsers: (req, res) => {
    const userId = reqParams(req);
    const userData = reqBody(req);

    connection.query(updateString, [userData, userId], (err) =>
      err ? queryFailed(res, err) : querySuccess(res)
    );
  },

  deleteUsers: (req, res) => {
    const userId = reqParams(req);

    connection.query(deleteString, [userId], (err) =>
      err ? queryFailed(res, err) : querySuccess(res)
    );
  },
};
