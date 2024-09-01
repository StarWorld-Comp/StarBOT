module.exports = [{
  name: "onRoleCreate",
  type: "roleCreate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$description[Создана новая роль **$newRole[name]** (<@&$newRole[id]>)]
$addField[Кто создал;$getAuditLogs[$guildID;;1;30;**{executor.username}** ({executor.mention})]]
$addField[Позиция;$newRole[position];true]
$addField[Разрешения;**$newRole[permissions]**;true]
$footer[Id роли: $newRole[id];$guildIcon]
$color[$newRole[hexColor]]
$addTimestamp`
}];