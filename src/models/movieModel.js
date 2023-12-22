import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  categories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories", 
  }],
  releaseDate: {
    type: String,
  },
  trailerURL: { 
    type: String,
  },
  rating: [{
    id: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    stars: {
      type: Number,
      default: 0,
    },
  }],
  status: {
    type: String,
    enum: ["pending", "active", "inactive"],
    default: "active",
  },
}, {
  timestamps: true,
});

export default mongoose.model("movies", movieSchema);
