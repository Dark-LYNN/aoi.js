module.exports = ({
    name: "update",
    aliases: ["refresh", "restart", "reload"],
    code: `
        $color[$getVar[color]]
        $description[Successfully update all commands.]

        $addButton[1;Added: $get[add];success;0;true;✔️]
        $addButton[1;Total: $commandsCount;secondary;1;true;📃]
        $let[add;$sub[$commandsCount;$get[count]]]
        $updateCommands
        $let[count;$commandsCount]

        $onlyForIDs[705306248538488947;392609934744748032;]
`})