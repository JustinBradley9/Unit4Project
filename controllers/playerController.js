const Guild = require('../models/Guild')
const Player = require('../models/Player')

const playerController = {
    index: (req, res) => {
        var guildId = req.params.guildId
        Guild.findById(guildId).populate('player')
            .then((guild) => {
                res.send(guild.player)
            })
    },
    show: (req, res) => {
        var playerId = req.params.playerId
        Player.findById(playerId)
            .then((idea) => {
                res.send(idea)
            })
    },
    delete: (req, res) => {
        var playerId = req.params.playerId
        Player.findByIdAndDelete(playerId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var playerId = req.params.playerId
        Player.findByIdAndUpdate(playerId, req.body, { new: true })
            .then((updatePlayer) => {
                updatePlayer.save()
                res.send(updatePlayer)
            })
    },
    create: (req, res) => {
        var guildId = req.params.guildId
        Guild.findById(guildId)
            .then((guild) => {
                console.log(guild)
                Player.create(req.body)
                    .then((newPlayer) => {
                        console.log(newPlayer)
                        guild.player.push(newPlayer)
                        guild.save()
                        res.send(newPlayer)
                    })
            })
    }

}

module.exports = playerController