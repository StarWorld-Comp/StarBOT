module.exports = [{
  name: "onReactionRemoveEmoji",
  type: "reactionRemoveEmoji",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: ``
}];