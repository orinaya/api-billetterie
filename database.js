// Modèles de données

class Concert {
  constructor(id, artist_name, date, location, description, number_seats) {
    this.id = id;
    this.artist_name = artist_name;
    this.date = date;
    this.location = location;
    this.description = description;
    this.number_seats = number_seats;
  }

  toString() {
    return this.artist_name + ` est en concert à ` + this.location + ` le ` + this.date;
  }
}

// class Reservation {
//   constructor(id, status, date_reservation, id_concert) {
//     this.id = id;
//     this.status = status;
//     this.date_reservation = date_reservation;
//     this.id_concert = id_concert;
//   }
// }

// class User {
//   constructor(id, pseudo, is_admin) {
//     this.id = id;
//     this.pseudo = pseudo;
//     this.is_admin = is_admin;
//   }
// }

// base de données
const concerts = [
  new Concert(
    1,
    "Ghost",
    new Date(2024, 6, 15, 20, 0, 0),
    "Stade de France, Paris",
    'Concert intense de la tournée "Imperatour" avec mise en scène théâtrale et effets spéciaux uniques.',
    "80,000"
  ),
  new Concert(
    2,
    "Iron Maiden",
    new Date(2024, 5, 12, 19, 30, 0),
    "O2 Arena, Londres",
    'Tournée "Legacy of the Beast", avec un set de classiques et des décors inspirés de l’histoire.',
    "20,000"
  ),
  new Concert(
    3,
    "Slipknot",
    new Date(2024, 7, 21, 21, 0, 0),
    "Madison Square Garden, New York",
    'Tournée "Knotfest", avec des performances intenses et une énergie unique en live.',
    "18,200"
  ),
  new Concert(
    4,
    "Metallica",
    new Date(2024, 8, 5, 21, 0, 0),
    "Olympiastadion, Berlin",
    'Concert spectaculaire de la tournée "Worldwired", avec effets pyrotechniques et show lumineux.',
    "75,000"
  ),
  new Concert(
    5,
    "Slayer",
    new Date(2024, 4, 20, 20, 0, 0),
    "Forum, Los Angeles",
    "Tournée d'adieu de Slayer, ultime occasion de voir ce groupe de thrash légendaire en live.",
    "17,500"
  ),
  new Concert(
    6,
    "Black Sabbath",
    new Date(2024, 9, 1, 19, 30, 0),
    "Accor Arena, Paris",
    "Concert de réunion pour une nuit mémorable avec leurs plus grands succès des années 70-80.",
    "20,300"
  ),
  new Concert(
    7,
    "Megadeth",
    new Date(2024, 10, 11, 20, 0, 0),
    "Tokyo Dome, Tokyo",
    "Show électrique avec des solos épiques, une véritable célébration du heavy metal.",
    "55,000"
  ),
  new Concert(
    8,
    "System of a Down",
    new Date(2024, 3, 15, 20, 0, 0),
    "Bell Centre, Montréal",
    "Tournée spéciale avec une setlist de classiques et de nouvelles chansons.",
    "21,300"
  ),
  new Concert(
    9,
    "Pantera",
    new Date(2024, 2, 12, 20, 0, 0),
    "Estadio Monumental, Buenos Aires",
    "Le retour tant attendu du groupe avec une énergie explosive.",
    "70,000"
  ),
  new Concert(
    10,
    "Judas Priest",
    new Date(2024, 10, 23, 20, 0, 0),
    "Wembley Arena, Londres",
    "Spectacle de puissance avec des performances vocales emblématiques et une scénographie unique.",
    "12,500"
  ),
];

concerts.forEach((concert) => console.log(concert.toString()));

// const users = [
//   new User(1, "metalhead01", true),
//   new User(2, "darklord92", false),
//   new User(3, "thrashmaster", false),
//   new User(4, "ironfist", true),
//   new User(5, "headbanger666", false),
//   new User(6, "blackmetalqueen", false),
//   new User(7, "megadethfan", false),
//   new User(8, "doomwizard", true),
//   new User(9, "vikingblood", false),
//   new User(10, "gothicghoul", false),
// ];

// const reservations = [
//   new Reservation(1, 1, "to_confirm", new Date(2024, 10, 1, 10, 30, 0), 1), // Réservation pour le concert de Ghost
//   new Reservation(2, 2, "confirmed", new Date(2024, 10, 2, 14, 0, 0), 2), // Réservation pour le concert de Iron Maiden
//   new Reservation(3, 3, "canceled", new Date(2024, 10, 3, 9, 0, 0), 3), // Réservation pour le concert de Slipknot
//   new Reservation(4, 4, "confirmed", new Date(2024, 10, 4, 11, 45, 0), 4), // Réservation pour le concert de Metallica
//   new Reservation(5, 5, "to_confirm", new Date(2024, 10, 5, 16, 20, 0), 5), // Réservation pour le concert de Slayer
//   new Reservation(6, 6, "confirmed", new Date(2024, 10, 6, 12, 10, 0), 6), // Réservation pour le concert de Black Sabbath
//   new Reservation(7, 7, "canceled", new Date(2024, 10, 7, 8, 55, 0), 7), // Réservation pour le concert de Megadeth
//   new Reservation(8, 8, "to_confirm", new Date(2024, 10, 8, 14, 35, 0), 8), // Réservation pour le concert de System of a Down
//   new Reservation(9, 9, "confirmed", new Date(2024, 10, 9, 17, 0, 0), 9), // Réservation pour le concert de Pantera
//   new Reservation(10, 10, "to_confirm", new Date(2024, 10, 10, 19, 15, 0), 10), // Réservation pour le concert de Judas Priest
// ];

// module.exports = {Concert, Reservation, User, concerts, users, reservations};
module.exports = {concerts};
