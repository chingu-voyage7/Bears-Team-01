const Review = require('../models/review.model.js');

module.exports = (req, res, next) => {
  if(req.isAuthenticated()){
    Review.findById(req.params.reviewId, function(err, foundReview){
        if(err){
            res.redirect("/");
        } else {
            if(foundReview.author.id.equals(req.user._id)){
                next();
            } else {
                res.redirect("/");
            }
        }
    });
  } else {
      res.redirect("/");
  }
};
