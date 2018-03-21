let data = [
  { id: 1, title: 'Scarface', year: 1976 },
  { id: 2, title: 'Starwars', year: 1977 },
  { id: 3, title: 'Pulp Fiction', year: 1994 },
];

module.exports = {
  getAll() {
    return data;
  },
  delete(id) {
    data = data.filter(item => item.id !== id);
  },
  save(movie) {
    const nextId = Math.max.apply(null, data.map(item => item.id)) + 1;
    data.push({ ...movie, id: nextId });
  },
};
