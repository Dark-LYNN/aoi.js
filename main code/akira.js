const Aoijs = require("aoi.js")  
const bot = new Aoijs.AoiClient(require("./handlers/config.js"))

const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd,'./commands/')

bot.variables(require('./handlers/vars.js'))
/* require("./handlers/callbacks.js")(bot) */
bot.readyCommand({channel: "",code: `$log[Ready on $userTag[$clientID]]`})