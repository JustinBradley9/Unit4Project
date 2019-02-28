const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Playlist = new Schema({
    listName: String,
    theme: String,
    image: String,
    games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }]
});


module.exports = mongoose.model("Playlist", Playlist)