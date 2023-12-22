import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.model("categories", categorySchema);
