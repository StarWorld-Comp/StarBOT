module.exports = [{
  name: "onBanAdd",
  type: "banAdd",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$thumbnail[$authorAvatar]
$description[Участник **$username** (<@$authorID>) был забанен]
$if[$getBanReason[$guildID;$authorID]!=]
$addField[Причина;$getBanReason[$guildID;$authorID];false]
$endif
$addField[Модератор;$getAuditLogs[$guildID;;1;22;**{executor.username}** ({executor.mention})];false]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#ff686b]
$addTimestamp`
}];