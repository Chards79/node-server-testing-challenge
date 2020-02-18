
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries and resets ids
  return knex('characters')
    .truncate()
    .then(function () {
      return knex('characters').insert([
        { name: 'fry' },
        { name: 'leela' },
        { name: 'bender' },
        { name: 'zoidberg' },
      ]);
    });
};
