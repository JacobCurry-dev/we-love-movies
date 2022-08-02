const moviesService = require("./movies.service");

const list = (req, res, next) => {
    
    moviesService   
        .list()
        .then((data) => res.json({ data }))
        .catch(next);
}

const listIfShowing = (req, res, next) => {
    if (req.query.is_showing) {
        moviesService
            .listIfShowing()
            .then((data) => res.json({ data }))
            .catch(next);
    }
    next()
}

const read = (req, res, next) => {
    const { movie: data } = res.locals;
    res.json({ data });
}

module.exports = {
    list,
    read,
    listIfShowing
};