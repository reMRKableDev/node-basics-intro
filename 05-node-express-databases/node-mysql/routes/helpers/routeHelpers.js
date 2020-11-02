module.exports = {
  reqBody: req => req.body,

  reqParams: req => req.params.id,

  queryObjectSuccess: (res, results) => res.status(200).send(results),

  querySuccess: res => res.status(200).send("Query Success"),

  queryFailed: (res, err) => res.status(500).send("Query Failed!" + err)
};
