module.exports = [{
  name: "onMessageDeleteBulk",
  type: "messageDeleteBulk",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$channelSendMessage[$getGuildVar[logs;$guildID];{newEmbed:{description:Очищено **$getTextSplitLength $textSplit[$bulk[ids;,];,]** сообщений}{field:Канал:**$channelName[$channelID]** (<#$channelID>):false}{color:#ff6d96}{timestamp}}{file:$creationDate[$channelID;ms]$random[13;18237871;false;true].log:$bulk[messages]}]`
}];