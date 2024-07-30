module.exports = [{
  name: "onMessageUpdate",
  type: "messageUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$description[[Сообщение]($messageURL[$messageID;$channelID]) было отредактировано]
$addField[Канал;**$channelName[$channelID]** (<#$channelID>);true]
$addField[Автор;**$username** (<@$authorID>);true]
$addField[Новое содержимое:;\`\`\`$message\`\`\`;false]
$addField[Старое содержимое:;\`\`\`$oldMessage $oldMsgData[attachments]\`\`\`;false]
$footer[Id сообщения: $messageID]
$color[#60afff]
$addTimestamp
$onlyIf[$oldMessage!=]
$onlyIf[$isBot[authorID]!=true]`
}];