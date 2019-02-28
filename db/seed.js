
const Guild = require('../models/Guild')
const Player = require('../models/Player')
const Playlist = require('../models/Playlist')
const Game = require('../models/Game')


const myGame1 = new Game({
    name: "Final Fantasy 14",
    type: "RPG",
    synopsis: "Do whatever you want",
    cover: "String"
})
const myGame2 = new Game({
    name: "Friday thw 13th the game",
    type: "Survival",
    synopsis: "Try to survive while betraying the fewest number of friends",
    cover: "String"
})
const myPlaylist = new Playlist({
    listName: "Usual",
    theme: "Using your brain",
    image: "String",
    games: [myGame1, myGame2]
})
const firstPlayer = new Player({
    userName: "YourQueenYouPeasent",
    age: 25,
    gender: "Female",
    bio: "Here to play the best games and show how good I am. Your opinions on my skills at first? I don't care. But My skills will earn your respect",
    userPic: "String",
    playlists: [myPlaylist]

})
const mainGuild = new Guild({
    guildName: "Kings and Queens",
    symbol: "String",
    backgroundImage: "String",
    description:"Accept only the best and their relatives cause of nepotism",
    players: [firstPlayer]
})

Guild.remove({})
    .then(() => Player.remove({}))
    .then(() => Playlist.remove({}))
    .then(() => Game.remove({}))
    .then(() => Game.insertMany([myGame1, myGame2]))
    .then(() => Playlist.insertMany([myPlaylist]))
    .then(() => Player.insertMany([firstPlayer]))
    .then(() => mainGuild.save())
    .then(() => {
        console.log("Database saved succesfully")
        console.log(mainGuild)
        console.log(firstPlayer)
    })
