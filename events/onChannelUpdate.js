module.exports = [{
  name: "onChannelUpdate",
  type: "channelUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldChannel[name]!=$newChannel[name]]
$description[Название канала **$newChannel[name]** (<@$newChannel[id]>) было изменено]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})];false]
$addField[Новое название;$newChannel[name];true]
$addField[Старое название;$oldChannel[name];true]
$footer[Id канала#COLON# $newChannel[id];$guildIcon]
$addTimestamp
$elseif[$newChannel[nsfw]!=$oldChannel[nsfw]]
$description[Статус **NSFW** в канале **$newChannel[name]** (<@$newChannel[id]>) был изменен]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})];false]
$addField[Новый статус;$replaceText[$replaceText[$newChannel[nsfw];true;Включён];false;Выключен];true]
$addField[Старый статус;$replaceText[$replaceText[$newChannel[nsfw];true;Включён];false;Выключен];true]
$footer[Id канала#COLON# $newChannel[id];$guildIcon]
$addTimestamp
$endelseif
$elseif[$newChannel[parentID]!=$oldChannel[parentID]]
$description[Категория канала **$newChannel[name]** (<@$newChannel[id]>) была изменена]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})];false]
$addField[Новая категория;$replaceText[$replaceText[$checkCondition[$newChannel[parentName]!=];true;$oldChannel[parentName]];false;ㅤ];true]
$addField[Старая категория;$replaceText[$replaceText[$checkCondition[$oldChannel[parentName]!=];true;$oldChannel[parentName]];false;ㅤ];true]
$footer[Id канала#COLON# $newChannel[id];$guildIcon]
$addTimestamp
$endelseif
$elseif[$newChannel[position]!=$oldChannel[position]]
$description[Позиция канала **$newChannel[name]** (<@$newChannel[id]>) была изменена]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})];false]
$addField[Новая позиция;$newChannel[position];true]
$addField[Старая позиция;$oldChannel[position];true]
$footer[Id канала#COLON# $newChannel[id];$guildIcon]
$addTimestamp
$endelseif
$elseif[$newChannel[topic]!=$oldChannel[topic]]
$description[Тема канала **$newChannel[name]** (<@$newChannel[id]>) была изменена]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})];false]
$addField[Новая тема;$replaceText[$replaceText[$checkCondition[$newChannel[topic]!=];true;$newChannel[topic]];false;ㅤ];true]
$addField[Старая тема;$replaceText[$replaceText[$checkCondition[$oldChannel[topic]!=];true;$oldChannel[topic]];false;ㅤ];true]
$footer[Id канала#COLON# $newChannel[id];$guildIcon]
$addTimestamp
$endelseif
$elseif[$newChannel[type]!=$oldChannel[type]]
$description[Тип канала **$newChannel[name]** (<@$newChannel[id]>) был изменен]
$addField[Кто изменил;$getAuditLogs[$guildID;;1;11;**{executor.username}** ({executor.mention})];false]
$addField[Новый тип;$advancedReplaceText[$newChannel[type];0;Текствой канал;2;Голосовой канал;5;Канал объявлений];true]
$addField[Старый тип;$advancedReplaceText[$oldChannel[type];0;Текствой канал;2;Голосовой канал;5;Канал объявлений];true]
$footer[Id канала#COLON# $newChannel[id];$guildIcon]
$addTimestamp
$endelseif
$endif`
}];