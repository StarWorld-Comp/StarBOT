module.exports = [{
  name: "give",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Выдача игровой валюты}{thumbnail:$userAvatar[$get[user]]}{description:Вы успешно выдали **$numberSeparator[$slashOption[amount]; ]** <#COLON#cheap#COLON#1275714873677975553> участнику <@$slashOption[user]>.}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]

$setUserVar[balance;$sum[$getUserVar[cash;$get[user];$guildID;eco];$getUserVar[bank;$get[user];$guildID;eco]];$get[user];$guildID;eco]
$setUserVar[$get[bank];$sum[$getUserVar[$get[bank];$get[user];$guildID;eco];$slashOption[amount]];$get[user];$guildID;eco]

$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[bank;$replaceText[$replaceText[$checkCondition[$slashOption[bank]==];true;cash];false;$slashOption[bank]]]
$let[user;$findMember[$slashOption[user];true]]`
}];