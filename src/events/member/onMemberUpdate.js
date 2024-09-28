module.exports = [{
  name: "onMemberUpdate",
  type: "memberUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$newMember[removedRoles]!=&&$newMember[addedRoles]==]
$sendMessage[{newEmbed:{description:Роли участника **$username** (<@$authorID>) были изменены}{field:Удалены роли:**$newMember[removedRoles]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;25;**{executor.username}** ({executor.mention})]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]

$elseif[$newMember[addedRoles]!=&&$newMember[removedRoles]==]
$sendMessage[{newEmbed:{description:Роли участника **$username** (<@$authorID>) были изменены}{field:Добавлены роли:**$newMember[addedRoles]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;25;**{executor.username}** ({executor.mention})]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endelseif

$elseif[$newMember[removedRoles]!=&&$newMember[addedRoles]!=&&$newMember[removedRoles]!=$newMember[addedRoles]]
$sendMessage[{newEmbed:{description:Роли участника **$username** (<@$authorID>) были изменены}{field:Добавлены роли:**$newMember[addedRoles]**:true}{field:Удалены роли:**$newMember[removedRoles]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;25;**{executor.username}** ({executor.mention})]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endelseif
$endif

$if[$newMember[avatarUrl]!=$oldMember[avatarUrl]]
$sendMessage[{newEmbed:{description:Аватар участника **$username** (<@$authorID>) был изменен}
$if[$newMember[avatarUrl]!=]
{field:Новый аватар:[Клик]($newMember[avatarUrl]):true}{image:$newMember[avatarUrl]}
$endif
$if[$oldMember[avatarUrl]!=]
{field:Старый аватар:[Клик]($oldMember[avatarUrl]):true}
$endif{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif

$if[$newMember[highestRoleID]!=$oldMember[highestRoleID]]
$sendMessage[{newEmbed:{description:Высшая роль пользователя **$username** (<@$authorID>) была изменена}{field:Новая роль:<@&$newMember[highestRoleID]>:true}{field:Старая роль:<@&$oldMember[highestRoleID]>:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#01e5d6}{timestamp}}]
$endif

$if[$oldMember[nick]!=$newMember[nick]]
$sendMessage[{newEmbed:{thumbnail:$authorAvatar}{description:Никнейм участника **$username** (<@$authorID>) был изменен}
$if[$newMember[nick]!=]
{field:Новый никнейм#COLON#:$newMember[nick]:true}
$endif
$if[$oldMember[nick]!=]
{field:Старый никнейм#COLON#:$oldMember[nick]:true}
$endif
$if[$getAuditLogs[$guildID;;1;24;{executor.id}]!=$authorID]
{field:Кто изменил:$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})]:true}
$endif{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#7f9bff}{timestamp}}]
$endif


$if[$newMember[newPermissions]!=&&$newMember[removedPermissions]!=&&$newMember[newPermissions]!=$newMember[removedPermissions]]
$sendMessage[{newEmbed:{thumbnail:$authorAvatar}{description:Разрешения участника **$username** (<@$authorID>) были изменены}{field:Добавлены разрешения:**$newMember[newPermissions]**:true}{field:Удалены разрешения:**$newMember[removedPermissions]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#7f9bff}{timestamp}}]

$elseif[$newMember[newPermissions]==&&$newMember[removedPermissions]!=]
$sendMessage[{newEmbed:{thumbnail:$authorAvatar}{description:Разрешения участника **$username** (<@$authorID>) были изменены}{field:Удалены разрешения:**$newMember[removedPermissions]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#7f9bff}{timestamp}}]
$endelseif

$elseif[$newMember[newPermissions]!=&&$newMember[removedPermissions]==]
$sendMessage[{newEmbed:{thumbnail:$authorAvatar}{description:Разрешения участника **$username** (<@$authorID>) были изменены}{field:Добавлены разрешения:**$newMember[newPermissions]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;24;**{executor.username}** ({executor.mention})]:true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#7f9bff}{timestamp}}]
$endelseif
$endif`
}];