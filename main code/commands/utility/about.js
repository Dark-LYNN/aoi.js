module.exports = ({
    name: "about",
    aliases: ['ping'],
    description: "show info about akira",
    usage: "$getServerVar[prefix]about",
    code: `
        $addField[Bot info:;
<:Discord:936735082423664682> **Server Count:** \`$guildCount\`
<:Members:936736954853236816> **Members Count:** \`$allMembersCount\`
<:DJS:1051253676678860871> **D.JS Version:** \`14.8.0\`
<:nodejs:1051254683169198150> **Node.js Version:** \`18.15.0\`
<:Commands:936738620423934013> **Command Count:** \`$commandsCount\`
<:Developer:936732286861316126> **Developer:** \`@Dark-LYNN#6568\`;true]
        $addField[Host info:;
<:ping:1051257927316545546> **Server Latency:** \`$ping ms\`
<:ping:1051257927316545546> **Bot Latency:** \`$messageping ms\`
<:ping:1051257927316545546> **DataBase Latency:** \`$databasePing ms\`
<:shard:1051260030877454467> **Shard ID:** \`$shardID\`
<:Clock:937415318278647818> **Uptime:** \`$replaceText[$replaceText[$replaceText[$uptime; hours,;h]; minutes,;m]; seconds;s]\`
<:Server:936736140868845609> **Platform:** \`Linux\`
<:CPU:1051261738789634078> **CPU:** \`$cpu\`
<:ram:1051262462651027647> **Ram Percentage:** \`$roundTenth[$math[$ram*100/1000];2]%\`
<:ram:1051262462651027647> **Ram Usage:** \`$roundTenth[$ram;2]\`;true] 
        $color[$getGuildVar[color]]
        $author[About Akira:;$userAvatar[738057910923296839]]
        $onlyForIDs[705306248538488947;]

`})
