exports.updateOneSavedCatData = () =>
  Cat.updateOne({ name: "Garfield" }, { breed: "Ankara" })
    .then(() => console.log(`Cat is updated`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
