const data = [
  { id: 1, title: 'Scarface', year: 1976 },
  { id: 2, title: 'Starwars', year: 1977 },
  { id: 3, title: 'Pulp Fiction', year: 1994 },
];

module.exports = {
  getAll() {
    return data;
  },
};
