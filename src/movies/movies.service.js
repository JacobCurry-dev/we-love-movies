const knex = require("../db/connection");

const list = () => {
    return knex("movies").select("*");
}

const read = (movieId) => {
    return knex("movies").select("*").where({ movie_id: movieId }).first();
}


module.exports = {
    list,
    read,
};