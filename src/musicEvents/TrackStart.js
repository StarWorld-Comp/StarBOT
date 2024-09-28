module.exports = [{
    name: "TrackStart",
    channel: "$channelID",
    type: "trackStart",
    $if: "old",
    code: `
$setMessageVar[duration;$songInfo[duration];$getGuildVar[music_msg;$guildID]]
$setMessageVar[url;$songInfo[url];$getGuildVar[music_msg;$guildID]]
$setMessageVar[author;$songInfo[artist];$getGuildVar[music_msg;$guildID]]
$setMessageVar[requester;$songInfo[requester.user.username];$getGuildVar[music_msg;$guildID]]
$setMessageVar[thumbnail;$songInfo[thumbnail];$getGuildVar[music_msg;$guildID]]
$setMessageVar[mustitle;$songInfo[title];$getGuildVar[music_msg;$guildID]]
$setGuildVar[music_msg;$get[music_msg];$guildID]
$let[music_msg;$sendMessage[{newEmbed:{author:$songInfo[artist]:$songInfo[thumbnail]}{title:<#COLON#YouTube#COLON#1286673861072523360> $songInfo[title]}{url:$songInfo[url]}{thumbnail:$songInfo[thumbnail]}
{field:Продолжительность:<#COLON#pause#COLON#1265939040834949161> $progressBar[<:start1:1288104034200195164>;<:start:1288101548483678268>;<:fullmiddle:1288102012117844088>;<:middle10:1288101627127140352>;<:end1:1288103987169595505>;<:end:1288101993688076330>;$getCurrentTrackDuration;$songInfo[duration];10] \`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;<:loop:1265939089086091265> Очередь];song;<:loop1:1273953475918692402> Текущий трек]:true}
$endif
{field:Информация:_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}
{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
$if[$queueLength<=2]
{button::secondary:shuffle:true:1273953395799228488}
$else
{button::secondary:shuffle:false:1273953395799228488}
$endif
$if[$songInfo[position]==0]
{button::secondary:previous:true:1265938711149936680}
$else
{button::secondary:previous:false:1265938711149936680}
$endif
{button::secondary:pause:false:1265939040834949161}
$if[$sum[$songInfo[position];1]==$queueLength]
{button::secondary:skip:true:1265938817706102886}
$else
{button::secondary:skip:false:1265938817706102886}
$endif
{button::secondary:loop:false:1265939089086091265}}{actionRow:
{button::secondary:seek:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}
{button::secondary:+volume:false:1265939201300631573}
{button::secondary:queue:false:1273156315212025877}};true]]
$resetFilter
$suppressErrors
$wait[1s]`
}];