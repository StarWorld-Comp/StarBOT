module.exports = [{
  name: "slowmode",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Медленный режим:$get[author.icon]}{thumbnail:$get[avatar]}{field:Модератор:$username (<@$authorID>):true}
{field:Задержка:$slashOption[time]:true}
{field:Причина:$get[reason]:false}{field:Канал:<#$get[channel]>:false}{color:#2b2d31}{timestamp}}]
$slowmode[$slashOption[time];$get[channel]]

$onlyPerms[managechannels;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyClientPerms[managechannels;{newEmbed:{color:#f1090b}{description:У бота не достаточно прав.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле причина не может превышать 512.}{author:Ошибка:$get[error.icon]}{timestamp}}{ephemeral}{interaction}]

$let[author.icon;https://cdn.discordapp.com/attachments/1162658570609901639/1244636746206150706/alarm-clock.png?ex=6655d5cc&is=6654844c&hm=0e76e47a1595ff43d9332d80c3fbbd8f730ecc298a04975a3bb6570bdaf247a3&]
$let[avatar;$guildIcon[$guildID]]
$let[error.icon;https://cdn.discordapp.com/attachments/1162658570609901641/1244579676584935465/776404508515368972.png?ex=6655a0a6&is=66544f26&hm=a068d0186245402f33b93a145dc53178d854e0b9eeec437571f0110a56038c59&]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$let[channel;$replaceText[$replaceText[$checkCondition[$slashOption[channel]==];true;$channelID];false;$slashOption[channel]]]`
}];