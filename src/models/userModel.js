import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum:['admin','user'],
        default:'user'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      }],
}, {
    timestamps: true,
})
export default mongoose.model("users", userModel);