const express = require('express')
const router = express.Router()
const guildController = require('../controllers/guildController')
const playerController = require('../controllers/playerController')
const playlistController = require('../controllers/playlistController')
const gameController = require('../controllers/gameController')

router.get('/api/guilds', guildController.index)
router.post('/api/guilds', guildController.create)
router.get('/api/guilds/:guildId', guildController.show)
router.patch('/api/guilds/:guildId', guildController.update)
router.delete('/api/guilds/:guildId', guildController.delete)

router.get('/api/guilds/:guildId/player', playerController.index)
router.get('/api/guilds/:guildId/:playerId', playerController.show)
router.delete('/api/guilds/:guildId/:playerId', playerController.delete)
router.patch('api/guilds/:guildId/:playerId', playerController.update)
router.post('/api/guilds/:guildId/:playerId', playerController.create)

router.get('/api/guilds/:guildId/:playerId', playlistController.index)
router.get('/api/guilds/:guildId/:playerId/:playlistId', playlistController.show)
router.delete('/api/guilds/:guildId/:playerId/:playlistId', playlistController.delete)
router.patch('api/guilds/:guildId/:playerId/:playlistId', playlistController.update)
router.post('/api/guilds/:guildId/:playerId/:playlistId', playlistController.create)


router.get('/api/guilds/:guildId/:playerId/:playlistId', gameController.index)
router.get('/api/guilds/:guildId/:playerId/:playlistId/:gameId', gameController.show)
router.delete('/api/guilds/:guildId/:playerId/:playlistId/:gameId', gameController.delete)
router.patch('api/guilds/:guildId/:playerId/:playlistId/:gameId', gameController.update)
router.post('/api/guilds/:guildId/:playerId/:playlistId/:gameId', gameController.create)

module.exports = router
