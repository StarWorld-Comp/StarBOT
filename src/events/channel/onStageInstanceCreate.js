module.exports = [{
  name: "onStageInstanceCreate",
  type: "stageInstanceCreate",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
$sendMessage[{newEmbed:{description:Трибуна канала $newChannel[name] открыта}{field:Тематика:$newChannel[topic]}{footer:Id канала#COLON# $newChannel[id]}{timestamp}}]`
}];