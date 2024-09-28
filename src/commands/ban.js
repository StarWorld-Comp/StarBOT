module.exports = [{
  name: "ban",
  type: "interaction",
  prototype: "slash",
  $if: "old",
  code: `$interactionEdit[{newEmbed:{author:Блокировка:attachment://ban.png}{thumbnail:$userAvatar[$get[user]]}{field:Модератор:$username (<@$authorID>):true}{field:Причина:$get[reason]:false}{field:Заблокированный участник:$username[$get[user]] (<@$get[user]>):false}{color:#2b2d31}{timestamp}}{attachment:ban.png:./src/icons/ban.png}]

$if[$isUserDmEnabled[$slashOption[user]]==true]
$sendDM[{newEmbed:{author:Блокировка:attachment://ban.png}{description:Вы были **заблокированы** модератором **$username[$authorID]** (<@$authorID>)}{field:Причина:$get[reason1]}{timestamp}{color:#2b2d31}}{attachment:ban.png:./src/icons/ban.png}{actionRow:{button:Отправлено с $guildName[$guildID]:secondary:guild:true:📨}};$slashOption[user];false]
$let[reason1;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]
$endif
$ban[$guildID;$get[user];7;$slashOption[reason]]
$interactionReply[<a:load:1281959260049379348> Наказываю участника...]

$onlyPerms[banmembers;{newEmbed:{color:#f1090b}{description:У вас не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyClientPerms[banmembers;{newEmbed:{color:#f1090b}{description:У бота не достаточно прав.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]
 
$onlyIf[$isBanned[$guildID;$get[user]]!=true;{newEmbed:{color:#f1090b}{description:Этот пользователь уже заблокирован.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$authorID!=$get[user];{newEmbed:{color:#f1090b}{description:Вы не можете заблокировать себя.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$isBot[$get[user]]!=true;{newEmbed:{color:#f1090b}{description:Вы не можете блокировать ботов.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$onlyIf[$charCount[$slashOption[reason]]<=512;{newEmbed:{color:#f1090b}{description:Кол-во символов в поле \'причина\' не может превышать 512.}{author:Ошибка:attachment://error.png}{timestamp}}{ephemeral}{interaction}{attachment:error.png:./src/icons/error.png}]

$let[user;$slashOption[user]]
$let[reason;$replaceText[$replaceText[$checkCondition[$slashOption[reason]==];true;Не указана];false;$slashOption[reason]]]`
}];