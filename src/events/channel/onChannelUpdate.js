module.exports = [{
  name: "onChannelUpdate",
  type: "channelUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldChannel[name]!=$newChannel[name]]
$sendMessage[{newEmbed:{description:Название канала **$newChannel[name]** (<@$newChannel[id]>) было изменено}{field:Новое название:$newChannel[name]:true}{field:Старое название:$oldChannel[name]:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}
{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]3
$endif

$if[$newChannel[nsfw]!=$oldChannel[nsfw]]
$sendMessage[{newEmbed:{description:Статус **NSFW** в канале **$newChannel[name]** (<@$newChannel[id]>) был изменен}{field:Новый статус:$replaceText[$replaceText[$newChannel[nsfw];true;Включён];false;Выключен]:true}
{field:Старый статус:$replaceText[$replaceText[$oldChannel[nsfw];true;Включён];false;Выключен]:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endif

$if[$newChannel[parentID]!=$oldChannel[parentID]]
$sendMessage[{newEmbed:{description:Категория канала **$newChannel[name]** (<@$newChannel[id]>) была изменена}
$if[$newChannel[parentName]!=]
{field:Новая категория:$newChannel[parentName]:true}
$endif
$if[$oldChannel[parentName]!=]
{field:Старая категория:$oldChannel[parentName]:true}
$endif
{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endif

$if[$newChannel[position]!=$oldChannel[position]]
$sendMessage[{newEmbed:{description:Позиция канала **$newChannel[name]** (<@$newChannel[id]>) была изменена}{field:Новая позиция:$newChannel[position]:true}{field:Старая позиция:$oldChannel[position]:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endif

$if[$newChannel[topic]!=$oldChannel[topic]]
$sendMessage[{newEmbed:{description:Тема канала **$newChannel[name]** (<@$newChannel[id]>) была изменена}
$if[$newChannel[topic]!=]
{field:Новая тема:$newChannel[topic]:true}
$endif
$if[$oldChannel[topic]!=]
{field:Старая тема:$oldChannel[topic]:true}
$endif
{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endif

$if[$newChannel[type]!=$oldChannel[type]]
$sendMessage[{newEmbed:{description:Тип канала **$newChannel[name]** (<@$newChannel[id]>) был изменен}{field:Новый тип:$advancedReplaceText[$newChannel[type];0;Текствой канал;2;Голосовой канал;5;Канал объявлений]:true}{field:Старый тип:$advancedReplaceText[$oldChannel[type];0;Текствой канал;2;Голосовой канал;5;Канал объявлений]:true}
{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endif

$if[$newChannel[slowmode]!=$oldChannel[slowmode]]
$sendMessage[{newEmbed:{description:Медленный режим в канале **$newChannel[name]** (<@$newChannel[id]>) был изменен}
$if[$newChannel[slowmode]!=]
{field:Новое значение:$newChannel[slowmode]:true}
$endif
$if[$oldChannel[slowmode]!=]
{field:Старое значение:$oldChannel[slowmode]:true}
$endif
{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:false}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endif

$if[$newChannel[permsAllowed]!=&&$newChannel[permsDenied]!=&&$newChannel[permsAllowed]!=$newChannel[permsDenied]]
$sendMessage[{newEmbed:{description:Разрешения канала **$newChannel[name]** (<@$newChannel[id]>) были изменены}{field:Добавлены разрешения:**$newChannel[permsAllowed]**:true}{field:Удалены разрешения:**$newChannel[permsDenied]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:true}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]

$elseif[$newChannel[permsAllowed]==&&$newChannel[permsDenied]!=]
$sendMessage[{newEmbed:{description:Разрешения канала **$newChannel[name]** (<@$newChannel[id]>) были изменены}{field:Удалены разрешения:**$newChannel[permsDenied]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:true}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endelseif

$elseif[$newChannel[permsAllowed]!=&&$newChannel[permsDenied]==]
$sendMessage[{newEmbed:{description:Разрешения канала **$newChannel[name]** (<@$newChannel[id]>) были изменены}{field:Добавлены разрешения:**$newChannel[permsDenied]**:true}{field:Кто изменил:$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})]:true}{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:#2b2d31}{timestamp}}]
$endelseif
$endif`
}];