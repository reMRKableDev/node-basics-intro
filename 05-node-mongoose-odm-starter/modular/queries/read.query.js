exports.findAllSavedCatData = () =>
  Cat.find({})
    .then((results) => console.log(`Found cats: ${results}`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
