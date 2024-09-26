module.exports = [{
  name: "onVoiceStateUpdate",
  type: "voiceStateUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldState[selfMute]==false&&$newState[selfMute]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) выключил микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]

$elseif[$oldState[selfDeaf]==false&&$newState[selfDeaf]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) выключил наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]
$endelseif

$elseif[$oldState[selfMute]==true&&$newState[selfMute]==false]
$description[Участник **$username[$authorID]** (<@$authorID>) включил микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[selfDeaf]==true&&$newState[selfDeaf]==false]
$description[Участник **$username[$authorID]** (<@$authorID>) включил наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[serverMute]==true&&$newState[serverMute]==false]
$description[Участнику **$username[$authorID]** (<@$authorID>) включили микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[serverMute]==false&&$newState[serverMute]==true]
$description[Участнику **$username[$authorID]** (<@$authorID>) выключили микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]
$endelseif

$elseif[$oldState[serverDeaf]==true&&$newState[serverDeaf]==false]
$description[Участнику **$username[$authorID]** (<@$authorID>) включили наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[serverDeaf]==false&&$newState[serverDeaf]==true]
$description[Участнику **$username[$authorID]** (<@$authorID>) выключили наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]
$endelseif

$elseif[$oldState[channelId]==&&$newState[channelId]!=]
$description[Участник **$username[$authorID]** (<@$authorID>) зашёл в голосовой канал **$channelName[$newState[channelId]]** (<#$newState[channelId]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[channelId]!=&&$newState[channelId]==]
$description[Участник **$username[$authorID]** (<@$authorID>) покинул голосовой канал **$channelName[$oldState[channelId]]** (<#$oldState[channelId]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]
$endelseif

$elseif[$oldState[selfVideo]==true&&$newState[selfVideo]==false]
$description[Участник **$username[$authorID]** (<@$authorID>) выключил видео в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]
$endelseif

$elseif[$oldState[selfVideo]==false&&$newState[selfVideo]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) включил видео в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[streaming]==true&&$newState[streaming]==false]
$description[Участник **$username[$authorID]** (<@$authorID>) выключил демонстрацию экрана в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#e5aca0]
$endelseif

$elseif[$oldState[streaming]==false&&$newState[streaming]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) включил демонстрацию экрана в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif

$elseif[$oldState[channelId]!=$newState[channelId]&&$oldState[channelId]!=;$newState[channelId]!=]
$description[Участник **$username[$authorID]** (<@$authorID>) перешёл в другой голосовой канал]
$addField[Предыдущий канал\:;**$channelName[$oldState[channelId]]** (<#$oldState[channelId]>);true]
$addField[Канал;**$channelName[$newState[channelId]]** (<#$newState[channelId]>);true]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[#ae84e8]
$endelseif
$endif
$onlyIf[$isBot[$authorID]!=true]`
}];