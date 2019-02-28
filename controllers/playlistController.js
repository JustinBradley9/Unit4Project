const Player = require('../models/Player')
const Playlist = require('../models/Playlist')

const playlistController = {
    index: (req, res) => {
        var playerId = req.params.playerId
        Player.findById(playerId).populate('playlists')
            .then((player) => {
                res.send(player.playlist)
            })
    },
    show: (req, res) => {
        var playlistId = req.params.playlistId
        Playlist.findById(playlistId)
            .then((playlist) => {
                res.send(playlist)
            })
    },
    delete: (req, res) => {
        var playlistId = req.params.playlistId
        Playlist.findByIdAndDelete(playlistId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var playlistId = req.params.playlistId
        Playlist.findByIdAndUpdate(playlistId, req.body, { new: true })
            .then((updatePlaylist) => {
                updatePlaylist.save()
                res.send(updatePlaylist)
            })
    },
    create: (req, res) => {
        var playerId = req.params.playerId
        Player.findById(playerId)
            .then((player) => {
                console.log(player)
                Playlist.create(req.body)
                    .then((newPlaylist) => {
                        console.log(newPlaylist)
                        player.playlist.push(newPlaylist)
                        player.save()
                        res.send(newPlaylist)
                    })
            })
    }

}

module.exports = playlistController