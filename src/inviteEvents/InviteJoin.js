module.exports = {
  name: "inviteJoin",
  type: "inviteJoin",
  channel: "$getGuildVar[logs;$guildID]",
  code: `
<@$get[user]> только что присоединился. Он был приглашён **$username[$get[inviter]]**, который теперь пригласил **$inviterInfo[$guildID;$get[inviter];counts.real]** участников.
$let[inviter;$getObjectProperty[info;inviter]]
$let[user;$getObjectProperty[info;memberId]]
$createObject[info;$inviteEventInfo]`
}