module.exports = [{
  name: "onMessageDelete",
  type: "messageDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[[Сообщение](https#COLON#//discord.com/channels/$guildID/$channelID/$messageID) было удалено]
$addField[Канал;**$channelName[$channelUsed]** (<#$channelUsed>);true]
$addField[Автор;**$username** (<@$oldMsgData[authorId]>);true]
$addField[Удалённое сообщение:;\`\`\`$message\`\`\`;false]
$footer[Id сообщения: $messageID]
$color[#ff6d96]
$addTimestamp
$onlyIf[$message!=]`
}];