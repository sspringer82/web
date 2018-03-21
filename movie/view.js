module.exports = function render(data) {
  return `<ul>
    ${data
      .map(movie => {
        return '<li>' + movie.title + '</li>';
      })
      .join('')}
  </ul>`;
};
