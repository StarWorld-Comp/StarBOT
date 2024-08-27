module.exports = [{
    name: "QueueEnd",
    channel: "$channelID",
    type: "queueEnd",
    code: `$title[Пустая очередь]
$description[Я покинул канал, потому что в очереди нет треков.]
$color[#2e3d9f]
$leaveVC[$guildID]
$joinVC[$voiceID[$clientID];;no;yes;default;no]`
}];