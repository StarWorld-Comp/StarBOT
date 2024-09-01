module.exports = [{
  name: "give",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Выдача игровой валюты}{thumbnail:$userAvatar[$get[user]]}{description:Вы успешно выдали **$numberSeparator[$slashOption[amount]; ]** <#COLON#cheap#COLON#1275714873677975553> участнику <@$slashOption[user]>.}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$setUserVar[balance;$sum[$getUserVar[cash;$get[user]];$getUserVar[bank;$get[user]]];$get[user];$guildID;main]

$setUserVar[$get[bank];$sum[$getUserVar[$get[bank];$get[user]];$slashOption[amount]];$get[user]]

$onlyPerms[administrator;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[bank;$replaceText[$replaceText[$checkCondition[$slashOption[bank]==];true;cash];false;$slashOption[bank]]]
$let[user;$findUser[$slashOption[user];true]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
`
}];