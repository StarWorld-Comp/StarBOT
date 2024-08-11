module.exports = [{
  name: "onMessageUpdate",
  type: "messageUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$description[[Сообщение]($messageURL[$messageID;$channelID]) было отредактировано]
$addField[Канал;**$channelName[$channelID]** (<#$channelID>);true]
$addField[Автор;**$username[$authorID]** (<@$authorID>);true]
$addField[Новое содержимое:;\`\`\`$message\`\`\`;false]
$addField[Старое содержимое:;\`\`\`$oldMessage\`\`\`;false]
$footer[Id сообщения: $messageID]
$color[#60afff]
$addTimestamp
$onlyIf[$oldMessage!=]
$onlyIf[$isBot[authorID]!=true]`
}];