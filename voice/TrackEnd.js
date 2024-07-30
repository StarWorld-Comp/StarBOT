module.exports = [{
    name: "TrackEnd",
    channel: "$channelID",
    type: "trackEnd",
    code: `$editMessage[$getGuildVar[music_msg;$guildID];{newEmbed:{author:$getGuildVar[music_author;$guildID]}{title:$getGuildVar[music_title;$guildID]}{thumbnail:$getGuildVar[music_thumbnail;$guildID]}{field:Статус:Прослушано - ($digitalFormat[$getGuildVar[music_duration;$guildID]]):false}{timestamp}{color:#2e3d9f}};$channelID]
$suppressErrors`
}];