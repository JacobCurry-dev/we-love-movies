const knex = require("../db/connection");

const read = (review_id) => {
    return knex("reviews")
        .select("*")
        .where({ "reviews.review_id": review_id })
        .first()
}

const destroy = (review_id) => {
    return knex("reviews")
        .where({ review_id }).del()
}

module.exports = {
    read,
    delete: destroy
};