const knex = require("../db/connection");

const list = () => {
  return knex("movies").select("*");
};

const listIfShowing = () => {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("m.*")
    .where({ "mt.is_showing": true })
    .groupBy("m.movie_id");
};

const read = (movieId) => {
  return knex("movies").select("*").where({ movie_id: movieId }).first();
};

module.exports = {
  list,
  listIfShowing,
  read,
};
