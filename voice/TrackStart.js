module.exports = [{
    name: "TrackStart",
    channel: "$channelID",
    type: "trackStart",
    $if: "old",
    code: `
$setGuildVar[music_msg;$get[music_msg];$guildID]
$setGuildVar[music_author;$songInfo[artist];$guildID]
$setGuildVar[music_thumbnail;$songInfo[thumbnail];$guildID]
$setGuildVar[music_title;$songInfo[title];$guildID]
$setGuildVar[music_duration;$songInfo[duration];$guildID]
$wait[5s]
$let[music_msg;$sendMessage[{newEmbed:{author:$songInfo[artist]}{title:$songInfo[title]}{thumbnail:$songInfo[thumbnail]}
{field:Продолжительность:\`$digitalFormat[$getCurrentTrackDuration] / $digitalFormat[$songInfo[duration]]\`:false}{field:Громкость:<#COLON#volumeadd#COLON#1265939201300631573> $volume[get]%:true}
$if[$loopStatus!=none]
{field:Режим повтора:$replaceText[$replaceText[$loopStatus;queue;Очередь];song;Текущий трек]:true}
$endif
{field:Информация:_Ссылка на автора_#COLON# $songInfo[channelUrl]\n_Просмотров_#COLON# $numberSeparator[$songInfo[views]]\n_Платформа_#COLON# $songInfo[formattedPlatforms]\n_Позиция в очереди_#COLON# $songInfo[position]:false}
{color:#2e3d9f}{timestamp}}{actionRow:{selectMenu:bass:Выберите нужное:1:1:false:{stringInput:Сбросить:reset-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Низкий:low-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Средний:medium-bass:Нажмите, чтобы применить этот эффект:false}{stringInput:Высокий:hard-bass:Нажмите, чтобы применить этот эффект:false}}}{actionRow:
{button::secondary:what:true:🔀}
{button::secondary:previous:false:1265938711149936680}
{button::secondary:pause:false:1265939040834949161}
{button::secondary:skip:false:1265938817706102886}
{button::secondary:loop:false:1265939089086091265}}{actionRow:
{button::secondary:old:false:1265938523027013652}
{button::secondary:stop:false:1265938932424769609}
{button::secondary:-volume:false:1265938464180797481}
{button::secondary:+volume:false:1265939201300631573}};true]]
$resetFilter
$suppressErrors`
}];