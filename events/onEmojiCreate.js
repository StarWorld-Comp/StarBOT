module.exports = [{
  name: "onEmojiCreate",
  type: "emojiCreate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[На сервер добавлен новый эмодзи]
$addField[Кто добавил;$getAuditLogs[$guildID;;1;60;**{executor.username}** ({executor.mention})];false]
$addField[Эмодзи;$newEmoji[string];false]
$footer[Id гильдии#COLON# $newEmoji[guild];$guildIcon]
$addTimestamp`
}];