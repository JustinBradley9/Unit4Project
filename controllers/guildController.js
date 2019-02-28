const Guild= require('../models/Guild')
const Player = require('../models/Player')

const guildController = {
    index: (req, res) => {
        Guild.find({})
            .then((guilds) => {
                res.send(guilds)
                console.log(Guild)
            })
    },
    show: (req, res) => {
        Guild.findById(req.params.guildId).populate('players')
            .then((guild) => {
                res.send(guild)
                console.log(Guild)
            })
    },
    update: (req, res) => {
        Guild.findByIdAndUpdate(req.params.guildId, req.body)
            .then((updatedGuild) => {
                updatedGuild.save()
                res.send(updatedGuild)
            })
    },
    delete: (req, res) => {
        Guild.findByIdAndDelete(req.params.guildId)
            .then(() => {
                res.send(200)
            })
    },
    create: (req, res) => {
        Guild.create(req.body)
            .then((guild) => {
                res.send(guild)
            })
    }
}

module.exports = guildController