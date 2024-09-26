module.exports = [{
  name: "onEntitlementDelete",
  type: "entitlementDelete",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: ``
}];