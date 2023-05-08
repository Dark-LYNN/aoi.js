module.exports = [{
  name: "serverinfo",
  aliases: ['server-info','server','guildinfo','guild-info','guild'],
  description: "show info about the server",
  usage: "$getGuildVar[prefix]serverinfo",
  $if: "old",
  code: ` 
    $color[$getGuildVar[color]] 
    $title[**Server:** "$guildName"] 
    $if[$guildIcon==]
      $thumbnail[https://cdn.lynnux.xyz/images/No-Server_Icon-found.png]
    $elseif[$guildIcon!=]
      $thumbnail[$guildIcon]
    $endelseif
    $endif
    $if[$djsEval[guild.description;true]!=null]
      $description[**Server Description:**
\`\`\`
$djsEval[guild.description;true]
\`\`\`]
    $endif
    $addField[**Other Info:**;
<:Roles:936942568971841597> Roles: \`$roleCount\`
<:Members:936736954853236816> Members: \`$membersCount\`
<:Emoji:936944484325933056> Emojis: \`$emojiCount[$guildID]\`;true]
    $addField[**Channels & Categories:**;<:Text_Channel:827492050257313803> Text-Channels: \`$channelCount[$guildID;Text]\`
<:NSFW_Text_Channel:827492228220977182> NSFW-Channels: \`$channelCount[$guildID;NSFW]\`
<:Voice_Channel:827493113768706069> Voice-Channels: \`$channelCount[$guildID;Voice]\`;true]
    $addField[**Main info:**;<:ID:936963931296108545> ServerID: \`$guildID\`
<:Owner:936963916607680533> Server Owner: <@$ownerID> 
<:Date:1070664284692033596> Created: <t:$truncate[$math[($guildID / 4194304 + 1420070400000) / 1000]]:R>
<:shard:1051260030877454467> Server Shard: \`$shardID\`;no]
    $if[$djsEval[guild.splash]!=null]
      $addButton[1;Splash;secondary;InviteBanner]
    $else
      $addButton[1;Splash;secondary;InviteBanner;true]
    $endif
    $if[$djsEval[guild.banner]!=null]
      $addButton[1;Banner;secondary;Banner]
    $else
      $addButton[1;Banner;secondary;Banner;true]
    $endif
    $if[$serverIcon!=]
      $addButton[1;Icon;secondary;ServerIcon]
    $else
      $addButton[1;Icon;secondary;ServerIcon;true]
    $endif
    $onlyIf[$guildID!=;❎ You can't run this command in DMs]
    $onlyForIDs[705306248538488947;]
`}, {
name: "ServerIcon",
type: "interaction",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{title:$guildName's Icon}{description:[PNG\]($replaceText[$guildIcon;.webp;.png]) - [WEBP\]($guildIcon) - [JPG\]($replaceText[$guildIcon;.webp;.jpg]) - [GIF\]($replaceText[$guildIcon;.webp;.gif])}{image:$guildIcon}};{actionRow:{button:Banner:secondary:InviteBanner:false}};;everyone;false]

`}, {
name: "InviteBanner",
type: "interaction",
  prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{color:$getVar[color]}{title:$serverName's banner}{description:[PNG\]($replaceText[$guildIcon;.webp;.png]) - [WEBP\]($guildIcon) - [JPG\]($replaceText[$guildIcon;.webp;.jpg])}{image:https://cdn.discordapp.com/splashes/$guildID/$djsEval[guild.splash;true].webp?size=3072}};;;users;no]
`}, {
	name: "Banner",
	type: "interaction",
    prototype: "button",
	code: `
    $interactionUpdate[;{newEmbed:{color:$getVar[color]}{title:$serverName's Splash}{description:[PNG\]($replaceText[$guildIcon;.webp;.png]) - [WEBP\]($guildIcon) - [JPG\]($replaceText[$guildIcon;.webp;.jpg])}{image:https://cdn.discordapp.com/banners/$guildID/$djsEval[guild.banner;true].webp?size=480}}]
`}]