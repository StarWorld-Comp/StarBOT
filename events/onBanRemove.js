module.exports = [{
  name: "onBanRemove",
  type: "banRemove",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$thumbnail[$authorAvatar]
$description[Участник **$username** (<@$authorID>) был разбанен]
$addField[Модератор;$getAuditLogs[$guildID;;1;23;**{executor.username}** ({executor.mention})];false]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#85ea8a]
$addTimestamp`
}];