module.exports = [{
  name: "pay",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Перевод участнику:attachment://pay.png}{thumbnail:$userAvatar[$get[user]]}{description:**$username[$authorID]** перевёл **$username[$get[user]]** **$numberSeparator[$get[percent]; ]** <#COLON#cheap#COLON#1275714873677975553>.}{field:<#COLON#comission#COLON#1245987195064680469> Комиссия:На этом сервере комиссия составляет **5 %**:false}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:pay.png:./src/icons/pay.png}]

$setUserVar[balance;$sum[$getUserVar[cash;$get[user];$guildID;eco];$getUserVar[bank;$get[user];$guildID;eco]];$get[user];$guildID;eco]
$setUserVar[balance;$sum[$getUserVar[cash;$authorID;$guildID;eco];$getUserVar[bank;$authorID;$guildID;eco]];$authorID;$guildID;eco]
$setUserVar[cash;$sum[$getUserVar[cash;$get[user];$guildID;eco];$get[percent]];$get[user];$guildID;eco]
$setUserVar[cash;$sub[$getUserVar[cash;$authorID;$guildID;eco];$slashOption[amount]];$authorID;$guildID;eco]

$onlyIf[$getUserVar[cash;$authorID;$guildID;eco]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У вас не достаточно средств для перевода.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете переводить самому себе.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[percent;$truncate[$math[$slashOption[amount]-$slashOption[amount]/100*5]]]
$let[user;$slashOption[user]]`
}];