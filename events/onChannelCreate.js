module.exports = [{
  name: "onChannelCreate",
  type: "channelCreate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$newChannel[type]==0]
$description[Создан новый текстовой канал]
$addField[Название;**$newChannel[name]** (<#$newChannel[id]>);true]
$if[$newChannel[parentName]!=]
$addField[Категория;**$newChannel[parentName]**;true]
$else
$endif
$footer[Id канала#COLON# $newChannel[id]]
$addTimestamp

$elseif[$newChannel[type]==2]
$description[Создан новый голосовой канал]
$addField[Название;**$newChannel[name]** (<#$newChannel[id]>);true]
$if[$newChannel[parentName]!=]
$addField[Категория;**$newChannel[parentName]**;true]
$else
$endif
$footer[Id канала#COLON# $newChannel[id]]
$addTimestamp
$endelseif

$elseif[$newChannel[type]==4]
$description[Создана новая категория]
$addField[Название;**$newChannel[name]**;false]
$footer[Id категории#COLON# $newChannel[id]]
$addTimestamp
$endelseif

$elseif[$newChannel[type]==15]
$description[Создан новый форум]
$if[$newChannel[parentName]!=]
$addField[Категория;**$newChannel[parentName]**;true]
$else
$endif
$addField[Название;**$newChannel[name]** (<#$newChannel[id]>);true]
$footer[Id форума#COLON# $newChannel[id]]
$addTimestamp
$endelseif

$elseif[$newChannel[type]==5]
$description[Создан новый канал объявлений]
$if[$newChannel[parentName]!=]
$addField[Категория;**$newChannel[parentName]**;false]
$else
$endif
$addField[Название;**$newChannel[name]** (<#$newChannel[id]>);false]
$footer[Id канала#COLON# $newChannel[id]]
$addTimestamp
$endelseif

$elseif[$newChannel[type]==13]
$description[Создана новая трибуна]
$if[$newChannel[parentName]!=]
$addField[Категория;**$newChannel[parentName]**;false]
$else
$endif
$addField[Название;**$newChannel[name]** (<#$newChannel[id]>);false]
$footer[Id трибуны#COLON# $newChannel[id]]
$addTimestamp
$endelseif
$endif`
}];