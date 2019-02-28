const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Player = new Schema({
    userName: String,
    age: Number,
    gender: String,
    bio: String,
    userPic: String,
    playlists: [{
        type: Schema.Types.ObjectId,
        ref: 'Playlist'
    }]
});


module.exports = mongoose.model("Player", Player)