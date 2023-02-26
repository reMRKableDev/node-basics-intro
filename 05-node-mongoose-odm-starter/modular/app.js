const { connectDB, disconnectDB } = require("./configs/db.config");

const { findAllSavedCatData } = require("./queries/read.query");
const { updateOneSavedCatData } = require("./queries/update.query");
const { deleteOneSavedCatData } = require("./queries/delete.query");
const {
  saveSingleCatObjectUsingInstanceOfModel,
  createSingleCatObjectUsingModel,
  createMultipleCatObjects,
} = require("./queries/create.query");

connectDB();

/* CREATE */
saveSingleCatObjectUsingInstanceOfModel();
createSingleCatObjectUsingModel();
createMultipleCatObjects();

/* READ */
findAllSavedCatData();

/* UPDATE */
updateOneSavedCatData();

/* DELETE */
deleteOneSavedCatData();

disconnectDB();
