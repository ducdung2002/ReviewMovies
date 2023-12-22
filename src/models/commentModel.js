import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    content: {
        type: String,
        required: true
    },
    movieId: {
        type: mongoose.Types.ObjectId,
        ref: "movies"
    },
    parentCommentId: {
        type: mongoose.Types.ObjectId,
        ref: "comments",
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true
});

export default mongoose.model("comments", commentModel);
