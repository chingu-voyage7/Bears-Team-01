const Review = require('../models/review.model.js');

module.exports = (req, res, next) => {
  //pass id of review (hidden input field) down through the delete button?
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
      res.status(502).json("You need to be logged in to do that");
      res.redirect("back");
  }
};
