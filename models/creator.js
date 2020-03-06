const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatorSchema = new Schema({
    createdBy: {
        type: Array,
        required: true
    }
});

const Creator = mongoose.model("Creator", CreatorSchema);

module.exports = Creator;