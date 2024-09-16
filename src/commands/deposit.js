module.exports = {
  name: "deposit",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Внесение наличных:attachment://deposit.png}{thumbnail:$authorAvatar}{description:**$username[$authorID]** положил **$numberSeparator[$slashOption[amount]; ]** <#COLON#cheap#COLON#1275714873677975553> в банк.}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}{attachment:deposit.png:./src/icons/deposit.png}]
$setUserVar[cash;$sub[$getUserVar[cash;$authorID];$slashOption[amount]];$authorID]
$setUserVar[bank;$sum[$getUserVar[bank;$authorID];$slashOption[amount]];$authorID]

$onlyIf[$getUserVar[cash;$authorID]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У вас не достаточно наличных для внесения в банк.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
};