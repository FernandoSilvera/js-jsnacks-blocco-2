// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.

const names = [
  "Luca",
  "Marco",
  "Fernando",
  "Alessia",
  "Clara",
  "Mattia",
  "Matteo",
  "Giulia",
  "Greta",
  "Valerio"
];

const surnames = ["Rossi",
"Bernini",
"Del Potro",
"Silvera",
"Scanzi",
"Corbelli",
"Maggi",
"Villani",
"Perduca",
"Antonini"];

let guests = [];

for (i = 0; i < 10; i++) {
  const casualName = Math.floor((Math.random() * 9) + 1);
  const casualSurname = Math.floor((Math.random() * 9)) + 1;

  guests.push(names[casualName] + " " + surnames[casualSurname]);
}

console.log(guests);