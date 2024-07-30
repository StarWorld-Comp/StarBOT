module.exports = [{
  name: "onRoleDelete",
  type: "roleDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$description[Удалена роль **$oldRole[name]** (<@&$oldRole[id]>)]
$addField[Кто удалил;$getAuditLogs[$guildID;;1;32;**{executor.username}** ({executor.mention})]]
$footer[Id роли: $oldRole[id];$guildIcon]
$color[$oldRole[hexColor]]
$addTimestamp`
}];