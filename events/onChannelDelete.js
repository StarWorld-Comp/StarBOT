module.exports = [{
  name: "onChannelDelete",
  type: "channelDelete",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$oldChannel[type]==0]
$description[Удалён текстовой канал]
$addField[Название;**$oldChannel[name]** (<#$oldChannel[id]>);false]
$if[$oldChannel[parentName]!=]
$addField[Категория;**$oldChannel[parentName]**;false]
$else
$endif
$footer[Id канала#COLON# $oldChannel[id]]
$addTimestamp

$elseif[$oldChannel[type]==2]
$description[Удалён голосовой канал]
$addField[Название;**$oldChannel[name]** (<#$oldChannel[id]>);false]
$if[$oldChannel[parentName]!=]
$addField[Категория;**$oldChannel[parentName]**;false]
$else
$endif
$footer[Id канала#COLON# $oldChannel[id]]
$addTimestamp
$endelseif

$elseif[$oldChannel[type]==4]
$description[Удалена категория]
$addField[Название;**$oldChannel[name]**;false]
$footer[Id категории#COLON# $oldChannel[id]]
$addTimestamp
$endelseif

$elseif[$oldChannel[type]==15]
$description[Удалён форум]
$if[$oldChannel[parentName]!=]
$addField[Категория;**$oldChannel[parentName]**;false]
$else
$endif
$addField[Название;**$oldChannel[name]** (<#$oldChannel[id]>);false]
$footer[Id форума#COLON# $oldChannel[id]]
$addTimestamp
$endelseif

$elseif[$oldChannel[type]==5]
$description[Удалён канал объявлений]
$if[$oldChannel[parentName]!=]
$addField[Категория;**$oldChannel[parentName]**;false]
$else
$endif
$addField[Название;**$oldChannel[name]** (<#$oldChannel[id]>);false]
$footer[Id канала#COLON# $oldChannel[id]]
$addTimestamp
$endelseif

$elseif[$oldChannel[type]==13]
$description[Удалена трибуна]
$if[$oldChannel[parentName]!=]
$addField[Категория;**$oldChannel[parentName]**;false]
$else
$endif
$addField[Название;**$oldChannel[name]** (<#$oldChannel[id]>);false]
$footer[Id трибуны#COLON# $oldChannel[id]]
$addTimestamp
$endelseif
$endif`
}];