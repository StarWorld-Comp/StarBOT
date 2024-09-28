module.exports = [{
  name: "onMessageDelete",
  type: "messageDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:[Сообщение](https#COLON#//discord.com/channels/$guildID/$channelID/$messageID) было удалено}{field:Удалённое сообщение#COLON#:\`\`\`$message\`\`\`:false}{field:Автор:**$username[$authorID]** (<@$authorID>):true}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{footer:Id сообщения#COLON# $messageID}{color:#ff6d96}{timestamp}}]
$onlyIf[$message!=]
$onlyIf[$isBot[$authorID]!=true]`
}];