const getCountryInfo = (countryName) => {
  axios
    .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      console.log("Response from API is: ", response);

      const countryDetail = response.data[0];
      console.log("a single country details: ", countryDetail);

      // I want to show the name on the html.
      document.getElementById("country-name").innerText = countryDetail.name;

      document.getElementById("country-capital").innerText =
        countryDetail.capital;

      document
        .getElementById("country-flag")
        .setAttribute("src", countryDetail.flag);
    })
    .catch((err) => console.log(err));
};

document.getElementById("get-country-btn").addEventListener("click", () => {
  const userInput = document.getElementById("country-name-input").value;
  getCountryInfo(userInput);
});
