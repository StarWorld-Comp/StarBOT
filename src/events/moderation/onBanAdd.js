module.exports = [{
  name: "onBanAdd",
  type: "banAdd",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$sendMessage[{newEmbed:{thumbnail:$authorAvatar}{description:Участник **$username** (<@$authorID>) был забанен}
$if[$getBanReason[$guildID;$authorID]!=]
{field:Причина:$getBanReason[$guildID;$authorID]:false}
$endif
{field:Модератор:$getAuditLogs[$guildID;;1;22;**{executor.username}** ({executor.mention})]:false}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ff686b}{timestamp}}]`
}];