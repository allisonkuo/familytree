var mongoose = require("mongoose");

var personSchema = new mongoose.Schema({
    id: Number,
    name: String,
    born: Number,
    parentId1: Number,
    parentId2: Number,
    hometown: String,
}, { strict: false });

module.exports = mongoose.model("Person", personSchema);
