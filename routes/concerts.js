var express = require("express");
var router = express.Router();
var db = require("../database");
var hal = require("../hal");

router.get("/concerts", (req, res, next) => {
  const resourceObject = hal.mapConcertListToResourceObject(db.concerts);
  res.status(200).json(resourceObject);
});

router.get("/concerts/:id(\\d+)", (req, res, next) => {
  //récupérer l'id renseigné dans le patch
  const id = req.params.id;
  const concert = db.concerts.find((concert) => concert.id == id);

  //Si le concert n'est pas trouvé
  if (concert === undefined) {
    res.status(404).json({});
    console.log("Le concert n'a pas été trouvé");
  }

  const mapConcertoResourceObject = hal.mapConcertoResourceObject(concert);
  res.status(200).json(mapConcertoResourceObject);
});

module.exports = router;
