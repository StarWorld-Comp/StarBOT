module.exports = [{
  name: "onStickerUpdate",
  type: "stickerUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[На сервере обновлён стикер]
$addField[Кто обновил;$getAuditLogs[$guildID;;1;91;**{executor.username}** ({executor.mention})];false]
$addField[После;$newEmoji[string];true]
$addField[До;$oldEmoji[string];true]
$footer[Id гильдии#COLON# $newEmoji[guild];$guildIcon]
$addTimestamp`
}];