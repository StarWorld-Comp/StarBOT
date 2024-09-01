module.exports = [{
  name: "onStickerCreate",
  type: "stickerCreate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$description[На сервер добавлен новый стикер]
$addField[Кто добавил;$getAuditLogs[$guildID;;1;90;**{executor.username}** ({executor.mention})];false]
$addField[Стикер;$newEmoji[url];false]
$footer[Id гильдии#COLON# $newEmoji[guild];$guildIcon]
$addTimestamp`
}];