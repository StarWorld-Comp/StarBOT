module.exports = [{
    name: "mutes",
    type: "interaction",
    prototype: "slash",
    $if: "old",
    code: `
$interactionReply[{newEmbed:{thumbnail:$guildIcon}{title:Наказанные участники}{timestamp}{color:$get[platform]}{description:$timeoutList[{key} {duration} {id}]}}]
$let[platform;$if[$or[$userPlatform[$authorID;$guildID]==web;$userPlatform[$authorID;$guildID]==desktop]==true]
#2b2d31
$elseif[$or[$userPlatform[$authorID;$guildID]==mobile;$userPlatform[$authorID;$guildID]==none]==true]
#26272f
$endelseif
$else
#2b2d31
$endif]
`
}];