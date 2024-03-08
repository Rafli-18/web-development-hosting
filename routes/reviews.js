const express = require('express');
const router = express.Router({ mergeParams: true });
const catchAsync = require('../utils/catchAsync');
const { validateReview, isReviewed, isLoggedIn } = require('../middleware');
const review = require('../controller/reviews');

router.post('/', isLoggedIn, validateReview, catchAsync(review.createReview))

router.delete('/:reviewId', isLoggedIn, isReviewed, catchAsync(review.deleteReview));

module.exports = router;