
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appointment').del()
    .then(function () {
      // Inserts seed entries
      return knex('appointment').insert([
        {location: 'Tempe', time: '09:00:00', user_id: 1},
        {location: 'Phoenix', time: '12:00:00', user_id: 2},
        {location: 'Tempe', time: '03:00:00', user_id: 3}
      ]);
    });
};
