module.exports = [{
    name: "QueueEnd",
    channel: "$channelID",
    type: "queueEnd",
    code: `
$editMessage[$getGuildVar[music_msg;$guildID;music];{newEmbed:{author:$getMessageVar[author;$getGuildVar[music_msg;$guildID;music];music]:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID;music];music]}{title:$getMessageVar[mustitle;$getGuildVar[music_msg;$guildID;music];music]}{url:$getMessageVar[url;$getGuildVar[music_msg;$guildID;music];music]}{thumbnail:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID;music];music]}{field:Статус:Прослушано ($digitalFormat[$getMessageVar[duration;$getGuildVar[music_msg;$guildID;music];music]]) — $getMessageVar[requester;$getGuildVar[music_msg;$guildID;music];music]:false}{timestamp}{color:#2e3d9f}}{newEmbed:{title:Пустая очередь}{description:Я покинул канал, потому что в очереди нет треков.}{color:#2e3d9f}};$channelID]
$leaveVC[$guildID]
$joinVC[$voiceID[$clientID];true;false;true;default]
$wait[1s]
$onlyIf[$getMessageVar[status_mus;$getGuildVar[music_msg;$guildID;music];music]!=stop]`
}];