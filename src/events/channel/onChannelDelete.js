module.exports = [{
  name: "onChannelDelete",
  type: "channelDelete",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `$if[$oldChannel[type]==0]
$sendMessage[{newEmbed:{description:Удалён текстовой канал}{field:Название:**$oldChannel[name]** (<#$oldChannel[id]>):true}
$if[$oldChannel[parentName]!=]
{field:Категория:**$oldChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $oldChannel[id]:$guildIcon}{color:Red}{timestamp}}]

$elseif[$oldChannel[type]==2]
$sendMessage[{newEmbed:{description:Удалён голосовой канал}{field:Название:**$oldChannel[name]** (<#$oldChannel[id]>):true}
$if[$oldChannel[parentName]!=]
{field:Категория:**$oldChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $oldChannel[id]:$guildIcon}{color:Red}{timestamp}}]
$endelseif

$elseif[$oldChannel[type]==4]
$sendMessage[{newEmbed:{description:Удалёна категория}{field:Название:**$oldChannel[name]** (<#$oldChannel[id]>):true}
{footer:Id категории#COLON# $oldChannel[id]:$guildIcon}{color:Red}{timestamp}}]
$endelseif

$elseif[$oldChannel[type]==15]
$sendMessage[{newEmbed:{description:Удалён форум}{field:Название:**$oldChannel[name]** (<#$oldChannel[id]>):true}
$if[$oldChannel[parentName]!=]
{field:Категория:**$oldChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $oldChannel[id]:$guildIcon}{color:Red}{timestamp}}]
$endelseif

$elseif[$oldChannel[type]==5]
$sendMessage[{newEmbed:{description:Удалён канал обьявлений}{field:Название:**$oldChannel[name]** (<#$oldChannel[id]>):true}
$if[$oldChannel[parentName]!=]
{field:Категория:**$oldChannel[parentName]**:true}
$endif
{footer:Id канала#COLON# $oldChannel[id]:$guildIcon}{color:Red}{timestamp}}]
$endelseif

$elseif[$oldChannel[type]==13]
$sendMessage[{newEmbed:{description:Удалена трибуна}{field:Название:**$oldChannel[name]** (<#$oldChannel[id]>):true}
$if[$oldChannel[parentName]!=]
{field:Категория:**$oldChannel[parentName]**:true}
$endif
{footer:Id трибуны#COLON# $oldChannel[id]:$guildIcon}{color:Red}{timestamp}}]
$endelseif
$endif`
}];