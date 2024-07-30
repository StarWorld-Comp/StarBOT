module.exports = [{
  name: "onInviteCreate",
  type: "inviteCreate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$description[Создана новая ссылка приглашения]
$addField[Кто создал;$getAuditLogs[$guildID;;1;40;**{executor.username}** ({executor.mention})];false]
$addTimestamp`
}];