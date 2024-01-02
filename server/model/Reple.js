const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
    {
        repleNum: Number,
        author: String,
        password: String,
        content: String,
    },
    { collection: "reples", timestamps: true }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };