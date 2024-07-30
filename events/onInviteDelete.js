module.exports = [{
  name: "onInviteDelete",
  type: "inviteDelete",
  channel: "$getGuildVar[logs;$guildID]",
  code: `$description[Удалена ссылка приглашения]
$addTimestamp`
}];