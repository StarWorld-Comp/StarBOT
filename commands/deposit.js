module.exports = {
  name: "deposit",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Внесение наличных:$get[author.icon]}{thumbnail:$authorAvatar}{description:**$username[$authorID]** положил **$numberSeparator[$slashOption[amount]]** ютиков в банк.}
{color:#2b2d31}{footer:$guildName:$guildIcon}{timestamp}}]
$setUserVar[cash;$sub[$getUserVar[cash;$authorID;$guildID;main];$slashOption[amount]];$authorID;$guildID;main]
$setUserVar[bank;$sum[$getUserVar[bank;$authorID;$guildID;main];$slashOption[amount]];$authorID;$guildID;main]

$onlyIf[$getUserVar[cash;$authorID;$guildID;economy]>=$slashOption[amount];{newEmbed:{color:#f1090b}{description:У вас не достаточно наличных для внесения в банк.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]
$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1245301987159834654/928621638503784468.png?ex=6658415a&is=6656efda&hm=f0e133481203ef916027450be4a0ff1581badd2348ff020c80436444f66c4cf0&]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]`
};