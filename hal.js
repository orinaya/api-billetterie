/**
 * Export des fonctions helpers pour la spécification HAL
 * Voir la spécification HAL : https://stateless.group/hal_specification.html
 * Voir la spécification HAL (RFC, source) : https://datatracker.ietf.org/doc/html/draft-kelly-json-hal
 */

/**
 * Retourne un Link Object, conforme à la spécification HAL
 * @param {*} url
 * @param {*} type
 * @param {*} name
 * @param {*} templated
 * @param {*} deprecation
 * @returns
 */
function halLinkObject(path, type = "", name = "", templated = false, deprecation = false) {
  return {
    href: path,
    templated: templated,
    ...(type && {type: type}),
    ...(name && {name: name}),
    ...(deprecation && {deprecation: deprecation}),
  };
}

function mapConcertListToResourceObject(concerts) {
  //liste des concerts à venir

  //Préparer les concerts embedded comme ressource
  //par la ressource "la liste des concerts à venir"
  const embedded = concerts.map((concert) => mapConcertToResourceObject(concert));

  return {
    links: {
      self: halLinkObject("/concerts"),
    },
    _embedded: {
      concerts: embedded,
    },
  };
}
/**
 * Retourne une représentation Ressource Object (HAL) d'un concert
 * @param {*} concertData Données brutes d'un concert
 * @returns un Ressource Object Concert (spec HAL)
 */
function mapConcertToResourceObject(concertData, baseURL) {
  return {
    _links: {
      // A compléter
      self: halLinkObject(`/concerts/${concertData.id}`),
      concerts: halLinkObject("/concerts"),
      book: halLinkObject(`/concerts/${concertData.id}/reservation`),
      // "reservation": halLinkObject(...)
    },
    artist_name: concertData.artist_name,
    location: concertData.location,
    date: concertData.date,
    description: concertData.description,

    //Données d'un concert à ajouter ici...
  };
}

module.exports = {halLinkObject, mapConcertListToResourceObject, mapConcertToResourceObject};
