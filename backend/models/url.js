import mongoose from "mongoose";
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectedUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: Date.now,
        required: true,
    },
    lastClickedAt: {
        type: String,
    },
    visitHistory: [{timestamp : {type :String}}, {ip : {type: String}}],
},
{timestamps: true},
);

const URL = mongoose.model("URL", urlSchema);
export default URL;
