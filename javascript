const Discord = require("discord.js")

const TOKEN = "MTAyNjUzNTM5MDQ0Mzc0NTMzMA.GcELb8.fol2lKWLSZEr_S9lCMZ2W0MIS634lbH-KI_a48"


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () =>{
    console.log('Logged in!')
})

client.on("messageCreate", (message) =>{
    if (message.content == "Hi Bot!") (
        message.reply("Hello! Thats me!")
    )
})
client.login(TOKEN)
