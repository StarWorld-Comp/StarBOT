module.exports = [{
  name: "clear",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionReply[{newEmbed:{author:Очистка:$get[author.icon]}{thumbnail:$get[avatar]}{field:Модератор:$username (<@$authorID>):true}{field:Кол-во очищено:$slashOption[amount]:true}{field:Канал:<#$get[channel]>:false}{field:Участник:$replaceText[$replaceText[$checkCondition[$get[filter]==everyone];true;Все];false;$slashOption[user]]:false}{color:#2b2d31}{timestamp}}]
$clear[$get[channel];$slashOption[amount];$get[filter];true]

$onlyPerms[managemessages;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[managemessages;{newEmbed:{color:#f1090b}{description:У бота не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1244633573370105896/data-cleaning_6.png?ex=6655d2d8&is=66548158&hm=42ca75867b1bf733de675a666a8ac23baeb07b27a17d47b61ecff7ea07d36729&]
$let[avatar;$guildIcon[$guildID]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[filter;$replaceText[$replaceText[$checkCondition[$slashOption[user]==];true;everyone];false;user:$slashOption[user]]]
$let[channel;$replaceText[$replaceText[$checkCondition[$slashOption[channel]==];true;$channelID];false;$slashOption[channel]]]`
}];