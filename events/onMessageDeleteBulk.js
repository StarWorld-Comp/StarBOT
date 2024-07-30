module.exports = [{
  name: "onMessageDeleteBulk",
  type: "messageDeleteBulk",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$createFile[$bulk[messages];$creationDate[$channelID;ms]$random[13;18237871;false;true].log]
$description[Очищено **$getTextSplitLength $textSplit[$bulk[ids;,];,]** сообщений]
$addField[Канал;**$channelName[$channelID]** (<#$channelID>);false]
$color[ff6d96]
$addTimestamp`
}];