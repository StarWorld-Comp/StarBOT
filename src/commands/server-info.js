module.exports = [{
  name: "server-info",
  type: "interaction", 
  prototype: "slash",
  $if: "old",
  code: `$interactionReply[{newEmbed:{thumbnail:$guildIcon[$guildID]}{title:$guildName[$guildID]}{url:$guildIcon[$guildID]}
$if[$guildDescription!=]
{description:$guildDescription[$guildID]}
$endif{field:Основное:<\:owner\:1264889832929366036> Владелец\: <@$guildOwnerID> ($guildOwnerID)\n<\:verified\:1264891273173794887> Уровень проверки\: $advancedReplaceText[$guildVerificationLevel;0;Отсутствует;1;Низкий;2;Средний;3;Высокий;4;Самый высокий]\n<\:paint\:1264891544272375809> Создан\: <t#COLON#$truncate[$math[($guildID/4194304+1420070400000)/1000]]> (<t\:$truncate[$math[($guildID/4194304+1420070400000)/1000]]\:R>)\n<\:channel\:1264887693796446313> Всего $channelCount[$guildID;all] каналов\n<\:next\:1264891911320371315> <\:channel\:1264887693796446313> Текстовые каналы\: $channelCount[$guildID;Text]\n<\:next\:1237693046548729917> <\:voice\:1264889736821084231> Голосовые каналы\: $channelCount[$guildID;Voice]\n<\:next\:1237693046548729917> <\:channel_stage\:1282310640110665739> Трибуны\: $channelCount[$guildID;Stage]\n <\:next\:1237693046548729917> <\:channel_annonce\:1282310576206512168> Новостные каналы\: $channelCount[$guildID;Announcement]\n<:next2:1237692996137521162> <\:category\:1264887725597659148> Категории\: $channelCount[$guildID;Category]}{field:Пользователи:<\:people\:1264890987566731315> Всего $membersCount[$guildID;all;true] пользователей\n<\:next\:1264891911320371315> Ботов: $guildBotCount[$guildID]\n<\:next2\:1264891709956034681> Участников\: $membersCount[$guildID;all;false]}{field:Бусты:<\:boost\:1264887058590072903> Уровень: **$guildBoostLevel** (бустов — $guildBoostCount)\n$getGuildBoosters[$guildID;{mention} {timestamp};\n]}{footer:Запрос от $username[$authorID]:$authorAvatar}{timestamp}{color:#2b2d31}
$if[$guildBanner[$guildID]!=]{image:$guildBanner[$guildID]}
$endif}]`
}];