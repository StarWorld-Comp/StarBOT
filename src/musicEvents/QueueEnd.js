module.exports = [{
    name: "QueueEnd",
    channel: "$channelID",
    type: "queueEnd",
    code: `
$editMessage[$getGuildVar[music_msg;$guildID];{newEmbed:{author:$getMessageVar[author;$getGuildVar[music_msg;$guildID]]:$getMessageVar[authoricon;$getGuildVar[music_msg;$guildID]]}{title:$getMessageVar[mustitle;$getGuildVar[music_msg;$guildID]]}{url:$getMessageVar[url;$getGuildVar[music_msg;$guildID]]}{thumbnail:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID]]}{field:Статус:Прослушано ($digitalFormat[$getMessageVar[duration;$getGuildVar[music_msg;$guildID]]]) — $getMessageVar[requester;$getGuildVar[music_msg;$guildID]]:false}{timestamp}{color:#2e3d9f}}{newEmbed:{title:Пустая очередь}{description:Я покинул канал, потому что в очереди нет треков.}{color:#2e3d9f}};$channelID]
$leaveVC[$guildID]
$joinVC[$voiceID[$clientID];true;false;true;default]
$wait[1s]
$onlyIf[$getMessageVar[status_mus;$getGuildVar[music_msg;$guildID]]!=stop]`
}];