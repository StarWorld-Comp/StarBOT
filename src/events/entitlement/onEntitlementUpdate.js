module.exports = [{
  name: "onEntitlementUpdate",
  type: "entitlementUpdate",
  channel: "$getGuildVar[logs;$guildID]",
  $if: "old",
  code: ``
}];