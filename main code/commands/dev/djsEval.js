module.exports = ({
    name: "eval",
    aliases: ['djs'],
    description: "Allows the bot owner to execute any discord.js code",
    usage: "$getServerVar[prefix]djseval <code>",
    code: ` 
\`\`\`js
$djsEval[$message;true]
\`\`\`
        $onlyForIDs[705306248538488947;392609934744748032;]
`})
