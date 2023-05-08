module.exports = ({
    name: "ban",
    description: "bans the user with the given reason",
    $if: "old",
    usage: "$getServerVar[prefix]ban <user> {reason}",
    code: `
    $if[$splitText[1]!=$splitText[2]]
        $if[$splitText[1]!=$ownerID[$guildID]]
            $if[$splitText[1]!=$clientID]
                $if[$authorID==$ownerID]
                    $if[$message[2]==]
                        $title[User Banned]
                        $thumbnail[$userAvatar[$splitText[1]]]
                        $color[$getServerVar[color]]
                        $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Issuer:** <@$splitText[2]> ||$splitText[2]||
**Reason:** \`\`\`
No reason given.
\`\`\`]
                    $else
                        $title[User Banned]
                        $thumbnail[$userAvatar[$splitText[1]]]
                        $color[$getServerVar[color]]
                        $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Issuer:** <@$splitText[2]> ||$splitText[2]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]\`\`\`]
                    $endif
                $else
                    $if[$message[2]==]
                        $title[User Banned]
                        $thumbnail[$userAvatar[$splitText[1]]]
                        $color[$getServerVar[color]]
                        $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Issuer:** <@$splitText[2]> ||$splitText[2]||
**Reason:** \`\`\`
No reason given.
\`\`\`]

                    $else
                        $title[User Banned]
                        $thumbnail[$userAvatar[$splitText[1]]]
                        $color[$getServerVar[color]]
                        $description[**User:** <@$splitText[1]> ||$splitText[1]||
**Issuer:** <@$splitText[2]> ||$splitText[2]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]\`\`\`]
                    $endif
                $endif
                $if[$getGuildVar[botLogChannel]!=1083095711094149180]
                    $if[$message[2]==]
                        $channelSendMessage[$channelID;{newEmbed:{color:$getVar[color]}{title:User Banned}{thumbnail:$userAvatar[$splitText[1]]}{description:**User:** <@$splitText[1]> ||$splitText[1]||
**Issuer:** <@$splitText[2]> ||$splitText[2]||
**Reason:** \`\`\`
No reason given.\`\`\`}}]
                    $else
                        $channelSendMessage[$channelID;{newEmbed:{color:$getVar[color]}{title:User Banned}{thumbnail:$userAvatar[$splitText[1]]}{description:**User:** <@$splitText[1]> ||$splitText[1]||
**Issuer:** <@$splitText[2]> ||$splitText[2]||
**Reason:** \`\`\`
$replaceText[$message;$message[1] ;;1]\`\`\`}}]                        
                    $enfif
                $else
                $endif
            $else
                $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Can't ban this user!}{description:You cannot ban me, if you want me to leave please use
\`\`\`
$getGuildVar[prefix]pleaseleavemyserver
\`\`\`}{footer:Only the server owner can use the above mentioned command.}}]
                
            $endif
        $else
            $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Couldn't ban this user!}{description:The server owner can't be banned.}}]
        $endif
    $else
        $channelSendMessage[$channelID;{newEmbed:{color:ff3333}{title:❌ Couldn't find this user!}{description:I couldn't find this user.}}]
    $endif

    $textSplit[$findMember[$message[1];yes;$guildID]-=OwO=-$authorID;-=OwO=-]

    $onlyIf[$message[1]!=;{newEmbed:{color:ff3333}{title:❌ Wrong usage!}{description:Wrong usage of the command \`ban\`, Try using
\`\`\`
$getGuildVar[prefix]ban\`\`\`}{footer:Required permission = BanMembers / Admin}}]
    $onlyIf[$checkContains[$userPerms[$authorID];kickmembers;admin]==true;{newEmbed:{color:ff3333}{title:❌ No permissions!}{description:You do not have the right permission to use this command}{footer:Required permission = BanMembers / Admin}}]
    $onlyIf[$getGuildVar[ignored]==false;{newEmbed:{color:ff3333}{title:❌ Channel Ignored!}{description:An admin of this server choose to ignore this channel.}}]
    $onlyIf[$getGuildVat[ban]==enabled;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Ban\` Command.}}]
    $onlyIf[$getGuildVar[moderation]==enabled;{newEmbed:{color:ff3333}{title:❌ Module Disabled!}{description:An admin of this server chose to disable the \`Moderation\` module.}}]
	$onlyIf[$checkContains[$toLowerCase[$userPerms[$clientID]];admin;banmem]==true;{newEmbed:{color:ff3333}{title:❌ Missing perms!}{description:I am missing the banMembers permissions in this server.}}]
    $onlyIf[$guildID!=;{newEmbed:{color:ff3333}{title:❌ Something went wrong!}{description:Please use this command in a server.}}]

    $onlyForIDs[705306248538488947;]
`})


/*
Text Split Map

1 = User Found In Message 1
2 = AuthorID
*/
