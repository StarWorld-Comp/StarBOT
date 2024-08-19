module.exports = {
  name: "inviteError",
  type: "inviteError",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `При попытке отобразить приглашения участника произошла ошибка ☹️.`
}