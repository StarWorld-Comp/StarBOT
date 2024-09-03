module.exports = [{
  name: "onMemberUpdate",
  type: "memberUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$and[$oldMember[removedRoles]!=;$newMember[addedRoles]==]==true]
$description[Роли участника **$username** (<@$authorID>) были изменены]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;25;**{executor.username}** ({executor.mention})];true]
$addField[Удалены роли;**$oldMember[removedRoles]**;true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#01e5d6]
$addTimestamp
$elseif[$and[$newMember[addedRoles]!=;$oldMember[removedRoles]==]==true]
$description[Роли участника **$username** (<@$authorID>) были изменены]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;25;**{executor.username}** ({executor.mention})];true]
$addField[Добавлены роли;**$newMember[addedRoles]**;true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#01e5d6]
$addTimestamp
$endelseif
$elseif[$and[$oldMember[removedRoles]!=;$newMember[addedRoles]!=;$oldMember[removedRoles]!=$newMember[addedRoles]]==true]
$description[Роли участника **$username** (<@$authorID>) были изменены]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;25;**{executor.username}** ({executor.mention})];true]
$addField[Удалены роли;**$oldMember[removedRoles]**;true]
$addField[Добавлены роли;**$newMember[addedRoles]**;true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#01e5d6]
$addTimestamp
$endelseif
$elseif[$oldMember[nick]!=$newMember[nick]]
$thumbnail[$authorAvatar]
$description[Никнейм участника **$username** (<@$authorID>) был изменен]
$if[$getAuditLogs[$guildID;;1;24;{executor.id}]!=$authorID]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})];true]
$endif
$addField[Новый никнейм#COLON#;$newMember[nick];true]
$addField[Старый никнейм#COLON#;$oldMember[nick];true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#7f9bff]
$addTimestamp
$endelseif
$elseif[$oldMember[removedPermissions]!=]
$thumbnail[$authorAvatar]
$description[Разрешения участника **$username** (<@$authorID>) были изменены]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})];true]
$addField[Удалённые разрешения#COLON#;$oldMember[removedPermissions];true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#7f9bff]
$addTimestamp
$endelseif
$elseif[$newMember[newPermissions]!=]
$thumbnail[$authorAvatar]
$description[Разрешения участника **$username** (<@$authorID>) были изменены]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})];true]
$addField[Добавленные разрешения#COLON#;$newMember[newPermissions];true]
$footer[Id участника#COLON# $authorID;$authorAvatar]
$color[#7f9bff]
$addTimestamp
$endelseif
$endif`
}];