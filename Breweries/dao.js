import model from "./model.js";

export const createBrewery = (brew) => {
  delete brew._id;
  return model.create(brew);
}

export const getAllBreweries = () => model.find();
export const findBreweryById = (id) =>  model.findOne({ _id : id });

export const updateBrewery = (id, brew) => model.updateOne({ _id: id }, { $set: brew});
export const updateBreweryReviews = (id, review) => model.findByIdAndUpdate(id, { $set: { "reviews.$[elem]": review } },
  { arrayFilters: [{ "elem.userId": review.userId }], new: true }
);

export const deleteBrewery = (id) => model.deleteOne({ _id: id });
export const getRandomBrewery = (num) => model.aggregate([{ $sample: { size: num } }]);
export const getReviewsByUser = (uid) => model.find({}, {_id:1, name:1, reviews: 1 }).and([{"reviews.userId" : uid}])
export const sortBreweriesByLikes = (count) => model.find({}).sort({ likes: -1 }).limit(count);
export const sortBreweriesByFollowers = (count) => model.find({}).sort({followers: -1 }).limit(count);
