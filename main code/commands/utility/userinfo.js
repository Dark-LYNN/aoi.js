module.exports = ({
    name: "userinfo",
    aliases: ["user","user-info","whois","who-is"],
    description: "show info about a user",
    usage: "$getGuildVar[prefix]userinfo <user>",
    code: `
		$color[$getGuildVar[color]] 
		$title[<:members:806446159169191936> **User Info:** $userName[$splitText[1]]]
		$thumbnail[$userAvatar[$splitText[1]]]
		$description[**Name:** $userTag[$splitText[1]]
**ID:** \`$splitText[1]\`
**Badges:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$splitText[1]];Hypesquad;<a:HypeSquad:827486466388262952>];HypeSquadOnlineHouse1;<:HypeSquad_Bravery:814570553960431667>];HypeSquadOnlineHouse2;<:HypeSquad_Brilliance:814571231831523369>];HypeSquadOnlineHouse3;<:HypeSquad_Balance:814572312762384434>];PremiumEarlySupporter;<:Early_Support:814579000809750539>];BugHunterLevel1;<:BugHunter_LvL1:814574048624246806>];BugHunterLevel2;<:Bug_Hunter_Lvl2:911322882615947275>];VerifiedDeveloper;<:Verified_Developer:814575436976619530>];CertifiedModerator;<:Discord_Moderator:911322400799469569>];ActiveDeveloper;<a:active_developer:1069295095725162576>];Staff;<:Discord_Staff:911321888670765086>];VerifiedBot;<a:active_developer:1069295095725162576>];none;<:Spacer:868199633992683570>]
		$addField[Created at:;$advancedTextSplit[$creationDate[$splitText[1]];,;1]
		$onlyIf[$userExists[$splitText[1]]==true;]

		$textSplit[$findUser[$message;true]-=-$authorID;-=-]
		$onlyForIDs[705306248538488947;]

`})