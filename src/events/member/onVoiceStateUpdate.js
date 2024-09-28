module.exports = [{
  name: "onVoiceStateUpdate",
  type: "voiceStateUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldState[selfMute]==false&&$newState[selfMute]==true]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) выключил микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]

$elseif[$oldState[selfDeaf]==false&&$newState[selfDeaf]==true]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) выключил наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]
$endelseif

$elseif[$oldState[selfMute]==true&&$newState[selfMute]==false]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) включил микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif

$elseif[$oldState[selfDeaf]==true&&$newState[selfDeaf]==false]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) включил наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif

$elseif[$oldState[serverMute]==true&&$newState[serverMute]==false]
$sendMessage[{newEmbed:{description:Участнику **$username[$authorID]** (<@$authorID>) включили микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif

$elseif[$oldState[serverMute]==false&&$newState[serverMute]==true]
$sendMessage[{newEmbed:{description:Участнику **$username[$authorID]** (<@$authorID>) выключили микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]
$endelseif

$elseif[$oldState[serverDeaf]==true&&$newState[serverDeaf]==false]
$sendMessage[{newEmbed:{description:Участнику **$username[$authorID]** (<@$authorID>) включили наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif

$elseif[$oldState[serverDeaf]==false&&$newState[serverDeaf]==true]
$sendMessage[{newEmbed:{description:Участнику **$username[$authorID]** (<@$authorID>) выключили наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]
$endelseif

$elseif[$oldState[channelId]==&&$newState[channelId]!=]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) зашёл в голосовой канал **$channelName[$newState[channelId]]** (<#$newState[channelId]>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif

$elseif[$oldState[channelId]!=&&$newState[channelId]==]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) покинул голосовой канал **$channelName[$oldState[channelId]]** (<#$oldState[channelId]>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]
$endelseif

$elseif[$oldState[selfVideo]==true&&$newState[selfVideo]==false]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) выключил видео в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]
$endelseif

$elseif[$oldState[selfVideo]==false&&$newState[selfVideo]==true]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) включил видео в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif

$elseif[$oldState[streaming]==true&&$newState[streaming]==false]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) выключил демонстрацию экрана в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#e5aca0}{timestamp}}]
$endelseif

$elseif[$oldState[streaming]==false&&$newState[streaming]==true]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) включил демонстрацию экрана в голосовом канале **$channelName[$voiceID[$authorID]]** (<#$voiceID[$authorID]>)}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}}]
$endelseif

$elseif[$oldState[channelId]!=$newState[channelId]&&$oldState[channelId]!=;$newState[channelId]!=]
$sendMessage[{newEmbed:{description:Участник **$username[$authorID]** (<@$authorID>) перешёл в другой голосовой канал}{field:Канал:**$channelName[$newState[channelId]]** (<#$newState[channelId]>):true}{field:Предыдущий канал\::**$channelName[$oldState[channelId]]** (<#$oldState[channelId]>):true}{footer:Id участника#COLON# $authorID:$authorAvatar}{color:#ae84e8}{timestamp}}]
$endelseif
$endif
$onlyIf[$isBot[$authorID]!=true]`
}];