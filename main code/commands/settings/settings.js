module.exports = [{
    name: "settings",
    aliases: ['setting'],
    description: "show the settings",
    usage: "$getGuildVar[prefix]settings",
    $if: "old",
    code: `	
	$if[$guildID==]
sorry this command only works in servers at this moment.
	$else
		$color[$getGuildVar[color]]
		$title[What settings do you want to change.]
		$description[**User-Settings**: change your personal settings.
**Server-Settings:** Change the settings of "$serverName"
\`This setting is only available if you have the "Admin" permission\`
\`Or if you have the "server-settings" akira permission\`]
		
		$addButton[1;Close;danger;Close;false]
		$if[$checkContains[$userPerms[$authorID;, ;$guildID];administrator]==true]
			$addButton[1;Server-Settings;secondary;ServerSettings;false]
		$else
			$addButton[1;Server-Settings;secondary;ServerSettings;true]
		$endif
		$addButton[1;User-Settings;primary;UserSettingsOne;false]
	$endif
`}, {
	name: "UserSettingsOne",
	type: "interaction",
    prototype: "button",
	code: `
		$interactionUpdate[dewdw]
`} , {
	name: "ServerSettings",
	type: "interaction",
    prototype: "button",
	code: `
		$interactionUpdate[de]
`}, {
	name: "Close",
	type: "interaction",
    prototype: "button",
	code: `
		$interactionUpdate[Uwpdate]
`}]
