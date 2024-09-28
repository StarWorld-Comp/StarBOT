module.exports = [{
  name: "onEntitlementCreate",
  type: "entitlementCreate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: ``
}];