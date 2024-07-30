module.exports = [{
    name: "QueueEnd",
    channel: "$channelID",
    type: "queueEnd",
    code: `$title[Пустая очередь]
$description[Я покинул голосовой канал так как очередь закончилась.]
$color[#2e3d9f]
$leaveVC[$guildID]
$joinVC[$voiceID[$clientID];yes;no;yes;default;no]`
}];