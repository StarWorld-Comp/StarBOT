module.exports = [{
    name: "TrackEnd",
    channel: "$channelID",
    type: "trackEnd",
    $if: "old",
    code: `
$editMessage[$getGuildVar[music_msg;$guildID];{newEmbed:{author:$getGuildVar[music_author;$guildID]:$getGuildVar[music_authoricon;$guildID]}{title:$getGuildVar[music_title;$guildID]}{url:$getGuildVar[url;$guildID]}{thumbnail:$getGuildVar[music_thumbnail;$guildID]}{field:Статус:Прослушано ($digitalFormat[$getGuildVar[music_duration;$guildID]]) — $getGuildVar[requester;$guildID]:false}{timestamp}{color:#2e3d9f}};$channelID]`
}];