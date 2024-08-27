module.exports = {
  name: "pay",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Перевод участнику:$get[author.icon]}{thumbnail:$userAvatar[$get[user]]}{description:**$username[$authorID]** перевёл **$username[$get[user]]** **$numberSeparator[$get[percent]]** ютиков.}{field:<#COLON#comission#COLON#1245987195064680469> Комиссия:На этом сервере комиссия составляет **5 %**:false}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$setUserVar[balance;$sum[$getUserVar[cash;$get[user]];$getUserVar[bank;$get[user]]];$get[user];$guildID]

$setUserVar[balance;$sum[$getUserVar[cash;$authorID;$getUserVar[bank;$authorID];$authorID;$guildID]

$setUserVar[cash;$sum[$getUserVar[cash;$get[user]];$get[percent]];$get[user]]
$setUserVar[cash;$sub[$getUserVar[cash;$authorID];$slashOption[amount]];$authorID]

$onlyIf[$getUserVar[cash;$authorID]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У вас не достаточно средств для перевода.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете переводить самому себе.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[percent;$truncate[$math[$slashOption[amount]-$slashOption[amount]/100*5]]]
$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1245282098575573063/929826756653875300.png?ex=66582ed4&is=6656dd54&hm=1e4161b9ac397a9fd98612c1a6b9b53b9c9ff62e61b51e5ad36eca799bf5bd2e&]
$let[user;$slashOption[user]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
`
};