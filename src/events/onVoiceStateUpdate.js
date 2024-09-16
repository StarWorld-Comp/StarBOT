module.exports = [{
  name: "onVoiceStateUpdate",
  type: "voiceStateUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
$if[$oldState[mute]==false&&$newState[mute]==true]
$description[У участника **$username[$authorID]** (<@$authorID>) был выключен микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[e5aca0]
$elseif[$oldState[deaf]==false&&$newState[deaf]==true]
$description[У участника **$username[$authorID]** (<@$authorID>) были выключены наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[e5aca0]
$endelseif
$elseif[$oldState[mute]==true&&$newState[mute]==false]
$description[У участника **$username[$authorID]** (<@$authorID>) включен микрофон в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[ae84e8]
$endelseif
$elseif[$oldState[deaf]==true&&$newState[deaf]==false]
$description[У участника **$username[$authorID]** (<@$authorID>) включены наушники в канале **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[ae84e8]
$endelseif
$elseif[$and[$oldState[id]==null;$newState[id]!=null]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) зашёл в голосовой канал **$channelName[$voiceID[$authorID]]** (<#$voiceID>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[ae84e8]
$endelseif
$elseif[$and[$oldState[id]!=;$newState[id]==]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) покинул голосовой канал **$channelName[$oldState[id]]** (<#$oldState[id]>).]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[e5aca0]
$endelseif
$elseif[$and[$oldState[id]!=$newState[id];$oldState[id]!=;$newState[id]!=]==true]
$description[Участник **$username[$authorID]** (<@$authorID>) перешёл в другой голосовой канал]
$addField[Предыдущий канал\:;**$channelName[$oldState[id]]** (<#$oldState[id]>);true]
$addField[Канал;**$channelName[$voiceID[$authorID]]** (<#$voiceID>);true]
$footer[Id участника: $authorID;$authorAvatar]
$addTimestamp
$color[e5aca0]
$endelseif
$endif
$onlyIf[$isBot[$authorID]!=true]`
}];