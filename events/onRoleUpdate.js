module.exports = [{
  name: "onRoleUpdate",
  type: "roleUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$description[Роль **$newRole[name]** (<@&$newRole[id]>) была обновлена]
$addField[Кто обновил;$getAuditLogs[$guildID;;1;31;**{executor.username}** ({executor.mention})]]
$addField[Участников;$newRole[memberCount];false]
$addField[Позиция;$newRole[position];true]
$addField[Разрешения;**$newRole[permissions]**;true]
$footer[Id роли: $newRole[id];$guildIcon]
$color[$newRole[hexColor]]
$addTimestamp`
}]