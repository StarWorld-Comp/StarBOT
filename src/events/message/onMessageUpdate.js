module.exports = [{
  name: "onMessageUpdate",
  type: "messageUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:[Сообщение]($messageURL[$messageID;$channelID]) было отредактировано}{field:Старое содержимое#COLON#:\`\`\`$oldMessage\`\`\`:false}{field:Новое содержимое#COLON#:\`\`\`$message\`\`\`:false}{field:Автор:**$username[$authorID]** (<@$authorID>):true}{field:Канал:**$channelName[$channelID]** (<#$channelID>):true}{footer:Id сообщения#COLON# $messageID}{color:#60afff}{timestamp}}]
$onlyIf[$oldMessage!=&&$message!=&&$message!=$oldMessage&&$isBot[$authorID]!=true]`
}];