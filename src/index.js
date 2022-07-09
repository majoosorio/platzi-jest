const cities = [
  "Ciudad de México",
  "Bogotá",
  "Lima",
  "Buenos Aires",
  "Guadalajara",
  "Medellin",
];

const randomCity = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  return city;
};

module.exports = randomCity;
