const Game = require('../models/Game')
const Playlist = require('../models/Playlist')

const gameController = {
    index: (req, res) => {
        var playlistId = req.params.playlistId
        Playlist.findById(playlistId).populate('games')
            .then((playlist) => {
                res.send(playlist.games)
            })
    },
    show: (req, res) => {
        var gameId = req.params.gameId
        Game.findById(gameId)
            .then((game) => {
                res.send(game)
            })
    },
    delete: (req, res) => {
        var gameId = req.params.gameId
        Game.findByIdAndDelete(gameId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var gameId = req.params.gameId
        Game.findByIdAndUpdate(gameId, req.body, { new: true })
            .then((updateGame) => {
                updateGame.save()
                res.send(updateGame)
            })
    },
    create: (req, res) => {
        var playlistId = req.params.playlistId
        Playlist.findById(playlistId)
            .then((playlist) => {
                console.log(playlist)
                Game.create(req.body)
                    .then((newGame) => {
                        console.log(newGame)
                        playlist.game.push(newGame)
                        playlist.save()
                        res.send(newGame)
                    })
            })
    }

}

module.exports = gameController