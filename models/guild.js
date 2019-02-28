const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Guild = new Schema({
    guildName: String,
    symbol: String,
    backgroundImage: String,
    description: String,
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }]
});


module.exports = mongoose.model("Guild", Guild)