module.exports = [{
  name: "withdraw",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Снятие средств:attachment://withdraw.png}{thumbnail:$authorAvatar}{description:**$username[$authorID]** забрал **$numberSeparator[$slashOption[amount]; ]** <#COLON#cheap#COLON#1275714873677975553> из банка.}{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:withdraw.png:./src/icons/withdraw.png}]

$setUserVar[cash;$sum[$getUserVar[cash;$authorID];$slashOption[amount]];$authorID]
$setUserVar[bank;$sub[$getUserVar[bank;$authorID];$slashOption[amount]];$authorID]

$onlyIf[$getUserVar[bank;$authorID]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У вас не достаточно средств в банке.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];