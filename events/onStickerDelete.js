module.exports = [{
  name: "onStickerDelete",
  type: "stickerDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[На сервере удалён стикер]
$addField[Кто удалил;$getAuditLogs[$guildID;;1;92;**{executor.username}** ({executor.mention})];false]
$addField[Стикер;$oldEmoji[string];false]
$footer[Id гильдии#COLON# $oldEmoji[guild];$guildIcon]
$addTimestamp`
}];