module.exports = {
  name: "withdraw",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Снятие средств:$get[author.icon]}{thumbnail:$authorAvatar}{description:**$username[$authorID]** забрал **$numberSeparator[$slashOption[amount]]** ютиков из банка.}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$setUserVar[cash;$sum[$getUserVar[cash;$authorID];$slashOption[amount]];$authorID]
$setUserVar[bank;$sub[$getUserVar[bank;$authorID];$slashOption[amount]];$authorID]

$onlyIf[$getUserVar[bank;$authorID]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У вас не достаточно средств в банке.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1245295522579877969/929837677400948736.png?ex=66583b55&is=6656e9d5&hm=3d35efe86fbb3e2991ebc2c86c3b112ca4169bca570e3c6a272dd8ce1f560148&]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
};