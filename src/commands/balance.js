module.exports = [{
  name: "balance",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionReply[{newEmbed:{author:Баланс участника $username[$get[user]]:attachment://balance.png}{thumbnail:$userAvatar[$get[user]]}{description:<:money:1264891994694750270> **Наличные:** $numberSeparator[$getUserVar[cash;$get[user]]; ] <#COLON#cheap#COLON#1275714873677975553>\n🏛 **В банке:** $numberSeparator[$getUserVar[bank;$get[user]]; ] <#COLON#cheap#COLON#1275714873677975553>\n🗂 **Общий баланс:** $numberSeparator[$getUserVar[balance;$get[user]]; ] <#COLON#cheap#COLON#1275714873677975553>\n\n<#COLON#level#COLON#1275718216701706271> **Уровень:** $getUserVar[level;$get[user];$guildID] \`\[$getUserVar[xp;$get[user];$guildID]/$getUserVar[nextLevelXP;$get[user];$guildID]\]\`}
$if[$or[$getCooldownTime[2h;user;work;$findUser[$slashOption[user];true]]==0;$getCooldownTime[7d;user;weekly;$findUser[$slashOption[user];true]]==0;$getCooldownTime[13h;user;daily;$findUser[$slashOption[user];true]]==0;$getCooldownTime[12h;user;timely;$findUser[$slashOption[user];true]]==0;$getCooldownTime[12d;user;monthly;$findUser[$slashOption[user];true]]==0]==true]
{field:<#COLON#next_earn#COLON#1264891618268549192> Доступные награды:
$if[$getCooldownTime[2h;user;work;$findUser[$slashOption[user];true]]==0]
* Подработка (\`/work\`)
$endif
$if[$getCooldownTime[12h;user;timely;$findUser[$slashOption[user];true]]==0]
* Регулярный бонус (\`/timely\`)
$endif
$if[$getCooldownTime[13h;user;daily;$findUser[$slashOption[user];true]]==0]
* Ежедневный бонус (\`/daily\`)
$endif
$if[$getCooldownTime[7d;user;weekly;$findUser[$slashOption[user];true]]==0]
* Еженедельный бонус (\`/weekly\`)
$endif
$if[$getCooldownTime[12d;user;monthly;$findUser[$slashOption[user];true]]==0]
* Ежемесячный бонус (\`/monthly\`)
$endif:true}
$endif
$if[$getUserVar[thiefs;$findUser[$slashOption[user];true];$guildID]!=0]
{field:<#COLON#thief#COLON#1275715835004063784> Ограбления:За все свое время участник совершил $getUserVar[thiefs;$findUser[$slashOption[user];true];$guildID] ограблений#COLON# $if[$getUserVar[success_thiefs;$findUser[$slashOption[user];true];$guildID]!=0]
* $getUserVar[success_thiefs;$findUser[$slashOption[user];true];$guildID] успешных
$endif
$if[$getUserVar[fail_thiefs;$findUser[$slashOption[user];true];$guildID]!=0]
* $getUserVar[fail_thiefs;$findUser[$slashOption[user];true];$guildID] провальных
$endif
$if[$getUserVar[jail_thiefs;$findUser[$slashOption[user];true];$guildID]!=0]
* $getUserVar[jail_thiefs;$findUser[$slashOption[user];true];$guildID] ареста
$endif:true}
$endif
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:balance.png:./src/icons/balance.png}]
$let[user;$findMember[$slashOption[user];true]]`
}];