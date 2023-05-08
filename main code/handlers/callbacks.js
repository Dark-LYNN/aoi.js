module.exports = (bot) => {
	bot.onMessage({
   		respondToBots: true,
   		guildOnly: false
 	}) 
	bot.onChannelCreate()
    bot.onChannelDelete()
    bot.onChannelUpdate()
    bot.onGuildJoin()
    bot.onGuildLeave()
	bot.onInteractionCreate() 
	bot.onJoin()
	bot.onLeave()
    bot.onMemberUpdate()
    bot.onMessageDelete()
    bot.onMessageUpdate()
 /* bot.onPresenceUpdate() */
    bot.onRateLimit()
    bot.onReactionAdd()
    bot.onReactionRemove()
    bot.onRoleCreate()
    bot.onRoleDelete()
    bot.onRoleUpdate()
    bot.onUserUpdate()
    bot.onVoiceStateUpdate()
}