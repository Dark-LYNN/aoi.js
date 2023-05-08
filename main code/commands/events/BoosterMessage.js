module.exports = [{
    name: "$alwaysExecute",
    $if: "old",
    code: `
        $if[$messageType==8]
            $if[$splitText[5]==false]
                $useChannel[$splitText[6]]
                $channelSendMessage[$splitText[6];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $else
                $useChannel[$splitText[6]]
                $color[$splitText[16]]
                $thumbnail[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[17];%author.avatar%;$splitText[18];-1];%author.banner%;$splitText[19];-1];%server.icon%;$splitText[20];-1];%server.banner%;$splitText[21];-1];%server.splash%;$splitText[22];-1]]
                $title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostTitle];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
                $description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $endif
        $elseif[$messageType==9]
            $if[$splitText[5]==false]
                $useChannel[$splitText[6]]
                $channelSendMessage[$splitText[6];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $else
                $useChannel[$splitText[6]]
                $color[$splitText[16]]
                $footer[Server is now level 1]
                $thumbnail[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[17];%author.avatar%;$splitText[18];-1];%author.banner%;$splitText[19];-1];%server.icon%;$splitText[20];-1];%server.banner%;$splitText[21];-1];%server.splash%;$splitText[22];-1]]
                $title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostTitle];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
                $description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $endif
        $endelseif
        $elseif[$messageType==10]
        $if[$splitText[5]==false]
            $useChannel[$splitText[6]]
            $channelSendMessage[$splitText[6];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
        $else
            $useChannel[$splitText[6]]
            $color[$splitText[16]]
            $footer[Server is now level 2]
            $thumbnail[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[17];%author.avatar%;$splitText[18];-1];%author.banner%;$splitText[19];-1];%server.icon%;$splitText[20];-1];%server.banner%;$splitText[21];-1];%server.splash%;$splitText[22];-1]]
            $title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostTitle];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
        $endif
        $endelseif
        $elseif[$messageType==11]
            $if[$splitText[5]==false]
                $useChannel[$splitText[6]]
                $channelSendMessage[$splitText[6];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $else
                $useChannel[$splitText[6]]
                $color[$splitText[16]]
                $footer[Server is now level 3]
                $thumbnail[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[17];%author.avatar%;$splitText[18];-1];%author.banner%;$splitText[19];-1];%server.icon%;$splitText[20];-1];%server.banner%;$splitText[21];-1];%server.splash%;$splitText[22];-1]]
                $title[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostTitle];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
                $description[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[boostMessage];%author%;$username[$splitText[1]];-1];%author.id%;$splitText[1];-1];%author.mention%;<@$splitText[1]>;-1];%role%;$roleName[$splitText[2]];-1];%role.id%;$splitText[2];-1];%role.mention%;<@&$splitText[2]>;-1];%channel%;$channelName[$splitText[3]];-1];%channel.id%;$splitText[3];-1];%channel.mention%;<#$splitText[3]>;-1];%boosts%;$splitText[7];-1];%boost.level%;$splitText[8];-1];%server.icon%;$splitText[9];-1];%server.name%;$guildName[$splitText[10]];-1];%server.channel%;$splitText[11];-1];%time%;<t:$splitText[4]:D>;-1];%time.ago%;<t:$splitText[4]:R>;-1];%time.stamp%;$splitText[4];-1];%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1];%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1];%time.day%;$splitText[13];-1];%time.month%;$splitText[12];-1];%time.year%;$splitText[14];-1];%time.week$;$splitText[15];-1]]
            $endif
        $endelseif
        $endif
    
        $onlyIf[$getGuildVar[eventBoost]!=false;]
        $onlyIf[$guildID!=;]
    
        $textSplit[$authorID-=--=-$highestRole[$authorID]-=--=-$channelID-=--=-$round[$math[$datestamp/1000]]-=--=-$getGuildVar[boostEmbed]-=--=-$getGuildVar[boostChannel]-=--=-$guildBoostCount-=--=-$guildBoostLevel-=--=-$guildIcon-=--=-$guildId-=--=-$systemchannelid-=--=-$month-=--=-$date-=--=-$year-=--=-$day-=--=-$getGuildVar[boostColor]-=--=-$getGuildVar[boostImage]-=--=-$userAvatar[$authorID]-=--=-$userBanner-=--=-$guildIcon-=--=-$guildBanner-=--=-guildSplash;-=--=-]
    `}]
    
    
    /*
    
    $replaceText[
        $replaceText[
            $replaceText[
                $replaceText[
                    $replaceText[
                        $replaceText[
                            $replaceText[
                                $replaceText[
                                    $replaceText[
                                        $replaceText[
                                            $replaceText[
                                                $replaceText[
                                                    $replaceText[
                                                        $replaceText[
                                                            $replaceText[
                                                                $replaceText[
                                                                    $replaceText[
                                                                        $replaceText[
                                                                            $replaceText[
                                                                                $replaceText[
                                                                                    $replaceText[
                                                                                        $replaceText[$getGuildVar[boostMessage];
                                                                                        %author%;$username[$splitText[1]];-1]
                                                                                    ;%author.id%;$splitText[1];-1]
                                                                                ;%author.mention%;<@$splitText[1]>;-1]
                                                                            ;%role%;$roleName[$splitText[2]];-1]
                                                                        ;%role.id%;$splitText[2];-1]
                                                                    ;%role.mention%;<@&$splitText[2]>;-1]
                                                                ;%channel%;$channelName[$splitText[3]];-1]
                                                            ;%channel.id%;$splitText[3];-1]
                                                        ;%channel.mention%;<#$splitText[3]>;-1]
                                                    ;%boosts%;$splitText[7];-1]
                                                ;%boost.level%;$splitText[8];-1]
                                            ;%server.icon%;$splitText[9];-1]
                                        ;%server.name%;$guildName[$splitText[10]];-1]
                                    ;%server.channel%;$splitText[11];-1]
                                ;%time%;<t:$splitText[4]:D>;-1]
                            ;%time.ago%;<t:$splitText[4]:R>;-1]
                        ;%time.stamp%;$splitText[4];-1]
                        ;%time.mdy%;$splitText[12] $splitText[13] $splitText[14];-1]
                    ;%time.dmy%;$splitText[13] $splitText[12] $splitText[14];-1]
                ;%time.day%;$splitText[13];-1]
            ;%time.month%;$splitText[12];-1]
        ;%time.year%;$splitText[14];-1]
    ;%time.week$;$splitText[15];-1]
    
    
    
    
    */