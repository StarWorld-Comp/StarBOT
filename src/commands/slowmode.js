module.exports = [{
  name: "slowmode",
  type: "interaction",
  prototype: "slash",
  code: `$interactionReply[{newEmbed:{author:Медленный режим:attachment://slowmode.png}{thumbnail:$guildIcon}{field:Модератор:$username (<@$authorID>):true}
{field:Задержка:$FormatTime[$slashOption[duration]]:true}{field:Канал:<#$channelID>:false}{color:#2b2d31}{timestamp}}{attachment:slowmode.png:./src/icons/slowmode.png}]
$slowmode[$slashOption[duration];$channelID]

$onlyPerms[managechannels;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[managechannels;{newEmbed:{color:#f1090b}{description:У меня не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$suppressErrors[{newEmbed:{color:#f1090b}{description:Вы неверно указали формат времени.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]`
}];