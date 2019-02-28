const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Game = new Schema({
    name: String,
    type: String,
    synopsis: String,
    cover: String
});


module.exports = mongoose.model("Game", Game)