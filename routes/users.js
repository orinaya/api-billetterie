var express = require("express");
var router = express.Router();
var db = require("../database");
var hal = require("../hal");

router.get("/users", (req, res, next) => {
  const resourceObject = hal.mapUserListToResourceObject(db.users);
  res.status(200).json(resourceObject);
});

router.get("/users/:id(\\d+)", (req, res, next) => {
  //récupérer l'id renseigné dans le patch
  const id = req.params.id;
  const user = db.users.find((user) => user.id == id);

  //Si le user n'est pas trouvé
  if (user === undefined) {
    res.status(404).json({});
    console.log("Le user n'a pas été trouvé");
  }

  const userResourceObject = hal.mapUserToResourceObject(user);

  res.status(200).json(userResourceObject);
});

module.exports = router;
