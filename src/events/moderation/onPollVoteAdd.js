module.exports = [{
  name: "onPollVoteAdd",
  type: "pollVoteAdd",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: ``
}];