module.exports = [{
    name: "TrackEnd",
    channel: "$channelID",
    type: "trackEnd",
    $if: "old",
    code: `
$editMessage[$getGuildVar[music_msg;$guildID;music];{newEmbed:{author:$getMessageVar[author;$getGuildVar[music_msg;$guildID;music];music]:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID;music];music]}{title:$getMessageVar[mustitle;$getGuildVar[music_msg;$guildID;music];music]}{url:$getMessageVar[url;$getGuildVar[music_msg;$guildID;music];music]}{thumbnail:$getMessageVar[thumbnail;$getGuildVar[music_msg;$guildID;music];music]}{field:Статус:Прослушано ($replaceText[$digitalFormat[$getMessageVar[duration;$getGuildVar[music_msg;$guildID;music];music]];00:;;1]) — $getMessageVar[requester;$getGuildVar[music_msg;$guildID;music];music]:false}{timestamp}{color:#2e3d9f}};$channelID]
$onlyIf[$getMessageVar[status_mus;$getGuildVar[music_msg;$guildID;music];music]!=stop]`
}];