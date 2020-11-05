exports.deleteOneSavedCatData = () =>
  Cat.deleteOne({ name: "Garfield" })
    .then(() => console.log(`Cat is deleted`))
    .catch((saveErr) => console.error(`Save failed: ${saveErr}`));
