const moviesService = require("./movies.service");

const list = (req, res, next) => {
    moviesService   
        .list()
        .then((data) => res.json({ data }))
        .catch(next);
}

const read = (req, res, next) => {
    const { movie: data } = res.locals;
    res.json({ data });
}

module.exports = {
    list,
    read,
};