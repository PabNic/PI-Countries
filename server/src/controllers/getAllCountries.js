const { Country } = require("../db");
//Obtiene un arreglo de objetos de mis tablas.

const getAllCountries = async (req, res) => {
  try {
    const allCountries = await Country.findAll();
    if (allCountries) return res.status(200).json(allCountries);
    else throw Error;
  } catch (error) {
    res.status(500).json({ error: "Error to connect data base" });
  }
};

module.exports = getAllCountries;
