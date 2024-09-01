module.exports = {
  name: "inviteLeave",
  type: "inviteLeave",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: `
**$username[$get[user]]** покинул сервер. Он был приглашён **$username[$get[inviter]]**.
$let[inviter;$getObjectProperty[info;inviter]]
$let[user;$getObjectProperty[info;memberId]]
$createObject[info;$inviteEventInfo]`
}