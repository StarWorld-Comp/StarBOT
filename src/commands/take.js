module.exports = [{
  name: "take",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Снятие игровой валюты}{thumbnail:$userAvatar[$get[user]]}{description:Вы успешно забрали **$numberSeparator[$slashOption[amount]; ]** <#COLON#cheap#COLON#1275714873677975553> участника <@$authorID>.}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]

$setUserVar[balance;$sum[$getUserVar[cash;$get[user];$guildID;eco];$getUserVar[bank;$get[user];$guildID;eco]];$get[user];$guildID;eco]
$setUserVar[$get[bank];$sub[$getUserVar[$get[bank];$get[user];$guildID;eco];$slashOption[amount]];$get[user];$guildID;eco]

$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$getUserVar[$get[bank];$get[user];$guildID;eco]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У участника недостаточно средств.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[bank;$replaceText[$replaceText[$checkCondition[$slashOption[bank]==];true;cash];false;$slashOption[bank]]]
$let[user;$slashOption[user]]`
}];