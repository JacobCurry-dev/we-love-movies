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

const read = (movie_id) => {
  return knex("movies").select("*").where({ movie_id }).first();
};

const readMovieTheaters = (movie_id) => {
    return knex("movies_theaters as mt")
        .join("theaters as t", "mt.theater_id", "t.theater_id")
        .select("mt.*", "t.*")
        .where({ "mt.movie_id" : movie_id })
}

module.exports = {
  list,
  listIfShowing,
  read,
  readMovieTheaters
};
