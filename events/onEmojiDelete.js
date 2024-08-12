module.exports = [{
  name: "onEmojiDelete",
  type: "emojiDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[С сервера удалён эмодзи]
$addField[Кто удалил;$getAuditLogs[$guildID;;1;62;**{executor.username}** ({executor.mention})];false]
$addField[Эмодзи;$oldEmoji[string];false]
$footer[Id гильдии#COLON# $oldEmoji[guild];$guildIcon]
$addTimestamp`
}];