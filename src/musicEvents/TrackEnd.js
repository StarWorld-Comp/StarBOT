module.exports = [{
    name: "TrackEnd",
    channel: "$channelID",
    type: "trackEnd",
    $if: "old",
    code: `
$editMessage[$getGuildVar[music_msg;$guildID];{newEmbed:{author:$getMessageVar[author;$getGuildVar[music_msg;$guildID]]:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID]]}{title:$getMessageVar[mustitle;$getGuildVar[music_msg;$guildID]]}{url:$getMessageVar[url;$getGuildVar[music_msg;$guildID]]}{thumbnail:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID]]}{field:Статус:Прослушано ($replaceText[$digitalFormat[$getMessageVar[duration;$getGuildVar[music_msg;$guildID]]];00:;;1]) — $getMessageVar[requester;$getGuildVar[music_msg;$guildID]]:false}{timestamp}{color:#2e3d9f}};$channelID]
$onlyIf[$getMessageVar[status_mus;$getGuildVar[music_msg;$guildID]]!=stop]`
}];