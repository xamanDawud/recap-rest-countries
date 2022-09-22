let countryBoxCOntainer = document.getElementById("container");

const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((data) => data.json())
    .then((countries) => getCountry(countries));
};

const getCountry = (countries) => {
  countries.map((country) => {
    // displayCountry(country);
    console.log(country);
    console.log(displayCountry(country));
    let div = document.createElement("div");
    div.classList.add("divv");
    div.innerHTML = displayCountry(country);
    countryBoxCOntainer.appendChild(div);
  });
};

const displayCountry = (country) => {
  //   console.log(country);
  //   console.log(country.name.common);
  const { name, area, flags, languages, region } = country;
  return `
        <img src='${flags.png}'>
        <h1>${name.common}</h1>
        <h2>Area:${area}</h2>
        <h2>Region: ${region}</h2>
    `;
};
loadCountries();
