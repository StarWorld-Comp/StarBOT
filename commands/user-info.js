module.exports = [{
  name: "user-info",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{thumbnail:$userAvatar[$get[user]]}{title:$username[$get[user]] (Id#COLON# $get[user])}{url:https://discord.com/users/$get[user]}{timestamp}{color:$get[color]}{description:$advancedReplaceText[$userBadges[$get[user]; ];HypeSquadOnlineHouse1;<:HypeSquadBravery:1264887049219997737>;ActiveDeveloper;<:ActiveDeveloper:1264885898697506949>;VerifiedDeveloper;<:VerifiedDeveloper:1264927216614244495>;Partner;<:Partner:1264891468988809318>;HypeSquadOnlineHouse2;<:HypeSquadBalance:1264887108045111348>;HypeSquadOnlineHouse3;<:HypeSquadBrilliance:1264888811435851787>;BugHunterLevel1;<:BugHunterLevel1:1264888740258512966>;BugHunterLevel2;<:BugHunterLevel2:1264887805130047529>;PremiumEarlySupporter;<:PremiumEarlySupporter:1264891075747909715>;Hypesquad;<:hype_squad:
1264892160155586583>;CertifiedModerator;<:CertifiedModerator:1264887708145418311>;Staff;<:staff:
1264890302636757037>;none;]}{field:Присоединился:<t#COLON#$truncate[$math[$memberJoinDate[$get[user];$guildID]/1000]]> (<t#COLON#$truncate[$math[$memberJoinDate[$get[user];$guildID]/1000]]#COLON#R>):true}{field:Аккаунт создан:<t#COLON#$truncate[$math[($get[user]/4194304+1420070400000)/1000]]> (<t#COLON#$truncate[$math[($get[user]/4194304+1420070400000)/1000]]#COLON#R>):true}{field:Роли:$userRoles[$get[user];$guildID;mention; ]:false}$nonEscape[$if[$userBanner[$get[user]]!=null;{image:$userBanner[$get[user];4096]}]}]

$let[color;$if[$userBannerColor[$get[user]]!=;$userBannerColor[$get[user]];#2b2d31]]
$let[user;$findUser[$slashOption[user];true]]`

}];