const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const reviewsService = require("./reviews.service");

const reviewExists = (req, res, next) => {
    reviewsService
      .read(req.params.reviewId)
      .then((review) => {
        if (review) {
          res.locals.review = review;
          return next();
        }
        return next({ status: 404, message: `Review cannot be found.` });
      })
      .catch(next);
}

async function destroy(req, res, next){
    const { review } = res.locals
    console.log("REVIEW", review)
    await reviewsService.delete(review.review_id)
    res.sendStatus(204)
}

module.exports = {
    delete: [asyncErrorBoundary(reviewExists), destroy]
};

// function destroy(req, res, next) {
//     suppliersService
//       .delete(res.locals.supplier.supplier_id)
//       .then(() => res.sendStatus(204))
//       .catch(next);
//   }