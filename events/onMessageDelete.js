module.exports = [{
  name: "onMessageDelete",
  type: "messageDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[[Сообщение](https#COLON#//discord.com/channels/$guildID/$channelID/$messageID) было удалено]
$addField[Канал;**$channelName[$channelID]** (<#$channelID>);true]
$addField[Автор;**$username[$authorID]** (<@$authorID>);true]
$addField[Удалённое сообщение:;\`\`\`$message\`\`\`;false]
$footer[Id сообщения: $messageID]
$color[#ff6d96]
$addTimestamp
$onlyIf[$message!=]`
}];