module.exports = [{
  name: "onEmojiUpdate",
  type: "emojiUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[На сервер обновлён эмодзи]
$addField[Кто обновил;$getAuditLogs[$guildID;;1;61;**{executor.username}** ({executor.mention})];false]
$addField[После;$newEmoji[string];true]
$addField[До;$oldEmoji[string];true]
$footer[Id гильдии#COLON# $newEmoji[guild];$guildIcon]
$addTimestamp`
}];