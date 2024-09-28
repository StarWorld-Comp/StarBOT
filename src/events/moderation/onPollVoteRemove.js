module.exports = [{
  name: "onPollVoteRemove",
  type: "pollVoteRemove",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: ``
}];