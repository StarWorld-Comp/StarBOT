module.exports = [{
  name: "onChannelCreate",
  type: "channelCreate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$newChannel[type]==0]
$sendMessage[{newEmbed:{description:Создан новый текстовой канал}{field:Название:**$newChannel[name]** (<#$newChannel[id]>):true}
$if[$newChannel[parentName]!=]
{field:Категория:**$newChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:Green}{timestamp}}]

$elseif[$newChannel[type]==2]
$sendMessage[{newEmbed:{description:Создан новый голосовой канал}{field:Название:**$newChannel[name]** (<#$newChannel[id]>):true}
$if[$newChannel[parentName]!=]
{field:Категория:**$newChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:Green}{timestamp}}]
$endelseif

$elseif[$newChannel[type]==4]
$sendMessage[{newEmbed:{description:Создана новая категория}{field:Название:**$newChannel[name]**:true}{footer:Id категории#COLON# $newChannel[id]}{timestamp}}]
$endelseif

$elseif[$newChannel[type]==15]
$sendMessage[{newEmbed:{description:Создан новый форум}{field:Название:**$newChannel[name]** (<#$newChannel[id]>):true}
$if[$newChannel[parentName]!=]
{field:Категория:**$newChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:Green}{timestamp}}]
$endelseif

$elseif[$newChannel[type]==5]
$sendMessage[{newEmbed:{description:Создан новый канал обьявлений}{field:Название:**$newChannel[name]** (<#$newChannel[id]>):true}
$if[$newChannel[parentName]!=]
{field:Категория:**$newChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $newChannel[id]:$guildIcon}{color:Green}{timestamp}}]
$endelseif

$elseif[$newChannel[type]==13]
$sendMessage[{newEmbed:{description:Создана новая трибуна}{field:Название:**$newChannel[name]** (<#$newChannel[id]>):true}
$if[$newChannel[parentName]!=]
{field:Категория:**$newChannel[parentName]**:true}
$endif
{footer:Id трибуны#COLON# $newChannel[id]:$guildIcon}{color:Green}{timestamp}}]
$endelseif
$endif`
}];